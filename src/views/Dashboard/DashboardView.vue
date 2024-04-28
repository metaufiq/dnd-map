<script setup lang="ts">
import SidebarBase from './components/Sidebar/SidebarBase.vue'
import ContentBase from './components/ContentBase.vue'
</script>

<template>
  <div class="container">
    <SidebarBase />
    <ContentBase />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex: 1;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
}
</style>
