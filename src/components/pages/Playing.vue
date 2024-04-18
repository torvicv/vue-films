<script setup>
  import Playing from '../films/Playing.vue';
  import { FwbPagination } from 'flowbite-vue';
  import { ref } from 'vue';

  let pages = ref(1);
  const currentPage = ref(1);
  console.log(pages);
  const totalPages = (value) => {
    pages.value = value;
  }
  const changePage = (value) => {
    currentPage.value = value;
  }
</script>

<template>
  <Playing :page="currentPage" @totalPages="totalPages" />
  <fwb-pagination v-model="currentPage" :total-pages="pages" @page-changed="changePage" show-icons></fwb-pagination>
</template>