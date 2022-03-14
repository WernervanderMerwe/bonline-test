<template>
  <div class="border bg-white rounded-md flex flex-col">
    <div class="flex flex-col p-4 border-b">
      <p class="font-bold">My Products</p>
      <p class="text-xs">All your products at a glance</p>
    </div>

    <div
      v-for="product in accountData.products"
      :key="product.product_detail"
      class="border-b mx-4 py-4"
    >
      <div v-if="product.product_kind === 'TELCO'" class="flex">
        <font-awesome-icon icon="fa-solid fa-diagram-project" />
        <p class="ml-2 font-semibold text-xs">
          Fibre = {{ product.product_detail }}
        </p>
      </div>

      <div v-else-if="product.product_kind === 'VOIP'" class="flex">
        <font-awesome-icon icon="fa-solid fa-phone" />
        <p class="ml-2 font-semibold text-xs">
          {{ product.product_kind | productsCapitalize }} =
          {{ product.product_detail }}
        </p>
      </div>

      <div v-else-if="product.product_kind === 'WEBSITE'" class="flex">
        <font-awesome-icon icon="fa-solid fa-laptop" />
        <p class="ml-2 font-semibold text-xs">
          {{ product.product_kind | productsCapitalize }} =
          {{ product.product_detail }}
        </p>
      </div>
    </div>
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
  filters: {
    productsCapitalize(value) {
      if (!value) {
        return "";
      }

      if (value === "VOIP") {
        return "VoIP";
      }

      value = value.toString();

      return value.charAt(0).concat(value.slice(1).toLowerCase());
    },
  },
};
</script>
