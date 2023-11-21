<script setup>
import { onMounted } from 'vue';
import AWS from 'aws-sdk';

//최초로 실행될 때 딱 1번만 호출: AWS 암호키 장착 => S3로 파일을 날릴 수 있다
onMounted(() => {
  AWS.config.update({
    accessKeyId: 'AKIARLLNOJVHOKEOUMCS',
    secretAccessKey: '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',
    region: 'ap-northeast-2',
  });
});
</script>

<template>
  <div>
    <input
      type="file"
      @change="handleImageChange"
      class="form-control form-control-lg my-5"
      accept="image/*"
    />
  </div>
</template>

<style scoped></style>
