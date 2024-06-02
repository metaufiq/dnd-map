<script setup lang="ts">
import IconDashboard from '@/components/icons/IconDashboard.vue'
import SidebarItem from './SidebarItem.vue'
</script>
<template lang="pug">
  nav(class="sidebar")
    SidebarItem(
      :icon="IconDashboard",
      text="testtt",
      :icon-size="24"
    )
</template>

<style scoped>
.sidebar {
  flex: 1;
  background-color: white;
}
</style>
