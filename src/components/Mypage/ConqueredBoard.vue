<script setup>
import { ref, onMounted } from "vue";
import { listSido, listGugun, AddconqueredMountain } from "@/api/mountain";
import axios from "axios";
const editedMountainName = ref("");
const editedFileInfo = ref("");

const param = ref({
  sidoCode: 0,
  gugunCode: 0,
});

const sidoList = ref([]);
const gugunList = ref([]);

const selectedSido = ref("시/도");
const selectedGugun = ref("구/군");
const userIdv = sessionStorage.getItem("userId");

console.log(userIdv);

const onChangeSido = (val) => {
  console.log(val);
  listGugun(
    { sido: val },
    ({ data }) => {
      let options = [];
      data.forEach((gugun) => {
        options.push({ text: gugun.gugun_name, value: gugun.gugun_code });
        console.log(gugun.gugun_code);
      });

      gugunList.value = options;
      console.log(gugunList.value);
    },
    (err) => {
      console.log(err);
    }
  );
};

const onChangeGugun = (val) => {
  console.log("ssss", val);

  selectedGugun.value = val;

  param.value.sidoCode = selectedSido.value;
  param.value.gugunCode = selectedGugun.value;
  console.log("codeeee", selectedSido.value);
  console.log("codeeee", selectedGugun.value);
};

// const onChangeGugun = (event) => {
//   const val = event;
//   console.log("ssss", val);

//   selectedGugun.value = val;

//   param.value.sidoCode = selectedSido.value;
//   param.value.gugunCode = val;
//   console.log("codeeee", selectedSido.value);
//   console.log("codeeee", val);

// };

// const onChangeGugun = () => {
//   const val = selectedGugun.value;
//   console.log("ssss", val);

//   param.value.sidoCode = selectedSido.value;
//   param.value.gugunCode = val;
//   console.log("siiiii", selectedSido.value);
//   console.log("guuuuu", val);
// };

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

onMounted(() => {
  getSidoList();
});

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
  try {
    console.log("in");

    const payload = {
      userId: userIdv,
      sido_code: selectedSido.value,
      gugun_code: selectedGugun.value,
      mntiname: editedMountainName.value,
    };

    const response = await axios.post(
      "http://localhost:80/mountain/add/conqueredMountain",
      payload
    );

    console.log(userIdv);
    console.log("codeeee", selectedSido.value);

    console.log("codeeee" + selectedGugun.value);

    console.log(response.data);

    // Handle the response if needed
  } catch (error) {
    console.log(error);
    alert("해당하는 산이 없습니다.");

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

            <!-- <select
              class="form-select bg-secondary fw-bold text-white"
              v-model="selectedGugun"
              @change="onChangeGugun(selectedGugun)"
            > -->
            <select
              class="form-select bg-secondary fw-bold text-white"
              v-model="selectedGugun"
              @change="onChangeGugun(selectedGugun)"
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
