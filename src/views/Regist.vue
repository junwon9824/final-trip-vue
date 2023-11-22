<script setup>
import { ref } from "vue";
import { checkid, join } from "../api/members";

const userId = ref("");
const userName = ref("");
const address = ref("");
const password = ref("");
const checkpassword = ref("");
const passId = ref(false);

const userinfo = ref({
  userId: "",
  userPwd: "",
  userName: "",
  address: "",
  lat: 0,
  lng: 0,
});

const lngLat = ref({
  lat: 0,
  lng: 0,
});
const KAKAO_REST_API_KEY = "c57b01f7e32c7befe7fdb4c37d0d4071";

async function convertAddressToCoordinates(address) {
  try {
    const url = `https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(
      address
    )}`;
    const response = await fetch(url, {
      headers: {
        Authorization: `KakaoAK ${KAKAO_REST_API_KEY}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      lngLat.value.lng = parseFloat(data.documents[0].address.x);
      lngLat.value.lat = parseFloat(data.documents[0].address.y);
      userinfo.value.lat = lngLat.value.lat;
      userinfo.value.lng = lngLat.value.lng;
      console.log(userinfo.value);
      final();
    } else {
      console.error(
        "Failed to fetch data:",
        response.status,
        response.statusText
      );
      alert("주소를 가져오지 못했습니다.");
      return null;
    }
  } catch (error) {
    console.error("Error during fetch:", error.message);
    alert("주소를 가져오지 못했습니다.");
    return null;
  }
}

const checkId = () => {
  checkid(
    userId.value,
    ({ data }) => {
      if (data == "1") {
        alert("중복된 아이디입니다.");
        userId.value = "";
        return;
      } else {
        alert("사용 가능한 아이디입니다.");
        passId.value = true;
        return;
      }
    },
    (err) => {
      console.log(err);
    }
  );
};

const regist = () => {
  if (userId.value == "") {
    alert("아이디를 입력해주세요.");
    return;
  }
  if (passId.value == false) {
    alert("아이디 중복확인을 해주세요.");
    return;
  }
  if (password.value == "" || checkpassword.value == "") {
    alert("비밀번호를 입력해주세요.");
    return;
  }
  if (password.value != checkpassword.value) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }
  if (userName.value == "") {
    alert("이름을 입력해주세요.");
    return;
  }
  userinfo.value.userId = userId.value;
  userinfo.value.userPwd = password.value;
  userinfo.value.userName = userName.value;
  userinfo.value.address = address.value;
  convertAddressToCoordinates(address.value).catch((err) => {
    console.log(err);
    alert("주소를 다시 입력해주세요.");
    return;
  });
};

const final = () => {
  join(
    userinfo.value,
    ({ data }) => {
      if (data == "Member registered successfully") {
        alert("회원가입이 완료되었습니다.");
        location.href = "/login";
      } else {
        alert("회원가입에 실패하였습니다.");
        return;
      }
    },
    (err) => {
      console.log(err);
    }
  );
};
</script>

<template>
  <div class="container bg-light rounded-3 p-0 mt-5">
    <div class="row">
      <div class="col-5 d-flex justify-content-center align-items-center">
        <div
          class="col-9 d-flex flex-column justify-content-around"
          style="height: 80%"
        >
          <p class="fs-4 fw-bold">회원가입</p>
          <div class="">
            <label for="userId" class="form-label mb-0 pb-0 fw-bold"
              >아이디</label
            >
            <div class="d-flex col-9 py-0">
              <input
                type="text"
                class="form-control col-md-8 mt-0 py-2"
                id="userId"
                placeholder="아이디를 입력하세요"
                v-model="userId"
              />
              <button
                type="button"
                class="btn btn-success col-md-4 ms-2 mb-0 fw-bold text-white"
                @click="checkId()"
              >
                중복확인
              </button>
            </div>
          </div>

          <div class="mb-3 mt-3">
            <label for="userPassword" class="form-label fw-bold"
              >비밀번호</label
            >
            <input
              type="password"
              class="form-control py-2"
              id="userPassword"
              placeholder="비밀번호를 입력하세요"
              v-model="password"
            />
          </div>
          <div class="mb-3">
            <label for="userPassword" class="form-label fw-bold"
              >비밀번호 확인</label
            >
            <input
              type="password"
              class="form-control py-2"
              id="userPassword"
              placeholder="비밀번호를 입력하세요"
              v-model="checkpassword"
            />
          </div>

          <div class="mb-3">
            <label for="userName" class="form-label fw-bold">이름</label>
            <input
              type="text"
              class="form-control py-2"
              id="userName"
              placeholder="이름 입력하세요"
              v-model="userName"
            />
          </div>

          <div class="mb-3">
            <label for="userAddress" class="form-label fw-bold">주소</label>
            <input
              v-model="address"
              type="text"
              class="form-control py-2"
              id="userAddress"
              placeholder="주소 입력하세요"
            />
          </div>

          <div class="d-flex justify-content-center">
            <button
              type="button"
              class="btn btn-outline-success col-6 py-2 mx-1 fw-bold"
            >
              취소
            </button>
            <button
              type="button"
              class="btn btn-success col-6 py-2 mx-1 fw-bold text-white"
              @click="regist()"
            >
              회원가입
            </button>
          </div>
        </div>
      </div>

      <div class="col-lg-7">
        <img
          src="@/assets/mountain_car.png"
          class="img-fluid rounded-end mx-auto d-block"
          alt="..."
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  height: 100%;
  width: 100%;
  text-align: left;
}
</style>
