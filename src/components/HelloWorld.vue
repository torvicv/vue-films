<script setup>
  import Navigation from './navigation/Navigation.vue';
</script>

<template>
  <Navigation />
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view></router-view>
</template>
