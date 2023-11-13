<script setup>
import { defineProps } from 'vue';

const props = defineProps(['boardsearch']);

</script>

<template>
    <div class="d-flex">
        <p>{{ boardsearch  }}</p>
    </div>
    
</template>


<style scoped>
/* Add your styles here */
</style>
