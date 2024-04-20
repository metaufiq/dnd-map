<script setup lang="ts">
import LanguageOptions from './components/LanguageOptions.vue'
import TitleBase from './components/TitleBase.vue'
import { PATH } from '@/router/constants'
</script>

<template>
  <TitleBase />
  <nav>
    <RouterLink :to="PATH.HOME">{{ $t('login.nav.game.new') }}</RouterLink>
    <RouterLink :to="PATH.ABOUT">{{ $t('login.nav.game.about') }}</RouterLink>
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
