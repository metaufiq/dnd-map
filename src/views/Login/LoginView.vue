<script setup lang="ts">
import LanguageOptions from './components/LanguageOptions.vue'
import TitleBase from './components/TitleBase.vue'
import { NAV_ITEMS } from './constants'
</script>

<template>
  <TitleBase />
  <nav>
    <RouterLink v-for="nav in NAV_ITEMS" :to="nav.path" v-bind:key="nav.path">
      {{ $t(nav.title) }}
    </RouterLink>
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
