<script setup>
import { FwbRating } from "flowbite-vue";
import { defineProps } from 'vue';

const props = defineProps({
    rating: {
        type: Number,
        default: 0
    }
});
const rate_average = props.rating / 2;
const rate_average_fixed = parseFloat(rate_average.toString()).toFixed(2);
</script>

<template>
    <fwb-rating :rating="rate_average" :size="sm">
        <template #besideText>
            <p class="ml-2 text-sm font-bold text-white">
                {{ rate_average_fixed }}
            </p>
        </template>
    </fwb-rating>
</template>