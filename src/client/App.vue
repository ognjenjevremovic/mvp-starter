<script setup lang="ts">
import { RouterView } from 'vue-router'

import Card from './components/Card.vue'
</script>

<template>
  <div class="flex flex-col w-screen h-screen space-y-4 justify-center items-center p-4">
    <h1>Vue 3 / Vite + Express + TailwindCSS starter</h1>

    <Card />

    <Suspense>
      <RouterView />

      <template #fallback>
        <p class="text-center text-xl italic">Loading. . .</p>
      </template>
    </Suspense>
  </div>
</template>

<style scoped></style>
