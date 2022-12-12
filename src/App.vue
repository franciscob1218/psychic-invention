<script setup lang="ts">
import { RouterView } from "vue-router";
import Nav from "../src/views/Nav.vue"
import Footer from "./views/Footer.vue"

//test
</script>

<template>

  <header>
    <Nav />
  </header>

  <body>
    <RouterView />

  <footer>
    <Footer />
  </footer>

</template>

<style module></style>
