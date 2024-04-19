<script setup>
  import Navigation from './navigation/Navigation.vue';
  import Menu from './../assets/menu.svg';
  import { useMenuStore } from '../menu';

  const openMenu = () => {
    //this.$refs.classList.remove('animate-[menuback_2s_ease-in-out_forwards]');
    document.querySelector('#nav').classList.remove('animate-[menuback_2s_ease-in-out_forwards]');
    document.querySelector('#nav').classList.remove('hidden');
    document.querySelector('#nav').classList.add('animate-[menu_2s_ease-in-out_forwards]');
    menu.setIsOpen(true);
  }

  const menu = useMenuStore();
</script>

<template>
  <button @click="openMenu">
    <img :src="Menu" alt="menu" />
  </button>
  <Navigation id="nav" class="hidden" />
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view></router-view>
</template>
