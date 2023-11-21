<script setup>
import RecordCardItem from "./item/RecordCardItem.vue";
const props = defineProps(["records"]);
console.log("ppppppppp" + props.records[0].userName);
</script>

<template>
  <table class="table table-hover border-primary container-lg">
    <thead>
      <tr>
        <th>Rank</th>
        <th>이름</th>
        <th>총정복수</th>
        <th>최근 등반일자</th>
      </tr>
    </thead>
    <tbody>
      <RecordCardItem
        v-for="record in records"
        :key="record.rank"
        :record="record"
      ></RecordCardItem>
    </tbody>
  </table>
</template>

<style scoped></style>
