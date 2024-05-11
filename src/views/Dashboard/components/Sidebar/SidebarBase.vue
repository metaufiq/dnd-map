<script setup lang="ts">
import IconDashboard from '@/components/icons/IconDashboard.vue'
import SidebarItem from './SidebarItem.vue'
</script>
<template>
  <nav class="sidebar">
    <SidebarItem :icon="IconDashboard" text="testss" :icon-size="24" />
  </nav>
</template>

<style scoped>
.sidebar {
  flex: 1;
  background-color: white;
}
</style>
