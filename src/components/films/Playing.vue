<script>
  import axios from "axios";
  import RatingStars from './../elements/RatingStars.vue';
  import { ref } from "vue";

  
  
  const headers = {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+import.meta.env.VITE_BEARER_TOKEN
    }
  };
  export default {
    setup () {
      const query = ref();
      const year = ref();
      return {
        query,
        year
      };
    },
    props: ['page'],
    components: {
      RatingStars
    },
    data() {
      return {
        films: [],
        pages: null,
      };
    },
    async mounted(props) {
      const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page='+this.$props.page
      await axios
       .get(url, headers)
       .then((response) => {
          this.films = response.data.results;
          this.pages = response.data.total_pages;
        })
       .catch((error) => {
          console.log(error);
        });
        await this.shareTotalPages();
    },
    watch: {
        async page(val) {
          if (this.query.value && this.query.value !== '') { 
            let yearValue = '';
            let queryValue = '';
            console.log(query.value);
            if (this.query.value !== '') {
              queryValue = '&query=' + query.value;
            }
            if (this.year.value !== '') {
              yearValue = '&year=' + year.value;
            }
            const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page='+val+queryValue+yearValue
            axios
            .get(url, headers)
            .then((response) => {
                this.films = response.data.results;
                this.pages = response.data.total_pages;
              })
            .catch((error) => {
                console.log(error);
              });
          } else {
            const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page='+val
            await axios
            .get(url, headers)
            .then((response) => {
                this.films = response.data.results;
                this.pages = response.data.total_pages;
                })
            .catch((error) => {
                console.log(error);
                });
          }
          await this.shareTotalPages();
        }
    }

  }
</script>

<template>
  <div class="flex items-center w-full flex-col bg-slate-50 mb-10">
    <h1 class="text-6xl text-center font-extrabold my-8">En cartelera</h1>
  <div class="grid grid-cols-3 gap-8 mx-12 w-5/6 relative">
    <div v-for="(film, index) in films">
      <div class="z-10 mx-2 relative w-full h-full rounded-xl overflow-hidden transition-all transition-700 hover:shadow-[0_0_12px_#ccccccDD] hover:scale-[1.05]">
        <div class="absolute bg-[#000000BB] text-white bottom-0 p-4 w-full">
          <h2 class="text-xl font-bold mb-4 flex justify-between">{{ film.title }}
            <RatingStars :rating="film.vote_average" />
          </h2>
          <p>{{ film.overview }}</p>
        </div>
        <img class="w-full" :src="`https://image.tmdb.org/t/p/w500${film.poster_path}`" alt="poster">
      </div>
      <div v-if="index % 3 === 0" class="w-full absolute left-2 my-3 h-0 border border-slate-200 z-0"></div>
    </div>
  </div>
</div>
</template>