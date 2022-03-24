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
      <payment-current-balance
        :invoiceDate="accountData.next_invoice_date"
        message="This is a secure 256-bit SSL encrypted payment. You're Safe."
      ></payment-current-balance>

      <payment-method
        :accountData="this.accountData"
        message="Guide: to manage your payments more easily, we recommend switching to
          Direct Debit"
        buttonMessage="Switch to Direct Debit"
      ></payment-method>
    </div>
  </div>
</template>

<script>
import PaymentCurrentBalance from "./PaymentCurrentBalance.vue";
import PaymentMethod from "./PaymentMethod.vue";

export default {
  name: "PaymentDetails",
  components: {
    paymentCurrentBalance: PaymentCurrentBalance,
    paymentMethod: PaymentMethod,
  },
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
};
</script>
