<script setup lang="ts">
import { RouterView } from "vue-router";
import Nav from "../src/views/Nav.vue"
import Footer from "./views/Footer.vue"

</script>

<template>

  <header>
    <Nav />
  </header>

  <body>
    <RouterView />
  </body>

  <footer>
    <Footer />
  </footer>

</template>

<style module></style>
