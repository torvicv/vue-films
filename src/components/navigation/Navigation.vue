<script setup>
  import { FwbDropdown, FwbListGroup, FwbListGroupItem } from 'flowbite-vue';
</script>

<template>
  <fwb-dropdown text="Películas">
    <fwb-list-group>
      <fwb-list-group-item>
        <router-link to="/cartelera">Cartelera</router-link>
      </fwb-list-group-item>
      <fwb-list-group-item>
        <router-link to="/popular">Populares</router-link>
      </fwb-list-group-item>
      <fwb-list-group-item>
        <router-link to="/proximas">Proximamente</router-link>
      </fwb-list-group-item>
      <fwb-list-group-item>
        <router-link to="/mejores">Mejores películas</router-link>
      </fwb-list-group-item>
    </fwb-list-group>
  </fwb-dropdown>
</template>