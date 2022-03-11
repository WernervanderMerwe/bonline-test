<template>
  <div id="app" class="max-w-5xl mx-auto h-screen">
    <app-navbar></app-navbar>
    <div class="h-[928px] flex border-t">
      <app-sidebar></app-sidebar>
      <app-content></app-content>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
import Content from "./components/Content.vue";

export default {
  name: "App",
  components: {
    appNavbar: Navbar,
    appSidebar: Sidebar,
    appContent: Content,
  },
};
</script>
