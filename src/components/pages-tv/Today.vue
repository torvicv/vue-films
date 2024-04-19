<script setup>
  import { FwbPagination } from 'flowbite-vue';
  import { ref, onMounted } from 'vue';
  import Today from '../tv/Today.vue';
  import { useMenuStore } from '../../menu';

  let pages = ref(1);
  const currentPage = ref(1);
  console.log(pages);
  const totalPages = (value) => {
    pages.value = value;
  }
  const changePage = (value) => {
    currentPage.value = value;
  }
  const menu = useMenuStore();
  onMounted(() => {
    menu.setTitle('Estrenos hoy');
  });
</script>

<template>
  <Today :page="currentPage" @totalPages="totalPages" />
  <fwb-pagination v-model="currentPage" :total-pages="pages" @page-changed="changePage" show-icons></fwb-pagination>
</template>