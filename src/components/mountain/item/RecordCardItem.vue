<script setup>
defineProps({ record: Object });
</script>
<template>
  <tr>
    <td class="col-2">{{ record.rank }}</td>
    <td class="col-4">{{ record.name }}</td>
    <td class="col-4">{{ record.count }}</td>
    <td class="col-2">{{ record.date }}</td>
  </tr>
</template>

<style scoped></style>
