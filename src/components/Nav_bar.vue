<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <nav :class="[$style.nav]">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
</template>

<style module>
* {
  padding: 0;
  margin: 0;
}
.nav {
  font-family: utopia-std-display, serif;
  font-weight: 700;
  font-style: italic;

  display: grid;
  /** These 2 create a inline area for us to work in */
  grid-auto-flow: column;
  grid-template-columns: max-content;
  grid-column-gap: 100px;
  place-self: center;
}
</style>
