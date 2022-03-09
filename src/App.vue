<template>
  <div id="app" class="max-w-5xl mx-auto">
    <app-navbar></app-navbar>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    appNavbar: Navbar,
  },
};
</script>
