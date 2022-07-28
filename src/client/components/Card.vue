<script setup lang="ts">
const technologies = ['TypeScript', 'Vue 3', 'Vite', 'Express', 'Tailwind CSS', 'Bulma']
</script>

<template>
  <div class="card w-1/3 max-w-[400px] mx-auto">
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">Vue 3 + Express</p>
          <p class="subtitle is-6">Starter template</p>
        </div>
      </div>

      <div class="content">
        <p>Starter template that includes</p>
        <ul>
          <li v-for="technology of technologies" :key="technology">{{ technology }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
