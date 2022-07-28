<script setup lang="ts">
import { useHelloStore } from '../stores/hello'

const helloStore = useHelloStore()

await helloStore.getMessage()
</script>

<template>
  <main>
    <p class="intro">Got the greeting from the server: {{ helloStore.message }}</p>
  </main>
</template>
