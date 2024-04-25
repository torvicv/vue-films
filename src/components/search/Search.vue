<script setup>
import { FwbPagination } from "flowbite-vue";
import { ref, onMounted, onUpdated, watch } from "vue";
import { useMenuStore } from "../../menu";
import axios from "axios";
import RatingStars from "./../elements/RatingStars.vue";

const headers = {
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_BEARER_TOKEN,
  },
};

let pages = null;
let films = ref();
let currentPage = ref();
let urlUpdated = ref(null);
let checkUpdate = ref(false);

const props = defineProps({
  url: String,
});

const emit = defineEmits();

const menu = useMenuStore();

const shareTotalPages = () => {
  emit("totalPages", pages);
};
const changePage = (value) => {
  currentPage.value = value;
};
onMounted(async () => {
  menu.setTitle("Búsqueda");
  const url = props.url;
  await axios
    .get(url, headers)
    .then((response) => {
      films.value = response.data.results;
      pages = response.data.total_pages;
    })
    .catch((error) => {
      console.log(error);
    });
  await shareTotalPages();
});

onUpdated(async () => {
  urlUpdated.value = props.url;
});

watch(currentPage, async (val) => {
  const url = props.url.replace(/page=\d{1,3}/g, "page=" + val);
  await axios
    .get(url, headers)
    .then((response) => {
      films.value = response.data.results;
      pages = response.data.total_pages;
    })
    .catch((error) => {
      console.log(error);
    });
  await shareTotalPages();
});

watch(urlUpdated, async(val) => {
  const urlReplace = val.replace(/page=\d{1,3}/g, 'page=1');
    await axios
      .get(urlReplace, headers)
      .then((response) => {
        if (JSON.stringify(films.value) !== JSON.stringify(response.data.results)) {
          films.value = response.data.results;
          pages = response.data.total_pages;
        }
      })
      .catch((error) => {
        console.log(error);
      });
    await shareTotalPages();
  });

</script>

<template>
  <div class="flex items-center w-full flex-col bg-slate-50 mb-10">
    <h1 class="text-6xl text-center font-extrabold my-8">Búsqueda</h1>
    <div class="grid grid-cols-3 gap-8 mx-12 w-5/6 relative">
      <div v-for="(film, index) in films">
        <div
          class="z-10 mx-2 relative w-full h-full rounded-xl overflow-hidden transition-all transition-700 hover:shadow-[0_0_12px_#ccccccDD] hover:scale-[1.05]"
        >
          <div class="absolute bg-[#000000BB] text-white bottom-0 p-4 w-full">
            <h2 class="text-xl font-bold mb-4 flex justify-between">
              <span v-if="film.title">
                {{ film.title }}
              </span>
              <span v-else>
                {{ film.original_name }}
              </span>
              <RatingStars :rating="film.vote_average" />
            </h2>
            <p>{{ film.overview }}</p>
          </div>
          <img
            class="w-full"
            :src="`https://image.tmdb.org/t/p/w500${film.poster_path}`"
            alt="poster"
          />
        </div>
        <div
          v-if="index % 3 === 0"
          class="w-full absolute left-2 my-3 h-0 border border-slate-200 z-0"
        ></div>
      </div>
    </div>
  </div>
  <fwb-pagination
    v-model="currentPage"
    :total-pages="pages"
    @page-changed="changePage"
    show-icons
  ></fwb-pagination>
</template>
