<script setup>
import { ref } from "vue";

const mountains = ref([]);
const editedMountainName = ref("");
const editedRegDate = ref("");
const editedFileInfo = ref("");

const sidoList = ref([]);
const gugunList = ref([]);

const selectedSido = ref("시/도");
const selectedGugun = ref("구/군");


const param = ref({
  sidoCode: 0,
  gugunCode: 0,
});


const onChangeSido = (val) => {
  listGugun(
    { sido: val },
    ({ data }) => {
      let options = [];
      data.forEach((gugun) => {
        options.push({ text: gugun.gugun_name, value: gugun.gugun_code });
      });
      gugunList.value = options;
      console.log(gugunList.value);
    },
    (err) => {
      console.log(err);
    }
  );
};

const getSidoList = () => {
  listSido(
    ({ data }) => {
      let options = [];

      data.forEach((sido) => {
        options.push({ text: sido.sido_name, value: sido.sido_code });
      });
      sidoList.value = options;
    },
    (err) => {
      console.log(err);
    }
  );
};

const onChangeGugun = () => {
  param.value.sidoCode = selectedSido.value;
  param.value.gugunCode = selectedGugun.value;
};

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

const insertData = async () => {
  // Implement the logic to insert data or perform an action
  console.log("Insert button clicked!");
  console.log("Mountain Name:", editedMountainName.value);
  console.log("Registration Date:", editedRegDate.value);
  console.log("File Info:", editedFileInfo.value);

  try {
    const payload = {
      word: editedMountainName.value,
      //   articleNo: ,
      content: editedRegDate.value,
      userId: sessionStorage.getItem("userId"),
    };

    const response = await axios.post(
      "http://localhost:80/mountain/write",
      payload
    );
    // Handle the response if needed
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
</script>

<template>
  <div class="container">
    <div class="card bg-info d-flex align-items-center rounded-4">
      <div class="card-body col-11">
        <input
          v-model="editedMountainName"
          class="form-control py-3 my-5"
          placeholder="이름 Name"
        />

        <div>
          <div class="form d-flex flex-row col-2 mb-3">
            <select
              class="form-select bg-secondary fw-bold text-white"
              v-model="selectedSido"
              @change="onChangeSido(selectedSido)"
            >
              <option selected disabled>시/도</option>
              <option
                v-for="sido in sidoList"
                :key="sido.value"
                :value="sido.value"
              >
                {{ sido.text }}
              </option>
            </select>
            <select
              class="form-select bg-secondary fw-bold text-white"
              v-model="selectedGugun"
              @change="onChangeGugun"
            >
              <option selected disabled>구/군</option>
              <option
                v-for="gugun in gugunList"
                :key="gugun.value"
                :value="gugun.value"
              >
                {{ gugun.text }}
              </option>
            </select>
          </div>

          <input
            type="file"
            @change="handleImageChange"
            class="form-control form-control-lg my-5"
            accept="image/*"
          />
          <img :src="editedFileInfo" class="img-fluid rounded d-block" />
        </div>

        <div class="d-flex justify-content-end mb-3">
          <button
            @click="insertData"
            class="btn btn-secondary btn-lg rounded-pill"
          >
            등록<i class="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
