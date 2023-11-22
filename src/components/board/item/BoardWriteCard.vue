<script setup>
import axios from "axios";
import { ref } from "vue";
import AWS from "aws-sdk";
import { v4 as UUID } from "uuid";

const subjects = ref("");
const content = ref("");
const editedFileInfo = ref("");
const yourFileVariableHere = ref(null); // 파일 변수를 추가해야 합니다.

// 파일이 변경되었을 때 실행되는 메소드입니다.
const handleImageChange = (event) => {
  const selectedFile = event.target.files[0];
  editedFileInfo.value = URL.createObjectURL(selectedFile);
  yourFileVariableHere.value = selectedFile; // 파일 변수에 선택한 파일을 할당합니다.
};
// const {
//   VITE_BUCKET_NAME,
//   VITE_BUCKET_REGION,
//   VITE_IDENTITY_POOL_ID,
//   VITE_IMAGE_URL,
//   VITE_SECRET_ACCESS_KEY,
//   VITE_ACCESS_KEY_ID,
// } = import.meta.env;

// console.log(VITE_BUCKET_NAME);
const uploadedFile = ref({});

// const place = ref({
//   placeName: "",
//   placeAddr: "",
//   placeType: "",
//   placeContent: "",
//   placeDate: "",
//   placeImgUrl: "",
//   placeLat: "",
//   placeLng: "",
// });

const uploadFilefunction = function () {
  // Set the Region
  console.log("uploadfile");
  // console.log("upload file" + VITE_BUCKET_REGION);
  // AWS.config.update({
  //   region: VITE_BUCKET_REGION,
  //   credentials: new AWS.CognitoIdentityCredentials({
  //     IdentityPoolId: VITE_IDENTITY_POOL_ID,
  //     // accesskeyId: VITE_ACCESS_KEY_ID,
  //     // secretAccessKey: VITE_SECRET_ACCESS_KEY,
  //   }),
};

const getFileExtension = function (fileName) {
  const len = fileName.length;
  const lastDot = fileName.lastIndexOf(".");
  const extension = fileName.substring(lastDot, len).toLowerCase();
  return extension;
};

// const getuserinfo =
const insertData = async () => {
  // Implement the logic to insert data or perform an action
  console.log("Insert button clicked!");
  console.log("  subjects:", subjects.value);
  console.log("  content:", content.value);
  console.log("File Info:", editedFileInfo.value);

  let formData = new FormData();
  formData.append("userId", sessionStorage.getItem("userId"));
  formData.append("subjects", subjects.value);
  formData.append("content", content.value);
  console.log(yourFileVariableHere.value);
  formData.append("fileInfos", yourFileVariableHere.value); // 파일을 formData에 추가해야 합니다.

  try {
    const response = await axios.post(
      "http://localhost:80/article/write",
      formData, // FormData를 전송합니다.
      {
        headers: {
          "Content-Type": "multipart/form-data", // 헤더의 오타 수정
        },
      }
    );

    if (response.data) {
      console.log(response.data);
    }
    uploadFilefunction();
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
          v-model="subjects"
          class="form-control py-3 my-5"
          placeholder="제목"
        />

        <input
          v-model="content"
          class="form-control py-3 my-5"
          placeholder=" 내용"
          style="height: 600px"
        />

        <div>
          <input
            type="file"
            @change="handleImageChange"
            class="form-control form-control-lg my-5"
            accept="image/*"
            id="place-image"
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
