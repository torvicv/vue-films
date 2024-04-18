<template>
    <fwb-pagination v-model="props.page" :total-pages="props.pages" show-icons></fwb-pagination>
</template>

<script setup>
    import { defineProps } from 'vue';
    import {FwbPagination} from 'flowbite-vue';

    const props = defineProps({
        pages: {
            type: Number,
            required: true
        },
        page: {
            type: Number,
            required: true
        }
    });
</script>