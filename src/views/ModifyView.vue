<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <MyPageCard></MyPageCard>

        <div class="col-md-12 mb-3 d-flex align-items-end justify-content-center">
          <h1 class="mb-2 me-3 col-md-6 text-center">회원 정보 수정</h1>
        </div>

        <div class="card bg-info text-dark rounded-pill d-flex justify-content-around">
          <div class="d-flex">
            <input type="file" @change="handleImageChange" class="form-control" accept="image/*" />

            <img :src="editedFileInfo" class="img-fluid rounded mx-auto d-block" />

            <button @click="insertData" class="btn btn-primary" style="width: 100%">등록</button>
          </div>
          <input
            type="text"
            class="form-control mt-5"
            style="margin-left: 10px; width: 50%"
            placeholder="이름 Name"
          />
          <input
            type="text"
            class="form-control mt-5"
            style="margin-left: 10px; width: 50%"
            placeholder="비밀번호"
          />
          <input
            type="text"
            class="form-control mt-5"
            style="margin-left: 10px; width: 50%"
            placeholder="비밀번호확인"
          />
          <input
            type="text"
            class="form-control mt-5"
            style="margin-left: 10px; width: 50%"
            placeholder="주소"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MyPageCard from '../components/Mypage/MyPageCard.vue';

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
