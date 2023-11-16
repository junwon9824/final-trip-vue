<template>
    <div>
      <div class="card text-dark align-items-center">
        <img
          src="../assets/DALL·E 2023-11-15 10.51.50 - Create an illustration of a Korean mountain landscape for a website's main banner, featuring a diverse group of people hiking. The design should be si.png"
          class="col-lg-12"
          alt="..."
          style="height: 400px"
        />
        <div class="card-img-overlay d-flex flex-column align-items-center justify-content-center">
          <p class="fw-bold fs-3 text-secondary">Card title</p>
          <p class="text-seconadary col-6">
            This is a wider card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.
          </p>
        </div>
      </div>
      <div class="container">
        <MountainConqueror :ranker="items"></MountainConqueror>
        <RecordCard class="mt-5" :records="items"></RecordCard>
      </div>
    </div>
  </template>
  
  <script setup>
  import MountainConqueror from '../components/mountain/MountainConqueror.vue';
  import RecordCard from '../components/mountain/RecordCard.vue';
  
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
      date: '2023-11-10 12:34:56',
      rank: 2,
      name: 'zahi',
      count: 5,
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
      date: '2023-11-11 10:45:30',
      rank: 4,
      name: 'Milad',
      count: 3,
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
      date: '2023-11-11 10:45:30',
      rank: 4,
      name: 'Arash',
      count: 1,
    },
  ];
  </script>
  
  <style scoped>
  /* Your existing styles */
  </style>
  