<script setup lang="ts">
import SidebarItem from './SidebarItem.vue'
</script>
<template>
  <nav class="sidebar">
    <SidebarItem icon="test" text="test" />
  </nav>
</template>

<style scoped>
.sidebar {
  flex: 1;
  background-color: red;
}
</style>
