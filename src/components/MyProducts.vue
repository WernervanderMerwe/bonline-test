<template>
  <div class="border bg-white rounded-md flex flex-col">
    <div class="flex flex-col p-4 border-b">
      <p class="font-bold">My Products</p>
      <p class="text-xs">All your products at a glance</p>
    </div>

    <div
      v-for="product in accountData.products"
      :key="product.product_detail"
      class="border-b mx-4 py-4 font-semibold text-xs"
    >
      <i>Icon</i>&nbsp; {{ product.product_kind }} =
      {{ product.product_detail }}
    </div>

    <!-- <div class="border-b mx-4 py-4 font-semibold text-xs">
      <i>Icon</i>&nbsp; VoIP = 902903445
    </div>

    <div class="border-b mx-4 py-4 font-semibold text-xs">
      <i>Icon</i>&nbsp; Fibre = SW298BE
    </div>

    <div class="border-b mx-4 py-4 font-semibold text-xs">
      <i>Icon</i>&nbsp; Website - www.webiste.com
    </div> -->
  </div>
</template>

<script>
export default {
  name: "MyProducts",
  props: {
    accountData: {
      type: Object,
      required: true,
    },
  },
};
</script>
