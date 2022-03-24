<template>
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
          {{ message }}
        </p>
      </div>

      <button
        class="bg-blue-400 rounded-md px-4 py-1 text-white mt-4 font-semibold"
      >
        {{ buttonMessage }}
      </button>
    </template>
  </div>
</template>

<script>
export default {
  name: "PaymentMethod",
  props: {
    accountData: {
      type: Object,
    },
    message: {
      type: String,
    },
    buttonMessage: {
      type: String,
    },
  },
};
</script>
