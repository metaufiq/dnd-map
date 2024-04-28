<script setup lang="ts">
const props = defineProps({
  icon: String,
  text: String
})
const icon = props.icon
const text = props.text
</script>
<template>
  <div>
    <div>{{ icon }}</div>
    <div>{{ text }}</div>
  </div>
</template>

<style></style>
