<script setup>
import { defineProps } from 'vue';

const props = defineProps({'wishlist': Object });


</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 mx-auto">
                <div class="card">

                    <div class=" d-flex">

                        <div class="card-body">
                            <img src="@/assets/mountain_car.png" class="img-fluid rounded mx-auto d-block" alt="..." />

                        </div>

                        <div class="card-body">
                            <h1 class="card-title mb-6">{{  wishlist.subject }} </h1>
                            <p class="card-text"> {{  wishlist. content }}</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>