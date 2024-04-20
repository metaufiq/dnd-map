<script setup lang="ts"></script>

<template>
  <div class="container">
    <nav class="sidebar"></nav>
    <div class="content"></div>
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
.sidebar {
  flex: 1;
  background-color: red;
}
.content {
  flex: 3;
  background-color: blue;
}
</style>
