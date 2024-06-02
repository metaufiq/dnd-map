<script setup lang="ts">
defineProps({
  text: String,
  icon: Object,
  iconSize: Number
})
</script>
<template lang="pug">
  div(class="item-container")
    icon(:size="`${iconSize}`")
    div {{ text }}
</template>

<style>
.item-container {
  display: flex;
  flex-direction: row;
  gap: 8px;
}
</style>
