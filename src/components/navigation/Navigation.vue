<template>
  <fwb-sidebar>
    <fwb-sidebar-item :logo="'X'" :link="'#'">
        <div @click="closeMenu">
          X
        </div>
    </fwb-sidebar-item>
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
          <router-link to="/cartelera" class="pl-11 w-full block">Cartelera</router-link>
        </fwb-sidebar-item>
        <fwb-sidebar-item>
          <router-link to="/popular" class="pl-11 w-full block">Populares</router-link>
        </fwb-sidebar-item>
        <fwb-sidebar-item>
          <router-link to="/proximas" class="pl-11 w-full block">Proximamente</router-link>
        </fwb-sidebar-item>
        <fwb-sidebar-item class="">
          <router-link to="/mejores" class="pl-11 w-full block">Mejores películas</router-link>
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
          <router-link to="/hoy" class="pl-11 w-full block">Estrenos hoy</router-link>
        </fwb-sidebar-item>
        <fwb-sidebar-item>
          <router-link to="/en-el-aire" class="pl-11 w-full block">Retransmitiendo</router-link>
        </fwb-sidebar-item>
        <fwb-sidebar-item>
          <router-link to="/populares" class="pl-11 w-full block">Populares</router-link>
        </fwb-sidebar-item>
        <fwb-sidebar-item>
          <router-link to="/mejores-series" class="pl-11 w-full block">Mejores series</router-link>
        </fwb-sidebar-item>
      </template>
    </fwb-sidebar-dropdown-item>
  </fwb-sidebar>
</template>
<script setup>
import {
  FwbSidebar,
  FwbSidebarItem,
  FwbSidebarDropdownItem
} from "flowbite-vue";
import {
  useMenuStore
} from './../../menu.js';

const closeMenu = () => {
  // this.$emit("close-menu");
  const menu = useMenuStore();
  menu.setIsOpen(false);
  document.querySelector('#nav').classList.add('animate-[menuback_2s_ease-in-out_forwards]');
  document.querySelector('#nav').classList.remove('animate-[menu_2s_ease-in-out_forwards]');
};
</script>
