<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "./components/Nav_bar.vue";
import NeivLogo from "./components/icons/NeivLogoPlain.svg";
</script>

<template>
  <header :class="[$style.header]">
    <img :class="[$style.logo]" src="./components/icons/NeivLogoPlain.svg" />`

    <Navbar />
  </header>

  <body :class="[$style.body]">
    <RouterView />

  <footer>
    <a></a>
  </footer>
</template>

<style module>
.logo {
  height: 120px;
}
.header {
  border: 1px solid red;

  width: 100vw;
  height: 12vh;

  display: flexbox;
  flex-direction: row;
  flex-wrap: nowrap;
}
.body {
  border: 1px solid blue;

  margin: 0;
  width: 100vw;
  height: 100vh;
  background-color: #e6e2d6;
  display: flexbox;
}
</style>
