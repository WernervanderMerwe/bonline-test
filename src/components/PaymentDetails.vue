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
        <p class="font-bold text-2xl">
          £{{ accountData.balance | currencyfy }}
        </p>
        <div class="flex mt-2">
          <font-awesome-icon icon="fa-solid fa-lock" />
          <p class="text-xs ml-2">
            This is a secure 256-bit SSL encrypted payment. You're Safe.
          </p>
        </div>
        <button
          class="bg-blue-400 rounded-md px-4 py-1 text-white mt-4 font-semibold"
        >
          Pay now
        </button>
      </div>

      <div class="border p-4 rounded-md bg-slate-50">
        <div class="flex row-auto gap-1 mb-3">
          <p class="font-bold">Payment Method</p>

          <div
            v-if="accountData.payment_method === 'MP'"
            class="font-bold text-xs border bg-white rounded-full px-2 my-auto"
          >
            Monthly
          </div>

          <div
            v-else-if="accountData.payment_method === 'DD'"
            class="font-bold text-xs border bg-white rounded-full my-auto text-center"
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentDetails",
  props: {
    accountData: {
      type: Object,
      required: true,
    },
  },
  filters: {
    currencyfy(value) {
      if (!value && value !== 0) {
        return "";
      }

      value = value.toString();

      return value.includes(".") ? value : value.concat(".00");
    },
  },
};
</script>
