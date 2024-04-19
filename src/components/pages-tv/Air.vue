<script setup>
  import { FwbPagination } from 'flowbite-vue';
  import { onMounted, ref } from 'vue';
  import Air from '../tv/Air.vue';
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
    menu.setTitle('Retransmitiendo');
  });
</script>

<template>
  <Air :page="currentPage" @totalPages="totalPages" />
  <fwb-pagination v-model="currentPage" :total-pages="pages" @page-changed="changePage" show-icons></fwb-pagination>
</template>