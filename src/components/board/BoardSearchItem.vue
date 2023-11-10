<script setup>
import { defineProps } from 'vue';

const props = defineProps(['boardsearch']);
</script>

<template>
    <div class="d-flex">
        <p>{{ props }}</p>
    </div>
    
</template>


<style scoped>
/* Add your styles here */
</style>
