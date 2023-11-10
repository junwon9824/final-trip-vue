<script setup>
import { ref } from 'vue';
const saveId = ref(false);

const handleIdSaveClick = () => {
    console.log('아이디 저장 clicked');
};

const handlePasswordRecoveryClick = () => {
    console.log('비밀번호 찾기 clicked');
};

</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h1>회원가입</h1>
                <div class="col-md-6 mb-3 d-flex align-items-end">
                    <label for="userId" class="form-label col-md-3 me-3 mb-2">아이디</label>
                    <input type="text" class="form-control col-md-8 mb-0" id="userId" placeholder="아이디를 입력하세요">
                    <button type="button" class="btn btn-primary col-md-4 ms-2 mb-0">중복확인</button>
                </div>



                <div class="mb-3">
                    <label for="userPassword" class="form-label">비밀번호</label>
                    <input type="password" class="form-control" id="userPassword" placeholder="비밀번호를 입력하세요">
                </div>
 

                <div class="mb-3">
                    <label for="userName" class="form-label">이름</label>
                    <input type="text" class="form-control" id="userName" placeholder="이름 입력하세요">
                </div>

                <div class="mb-3">
                    <label for="userAddress" class="form-label">주소</label>
                    <input type="text" class="form-control" id="userAddress" placeholder="주소 입력하세요">
                </div>

                <div class="d-flex">
                    <button type="button" class="btn btn-primary flex-grow-1">취소</button>
                    <button type="button" class="btn btn-primary flex-grow-1">회원가입</button>
                </div>
            </div>

            <div class="col-lg-6">
                <img src="@/assets/mountain_car.png" class="img-fluid rounded mx-auto d-block" alt="..." />
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

button {
    margin-left: 10px;
}

.d-flex {
    margin-top: 10px;
    /* Adjust margin as needed */
}

.flex-grow-1 {
    flex-grow: 1;
}

.container {
  margin-top: 20px; /* Adjust the value as needed */
}
</style>
