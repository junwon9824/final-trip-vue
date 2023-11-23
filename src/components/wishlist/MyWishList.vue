<script setup>
import { defineProps, ref } from 'vue';
import { deleteWishList } from '@/api/wishlist';
defineProps({ wishlist: Object });
import { storeToRefs } from 'pinia';
import { useMemberStore } from '@/stores/member';
const emit = defineEmits(['getWishLists']);

const prefix = 'https://www.forest.go.kr/images/data/down/mountain';

const { userInfo } = storeToRefs(useMemberStore());

const wish = ref({
    userId: '',
    mntilistno: '',
});

const deleteWishListItem = (mntilistno) => {
    wish.value.userId = userInfo.value.userId;
    wish.value.mntilistno = mntilistno;

    deleteWishList(
        wish.value,
        ({ data }) => {
            console.log(data);
            emit('getWishLists');
        },
        (err) => {
            console.log(err);
        }
    );
};
</script>
<template>
    <div class="card mx-2 rounded-5 shadow" style="width: 200px">
        <img
            class="card-img-top px-2 pt-2 rounded-5"
            style="height: 150px"
            :src="`${prefix}/${wishlist.mntiimg}`"
            alt="Card image"
        />
        <div class="card-body m-0 px-2">
            <p class="fs-5 fw-bold m-0 p-0">{{ wishlist.mntiname }}</p>
            <p class="fs-6 m-0 p-0">
                <i class="bi bi-geo-alt-fill text-danger"></i
                >{{ wishlist.mntiadd.substring(0, wishlist.mntiadd.length - 7) }}
            </p>
        </div>
        <div class="card-footer m-0 p-0">
            <button class="btn rounded-5 p-0 ms-4" @click="deleteWishListItem(wishlist.mntilistno)">삭제</button>
        </div>
    </div>
</template>

<style scoped></style>
