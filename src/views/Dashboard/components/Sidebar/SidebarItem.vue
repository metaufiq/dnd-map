<script setup lang="ts">
const { iconSize } = defineProps({
  text: String,
  icon: Object,
  iconSize: Number
})

console.log({ iconSize })
</script>
<template>
  <div class="item-container">
    <div><component :is="icon" :size="iconSize"></component></div>
    <div>{{ text }}</div>
  </div>
</template>

<style>
.item-container {
  display: flex;
  flex-direction: row;
  gap: 8px;
}
</style>
