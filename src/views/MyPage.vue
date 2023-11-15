<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <MyPageCard></MyPageCard>

        <div class="col-md-12 mb-3 d-flex align-items-end justify-content-center">
          <h1 class="mb-2 me-5 ms-5 col-md-6 text-center mt-5">내가 정복한 산</h1>
          <router-link
            to="/conqueredmountain"
            class="d-flex flex-row align-items-center nav-link ms-5"
          >
            <button type="button" class="btn btn-secondary rounded-pill col-12 ms-2 mb-0">
              추가하기<i class="bi bi-arrow-right"></i>
            </button>
          </router-link>
        </div>

        <table class="table border-primary table-hover">
          <thead>
            <tr>
              <th scope="col" class="col-3">산 이름</th>
              <th scope="col" class="col-3">높이</th>
              <th scope="col" class="col-3">정복 수</th>
              <th scope="col" class="col-3">최근 등반 일자</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in items" :key="index">
              <td>
                <router-link
                  to="/mountainview"
                  style="text-decoration-line: none"
                  class="text-dark"
                >
                  {{ item.mntiname }}
                </router-link>
              </td>

              <td>{{ item.mntihigh }}</td>
              <td>{{ item.mnticonquerednum }}</td>
              <td>{{ item.lastConqueredDate }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import MyPageCard from '@/components/Mypage/MyPageCard.vue';
// Add your ref imports if needed

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
