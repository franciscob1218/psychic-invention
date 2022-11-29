<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "./components/Nav_Bar.vue";
</script>

<template>
  <header>

    <Navbar />

    <RouterView />

  </header>
</template>

<style scoped>
</style>
