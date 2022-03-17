<template>
  <div class="container border-l bg-slate-50">
    <div class="p-4 border-b bg-white">
      <p class="font-bold text-2xl">Billing</p>
      <p>Overview of your accounts</p>
    </div>
    <account-tabs :jsonData="data"></account-tabs>
    <div class="grid grid-cols-3 px-6 gap-4 pt-4">
      <payment-details :accountData="accountData"></payment-details>
      <my-products :accountData="accountData"></my-products>
      <billing-history :accountData="accountData"></billing-history>
    </div>
  </div>
</template>

<script>
import { eventBus } from "./../main.js";

import AccountTabs from "./AccountTabs.vue";
import PaymentDetails from "./PaymentDetails.vue";
import MyProducts from "./MyProducts.vue";
import BillingHistory from "./BillingHistory.vue";

import Data from "./../../instructions/Data.json";

export default {
  name: "appContent",
  data() {
    return {
      data: Data,
      accountData: {},
    };
  },
  created() {
    eventBus.$on("changeAccountData", (accountData) => {
      this.accountData = accountData;
    });
  },
  components: {
    accountTabs: AccountTabs,
    paymentDetails: PaymentDetails,
    myProducts: MyProducts,
    billingHistory: BillingHistory,
  },
};
</script>
