<script setup>
import RecordCardItem from './item/RecordCardItem.vue';
import { ref } from 'vue';
const recordList = [
  {
    rank: 1,
    name: 'Zahi',
    count: 10,
    date: '2023-02-23',
  },
  {
    rank: 2,
    name: 'Milad',
    count: 9,
    date: '2023-02-22',
  },
  {
    rank: 3,
    name: 'Arash',
    count: 8,
    date: '2023-02-23',
  },
  {
    rank: 4,
    name: 'zahi',
    count: 7,
    date: '2023-02-23',
  },
  {
    rank: 5,
    name: 'zahi',
    count: 6,
    date: '2023-02-23',
  },
];
const records = ref(recordList);
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