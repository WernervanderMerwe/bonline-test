<template>
  <div id="app" class="max-w-5xl mx-auto h-screen">
    <app-navbar></app-navbar>
    <div class="h-[928px] flex border-t">
      <app-sidebar></app-sidebar>
      <app-content></app-content>
    </div>
    <hr class="my-4 mx-6" />
    <footer class="bg-slate-50">
      <p class="text-center font-semibold">Built by Werner van der Merwe</p>
      <a
        href="https://github.com/WernervanderMerwe/bonline-test"
        class="flex justify-center font-bold text-blue-400 underline"
        >GitHub repo link</a
      >
    </footer>
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
