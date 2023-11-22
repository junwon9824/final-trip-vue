<script setup>
defineProps({ record: Object });
</script>
<template>
  <tr>
    <td class="col-2">{{ record.ranks }}</td>
    <td class="col-4">{{ record.userName }}</td>
    <td class="col-4">{{ record.memberconquerednum }}</td>
    <td class="col-2">{{ record.conquereddate }}</td>
  </tr>
</template>

<style scoped></style>
