<script setup lang="ts"></script>

<template>
  <div class="container">
    <h1 class="green">{{ $t('login.title') }}</h1>
    <h3>{{ $t('login.description') }}</h3>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}
</style>
