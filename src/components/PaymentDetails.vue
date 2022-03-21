<template>
  <div class="border col-span-2 bg-white rounded-md flex flex-col">
    <div class="flex flex-col p-4 border-b">
      <p class="font-bold">Payment details</p>
      <p class="text-xs">
        View Details of your next invoice and payment method
      </p>
    </div>

    <div class="p-6">
      <p class="font-bold">
        Next invoice : {{ accountData.next_invoice_date }}
      </p>
    </div>

    <div class="grid grid-cols-2 gap-4 px-6 pb-6">
      <div class="border p-4 rounded-md bg-slate-50">
        <p class="font-bold">Current Balance</p>
        <div class="flex">
          <p class="font-bold text-2xl">£{{ balance | currencyPadding }}</p>
          <p class="text-xs pl-2">(Note: last balance in billing history)</p>
        </div>
        <div class="flex mt-2">
          <font-awesome-icon icon="fa-solid fa-lock" />
          <p class="text-xs ml-2">
            This is a secure 256-bit SSL encrypted payment. You're Safe.
          </p>
        </div>
        <button
          class="bg-blue-400 rounded-md px-4 py-1 text-white mt-4 font-semibold"
          @click="payNow"
        >
          Pay now
        </button>
      </div>

      <div class="border p-4 pr-3 rounded-md bg-slate-50">
        <div class="flex gap-1 mb-3">
          <p class="font-bold">Payment Method</p>

          <div
            v-if="accountData.payment_method === 'MP'"
            class="font-bold text-xs border bg-white rounded-full px-2 my-auto"
          >
            Monthly
          </div>

          <div
            v-else-if="accountData.payment_method === 'DD'"
            class="flex font-bold text-xs border bg-white rounded-full my-auto w-auto text-center col-auto"
          >
            Direct Debit
          </div>

          <div
            v-else
            class="font-bold text-xs border bg-white rounded-full px-2 my-auto"
          >
            Annual
          </div>
        </div>

        <template v-if="accountData.payment_method !== 'DD'">
          <div class="flex mt-2">
            <font-awesome-icon icon="fa-solid fa-lightbulb" />
            <p class="text-xs ml-2">
              Guide: to manage your payments more easily, we recommend switching
              to Direct Debit
            </p>
          </div>

          <button
            class="bg-blue-400 rounded-md px-4 py-1 text-white mt-4 font-semibold"
          >
            Switch to Direct Debit
          </button>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "./../main.js";

export default {
  name: "PaymentDetails",
  props: {
    accountData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      balance: null,
    };
  },
  filters: {
    currencyPadding(value) {
      if (value === 0) {
        return "0.00";
      }

      if (value) {
        const split = value.toString().split(".");
        const poppedAndPadded = split.pop().padEnd(2, "0");
        const concatted = split.concat(poppedAndPadded).join(".");

        return concatted;
      }
    },
  },
  created() {
    eventBus.$on("updateBalance", (balance) => (this.balance = balance));
  },
  methods: {
    payNow() {
      if (this.balance !== null) {
        eventBus.$emit("payNow", this.accountData.next_invoice_date);
        this.balance = 0;
      }
    },
  },
};
</script>
