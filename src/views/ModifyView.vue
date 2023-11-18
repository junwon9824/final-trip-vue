<template>
    <div class="container">
        <p class="fs-2 fw-bold text-center">회원 정보 수정</p>

        <div class="card bg-info d-flex align-items-center rounded-4">
            <div class="card-body col-11">
                <div>
                    <input
                        type="file"
                        @change="handleImageChange"
                        class="form-control form-control-lg mt-5"
                        accept="image/*"
                    />

                    <img :src="editedFileInfo" class="img-fluid rounded d-block" />
                </div>

                <input type="text" class="form-control py-3 my-5" placeholder="이름 Name" v-model="userNamev"/>
                <input type="text" class="form-control py-3 my-5" placeholder="비밀번호" v-model="userPwdv"/>
                <input type="text" class="form-control py-3 my-5" placeholder="비밀번호확인"  />
                <input type="text" class="form-control py-3 my-5" placeholder="주소" v-model="addressv"/>
                <div class="d-flex justify-content-end mb-3">
                    <button @click="modify" class="btn btn-secondary btn-lg rounded-pill">
                        수정<i class="bi bi-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import MyPageCard from '../components/Mypage/MyPageCard.vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import {ref} from 'vue'
const router = useRouter();

const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            editedFileInfo.value = reader.result;
        };
        reader.readAsDataURL(file);
    }
};


const userIdv=sessionStorage.getItem('userId');
const userPwdv=ref('');
const userNamev=ref('');
const addressv=ref('');

const modify = async () => {

try {
    console.log("useridddd"+userIdv)
    console.log("useridddd"+userPwdv)
    console.log("useridddd"+userNamev)

    const response = await axios.put('http://localhost:80/user/modify', {
      userPwd: userPwdv.value,
      userName: userNamev.value,
      address: addressv.value,
      userId: userIdv,

    });

//   userName.value = response.data.userName;
//   address.value = response.data.address;
//   userPwd.value = response.data.userPwd;
//   userId.value = response.data.userId;

//   console.log("getttt" + response.data.userId);
//   console.log("getttt" + response.data.userName);
//   console.log("getttt" + response.data.address);
  router.push('/mypage')

} 
catch (error) {
  console.log(error);
  throw new Error(error);
}
};


const items = [
    {
        mntilistno: 1,
        mntiname: 'Mountain A',
        mntidetails: 'Details about Mountain A',
        mntiadd: 'Address of Mountain A',
        mntihigh: 1500,
        sido_code: 1,
        gugun_code: 101,
        mntiimg: 'url_to_image_A',
        mnticonquerednum: 3,
        lastConqueredDate: '2023-11-10 12:34:56',
    },
    {
        mntilistno: 2,
        mntiname: 'Mountain B',
        mntidetails: 'Details about Mountain B',
        mntiadd: 'Address of Mountain B',
        mntihigh: 2000,
        sido_code: 2,
        gugun_code: 202,
        mntiimg: 'url_to_image_B',
        mnticonquerednum: 5,
        lastConqueredDate: '2023-11-11 10:45:30',
    },
    // Add more items as needed
];
</script>

<style scoped>
/* Your existing styles */
</style>
