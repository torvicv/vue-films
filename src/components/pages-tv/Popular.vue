<script setup>
  import { FwbPagination } from 'flowbite-vue';
  import { ref } from 'vue';
  import Popular from '../tv/Popular.vue';

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
  <Popular :page="currentPage" @totalPages="totalPages" />
  <fwb-pagination v-model="currentPage" :total-pages="pages" @page-changed="changePage" show-icons></fwb-pagination>
</template>