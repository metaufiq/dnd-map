<script setup lang="ts">
const props = defineProps({
  size: String,
  color: String
})

const color = props.color ?? 'red'
const size = props.size ?? 24
</script>
<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3 3C2.44772 3 2 3.44772 2 4V20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20V4C22 3.44772 21.5523 3 21 3H3ZM4 5H20V19H4V5ZM10 7C9.44772 7 9 7.44772 9 8V16C9 16.5523 9.44772 17 10 17H14C14.5523 17 15 16.5523 15 16V8C15 7.44772 14.5523 7 14 7H10ZM11 9H13V15H11V9Z"
      :fill="color"
    />
  </svg>
</template>
