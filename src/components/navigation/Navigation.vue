<template>
  <fwb-sidebar>
    <fwb-sidebar-cta @close="closeMenu" />
    <fwb-sidebar-dropdown-item>
      <template #icon>
        <svg
          class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 21"
        >
          <path
            d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"
          />
          <path
            d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"
          />
        </svg>
      </template>
      <template #trigger>Películas</template>
      <template #default>
        <fwb-sidebar-item>
          <router-link to="/cartelera" class="pl-11 w-full block"
            >Cartelera</router-link
          >
        </fwb-sidebar-item>
        <fwb-sidebar-item>
          <router-link to="/popular" class="pl-11 w-full block"
            >Populares</router-link
          >
        </fwb-sidebar-item>
        <fwb-sidebar-item>
          <router-link to="/proximas" class="pl-11 w-full block"
            >Proximamente</router-link
          >
        </fwb-sidebar-item>
        <fwb-sidebar-item class="">
          <router-link to="/mejores" class="pl-11 w-full block"
            >Mejores películas</router-link
          >
        </fwb-sidebar-item>
      </template>
    </fwb-sidebar-dropdown-item>
    <fwb-sidebar-dropdown-item>
      <template #icon>
        <svg
          class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 21"
        >
          <path
            d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"
          />
          <path
            d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"
          />
        </svg>
      </template>
      <template #trigger>Seríes TV</template>
      <template #default>
        <fwb-sidebar-item>
          <router-link to="/hoy" class="pl-11 w-full block"
            >Estrenos hoy</router-link
          >
        </fwb-sidebar-item>
        <fwb-sidebar-item>
          <router-link to="/en-el-aire" class="pl-11 w-full block"
            >Retransmitiendo</router-link
          >
        </fwb-sidebar-item>
        <fwb-sidebar-item>
          <router-link to="/populares" class="pl-11 w-full block"
            >Populares</router-link
          >
        </fwb-sidebar-item>
        <fwb-sidebar-item>
          <router-link to="/mejores-series" class="pl-11 w-full block"
            >Mejores series</router-link
          >
        </fwb-sidebar-item>
      </template>
    </fwb-sidebar-dropdown-item>
    <div class="mb-6 flex flex-col gap-6 w-full">
      <div class="text-center text-xl">Filtros</div>
      <div class="flex gap-2 items-center">
        <label for="movie">Películas</label>
        <input type="checkbox" ref="movie" class="rounded" id="movie" />
        <label for="tv">Series TV</label>
        <input type="checkbox" ref="tv" class="rounded" id="tv" />
      </div>
      <div class="flex gap-3 w-full flex-col">
        <input
          class="border-b border-0 rounded-lg"
          type="text"
          ref="query"
          id="query"
          placeholder="título"
        />
        <input
          class="border-b border-0 rounded-lg"
          type="text"
          ref="year"
          id="year"
          placeholder="año"
        />
        <div v-if="error" class="text-red-600 text-xs">
          {{ error }}
        </div>
        <button
          class="bg-black text-white px-3 py-2 rounded-lg hover:bg-[#000000BB]"
          @click="searchFilm"
        >
          Buscar
        </button>
      </div>
    </div>
  </fwb-sidebar>
</template>
<script setup>
import {
  FwbSidebar,
  FwbSidebarItem,
  FwbSidebarDropdownItem,
  FwbSidebarCta,
} from "flowbite-vue";
import { useMenuStore } from "./../../menu.js";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const error = ref(null);
const query = ref();
const year = ref();
const tv = ref();
const movie = ref();
const props = defineProps(["page"]);
let pages = ref(1);
const currentPage = ref(1);
console.log(pages);
const totalPages = (value) => {
  pages.value = value;
};
const changePage = (value) => {
  currentPage.value = value;
};

const closeMenu = () => {
  const menu = useMenuStore();
  menu.setIsOpen(false);
  document
    .querySelector("#nav")
    .classList.add("animate-[menuback_2s_ease-in-out_forwards]");
  document
    .querySelector("#nav")
    .classList.remove("animate-[menu_2s_ease-in-out_forwards]");
};

const searchFilm = () => {
  let yearValue = "";
  let queryValue = "";
  let type = "";
  // return console.log(tv.value.value);
  if (tv.value.checked) {
    type = "tv";
  }
  if (movie.value.checked) {
    type = "movie";
  }
  if (movie.value.checked && tv.value.checked) {
    type = "multi";
    if (year.value.value !== null && year.value.value !== "") {
      error.value = 'El año no está disponible si seleccionas ambas opciones';
      return;
    }
  }

  if (type === "") {
    return console.log("no type chosen");
  }

  if (query.value.value !== "") {
    queryValue = "&query=" + query.value.value;
  }
  if (year.value.value !== "" && type !== 'multi') {
    yearValue = "&year=" + year.value.value;
  }
  const pUrl =
    "https://api.themoviedb.org/3/search/" +
    type +
    "?include_adult=false&language=en-US&page=" +
    currentPage.value +
    queryValue +
    yearValue;
  router.push({ name: "search", params: { url: pUrl } });
};
</script>
