<template>
  <div class="container border-l bg-slate-50">
    <div class="p-4 border-b bg-white">
      <p class="font-bold text-2xl">Billing</p>
      <p>Overview of your accounts</p>
    </div>
    <content-tabs :jsonData="data"></content-tabs>
    <div class="grid grid-cols-3 px-6 gap-4 pt-4">
      <payment-details></payment-details>
      <my-products></my-products>
      <billing-history></billing-history>
    </div>
  </div>
</template>

<script>
import ContentTabs from "./ContentTabs.vue";
import PaymentDetails from "./PaymentDetails.vue";
import MyProducts from "./MyProducts.vue";
import BillingHistory from "./BillingHistory.vue";

import data from "./../../instructions/Data.json";

export default {
  name: "appContent",
  data() {
    return {
      data: data,
    };
  },
  components: {
    contentTabs: ContentTabs,
    paymentDetails: PaymentDetails,
    myProducts: MyProducts,
    billingHistory: BillingHistory,
  },
};
</script>
