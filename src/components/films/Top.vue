<script>
  import axios from "axios";
  import RatingStars from './../elements/RatingStars.vue';

  const headers = {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+import.meta.env.VITE_BEARER_TOKEN
    }
  };
  export default {
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
      const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page='+this.$props.page
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
            const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page='+val
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
        }
    },
    methods: {
      async shareTotalPages() {
          this.$emit('totalPages', this.pages);
          console.log(this.pages);
      }
    }

  }
</script>

<template>

<div class="flex items-center w-full flex-col bg-slate-50 mb-10">
  <h1 class="text-6xl text-center font-extrabold my-8">Mejores Películas</h1>
  <div class="grid grid-cols-3 gap-8 mx-12 w-5/6">
    <div v-for="film in films" class="mx-2 relative w-full rounded-xl overflow-hidden transition-all transition-700 hover:shadow-[0_0_12px_#ccccccDD] hover:scale-[1.05]">
      <div class="absolute bg-[#000000BB] text-white bottom-0 p-4">
        <h2 class="text-xl font-bold mb-4 flex justify-between">{{ film.title }}
          <RatingStars :rating="film.vote_average" />
        </h2>
        <p>{{ film.overview }}</p>
      </div>
      <img class="w-full" :src="`https://image.tmdb.org/t/p/w500${film.poster_path}`" alt="poster">
    </div>
  </div>
</div>
</template>