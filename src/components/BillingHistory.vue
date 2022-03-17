<template>
  <div class="border col-span-3 bg-white rounded-md flex flex-col">
    <div class="flex flex-col p-4 border-b">
      <p class="font-bold">Billing History</p>
      <p class="text-xs">Choose a billing plan to see more details</p>
    </div>

    <div class="pt-4 relative">
      <table class="table-auto w-full">
        <thead class="">
          <th scope="col" class="pb-4">Date</th>
          <th scope="col" class="pb-4">Type</th>
          <th scope="col" class="pb-4">Amount</th>
          <th scope="col" class="pb-4">Balance</th>
          <th scope="col" class="pb-4">Reference</th>
          <th scope="col" class="pb-4">Download</th>
        </thead>

        <tr
          v-for="data in billingData.slice(0).reverse()"
          :key="data.reference"
          class="text-center text-sm border-t"
        >
          <td class="py-2">{{ data.date }}</td>
          <td class="py-2">{{ data.isInvoice ? "Invoice" : "Payment" }}</td>
          <td class="py-2">£{{ data.amount }}</td>
          <td class="py-2">£{{ data.balance }}</td>
          <td class="py-2">{{ data.reference }}</td>
          <td class="py-2">
            <font-awesome-icon icon="fa-solid fa-download" />
          </td>
        </tr>
      </table>
    </div>

    <div class="flex justify-center pb-2">
      <div
        class="flex w-8 h-8 bg-blue-400 text-white text-center text-sm rounded-md"
      >
        <div class="m-auto">1</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BilingHistory",
  props: {
    accountData: {
      type: Object,
      required: true,
    },
  },
  // created() {
  computed: {
    billingDataCompute() {
      const amount = 5 * this.accountData.products.length;

      return this.billingData.forEach((bill, i, arr) => {
        bill.amount = amount;

        if (i === 0) {
          bill.balance = bill.amount;
        }

        if (i > 0 && bill.isInvoice) {
          bill.balance = arr[i - 1].balance + bill.amount;
        }

        if (!bill.isInvoice) {
          bill.amount = arr[i - 1].balance;
          bill.balance = arr[i - 1].balance - bill.amount;
        }
      });
    },
  },
  data() {
    return {
      billingData: [
        {
          date: "2021-12-22",
          isInvoice: true,
          amount: null,
          reference: "8989UDEJ",
        },
        {
          date: "2022-01-22",
          isInvoice: true,
          amount: null,
          reference: "8990UDEJ",
        },
        {
          date: "2022-02-22",
          isInvoice: true,
          amount: null,
          reference: "8991UDEJ",
        },
        {
          date: "2022-02-22",
          isInvoice: false,
          amount: null,

          reference: "8992UDEJ",
        },
        {
          date: "2022-03-22",
          isInvoice: true,
          amount: null,
          reference: "8993UDEJ",
        },
      ],
    };
  },
};
</script>
