<script setup>
import axios from "axios";
import { ref } from "vue";
import AWS from "aws-sdk";
import { v4 as UUID } from "uuid";

const subjects = ref("");
const content = ref("");
const editedFileInfo = ref("");

const {
  VITE_BUCKET_NAME,
  VITE_BUCKET_REGION,
  VITE_IDENTITY_POOL_ID,
  VITE_IMAGE_URL,
  VITE_SECRET_ACCESS_KEY,
  VITE_ACCESS_KEY_ID,
} = import.meta.env;

console.log(VITE_BUCKET_NAME);
const uploadedFile = ref({});

const place = ref({
  placeName: "",
  placeAddr: "",
  placeType: "",
  placeContent: "",
  placeDate: "",
  placeImgUrl: "",
  placeLat: "",
  placeLng: "",
});

const uploadFilefunction = function () {
  // Set the Region
  console.log("uploadfile");
  console.log("upload file" + VITE_BUCKET_REGION);
  AWS.config.update({
    region: VITE_BUCKET_REGION,
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: VITE_IDENTITY_POOL_ID,
      accesskeyId: VITE_ACCESS_KEY_ID,
      secretAccessKey: VITE_SECRET_ACCESS_KEY,
    }),
  });

  // Create S3 service object
  const s3 = new AWS.S3({
    apiVersion: "2006-03-01",
    params: {
      Bucket: VITE_BUCKET_NAME,
    },
  });

  s3.upload(
    {
      Key: place.value.uuid,
      Body: uploadedFile.value,
      ACL: "public-read",
    },
    function (err, data) {
      console.log(uploadedFile.value);
      // console.log(uploadedFile.value.uuid);

      if (err) {
        console.log(err);
        return alert("There was an error uploading your photo: ", err.message);
      }
      alert("Successfully uploaded photo");
      console.log(data);
    }
  );
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

  // uploadedFile.value = editedFileInfo;

  const file = document.getElementById("place-image").files[0];
  const uuid = UUID(file.name);
  console.log(uuid);
  place.value.placeImgUrl = VITE_IMAGE_URL + uuid + getFileExtension(file.name);
  console.log(place.value.placeImgUrl);
  place.value.uuid = uuid + getFileExtension(file.name);
  console.log(file);
  uploadedFile.value = file;
  console.log(uploadedFile);

  try {
    const response = await axios.post("http://localhost:80/article/write", {
      userId: sessionStorage.getItem("userId"),
      subjects: subjects.value,
      content: content.value,
    });

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
