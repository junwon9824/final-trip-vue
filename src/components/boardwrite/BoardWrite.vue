<script setup>
import { ref } from 'vue';

const mountains = ref([]);
const editedMountainName = ref('');
const editedRegDate = ref('');
const editedFileInfo = ref('');

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

const insertData = () => {
  // Implement the logic to insert data or perform an action
  console.log('Insert button clicked!');
  console.log('Mountain Name:', editedMountainName.value);
  console.log('Registration Date:', editedRegDate.value);
  console.log('File Info:', editedFileInfo.value);
};
</script>

<template>
  <div class="container">
    <div class="card bg-info">
      <div class="card-body">
        <input v-model="editedMountainName" class="form-control my-3" placeholder="제목" />

        <input v-model="editedRegDate" class="form-control my-3" placeholder=" 내용" />

        <div>
          <input type="file" @change="handleImageChange" class="form-control" accept="image/*" />
          <img :src="editedFileInfo" class="img-fluid rounded d-block" />
        </div>

        <button @click="insertData" class="btn btn-primary">등록</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn btn-primary {
  margin-left: 90%;
}
</style>
