<template>
  <div class="border-r w-48 h-full grid grid-cols-1 gap-1 content-start p-2">
    <!-- Customize colors later -->
    <!-- animate the rounded edges on hover? -->
    <button class="py-1 rounded-md hover:bg-blue-400 hover:text-white">
      <font-awesome-icon icon="fa-solid fa-house" />
      &nbsp; Home
    </button>
    <button class="py-1 rounded-md bg-blue-400 text-white">
      <font-awesome-icon icon="fa-solid fa-wallet" />&nbsp; Billing
    </button>
  </div>
</template>

<script>
export default {
  name: "appSidebar",
};
</script>
