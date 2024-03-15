<script setup lang="ts">
import LanguageOptions from './components/LanguageOptions.vue'
import TitleBase from './components/TitleBase.vue'
</script>

<template>
  <TitleBase />
  <nav>
    <RouterLink to="">New Game</RouterLink>
    <RouterLink to="/about">About This Game</RouterLink>
  </nav>
  <LanguageOptions />
</template>

<style scoped>
nav {
  display: flex;
  flex-direction: column;
  gap: 18px;
  justify-content: center;
  padding: 20px;
}
</style>
