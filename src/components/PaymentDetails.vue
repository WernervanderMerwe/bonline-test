<template>
  <div class="border col-span-2 bg-white rounded-md flex flex-col">
    <div class="flex flex-col p-4 border-b">
      <p class="font-bold">Payment details</p>
      <p class="text-xs">
        View Details of your next invoice and payment method
      </p>
    </div>

    <div class="p-6">
      <p class="font-bold">Next invoice : 10 Feb 2022</p>
    </div>

    <div class="grid grid-cols-2 gap-4 px-6 pb-6">
      <div class="border p-4 rounded-md bg-slate-50">
        <p class="font-bold">Current Balance</p>
        <p class="font-bold text-2xl">$59.00</p>
        <p class="text-xs">
          <i class="border bg-slate-300">lock</i>&nbsp; This is a secure 256-bit
          SSL encrypted payment. You're Safe.
        </p>
        <button
          class="bg-blue-400 rounded-md px-4 py-1 text-white mt-4 font-semibold"
        >
          Pay now
        </button>
      </div>

      <div class="border p-4 rounded-md bg-slate-50">
        <div class="flex row-auto gap-2 mb-3">
          <p class="font-bold">Payment Method</p>
          <div
            class="font-bold text-xs border bg-white rounded-full px-2 my-auto"
          >
            Annual
          </div>
        </div>
        <p class="text-xs">
          <i class="border bg-slate-300">Light</i>&nbsp; Guide: to manage your
          payments more easily, we recommend switching to Direct Debit
        </p>
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
};
</script>
