<script setup>
  import Navigation from './navigation/Navigation.vue';
  import Menu from './../assets/menu.svg';
  import { useMenuStore } from '../menu';
  import { onMounted } from 'vue';

  const openMenu = () => {
    //this.$refs.classList.remove('animate-[menuback_2s_ease-in-out_forwards]');
    document.querySelector('#nav').classList.remove('animate-[menuback_2s_ease-in-out_forwards]');
    document.querySelector('#nav').classList.remove('hidden');
    document.querySelector('#nav').classList.add('animate-[menu_2s_ease-in-out_forwards]');
    menu.setIsOpen(true);
  }

  onMounted(() => {
    menu.setTitle('Home');
  });

  const menu = useMenuStore();
</script>

<template>
  <button @click="openMenu" class="absolute left-2 top-2">
    <img :src="Menu" alt="menu" />
  </button>
  <Navigation id="nav" class="hidden fixed" />
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view></router-view>
</template>
