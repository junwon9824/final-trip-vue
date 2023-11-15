<template>
    <div>
        <tr>
            <td>
                <div class="d-flex justify-content-around align-items-center py-3">
                    <p>{{ searchResult.mntiname }}</p>
                    <p>{{ searchResult.mntidetails }}</p>
                </div>
            </td>
        </tr>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
const props = defineProps(['searchResult']);
if (props.searchResult) {
    console.log(props.searchResult);
    console.log(props.searchResult.mntidetails);
}
</script>

<style scoped>
/* Add your component styles here */
</style>
