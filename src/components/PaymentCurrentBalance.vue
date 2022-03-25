<template>
  <div class="border p-4 rounded-md bg-slate-50">
    <p class="font-bold">Current Balance</p>
    <div class="flex">
      <p class="font-bold text-2xl">£{{ balance | currencyfy }}</p>
      <p class="text-xs pl-2">(Note: last balance in billing history)</p>
    </div>
    <div class="flex mt-2">
      <font-awesome-icon icon="fa-solid fa-lock" />
      <p class="text-xs ml-2">
        {{ message }}
      </p>
    </div>
    <button
      class="bg-blue-400 rounded-md px-4 py-1 text-white mt-4 font-semibold"
      @click="payNow"
    >
      Pay now
    </button>
  </div>
</template>

<script>
import { eventBus } from "./../main.js";

export default {
  name: "PaymentCurrentBalance",
  props: {
    message: {
      type: String,
    },
    invoiceDate: {
      type: String,
    },
  },
  data() {
    return {
      balance: null,
    };
  },
  filters: {
    currencyfy(value) {
      return value.toFixed(2);
    },
  },
  created() {
    eventBus.$on("updateBalance", (balance) => (this.balance = balance));
  },
  methods: {
    payNow() {
      if (this.balance !== null) {
        eventBus.$emit("payNow", this.invoiceDate);
        this.balance = 0;
      }
    },
  },
};
</script>
