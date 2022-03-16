<template>
  <div class="border col-span-3 bg-white rounded-md flex flex-col">
    <div class="flex flex-col p-4 border-b">
      <p class="font-bold">Billing History</p>
      <p class="text-xs">Choose a billing plan to see more details</p>
    </div>

    <table class="">
      <thead class="my-4">
        <th scope="col">Date</th>
        <th scope="col">Type</th>
        <th scope="col">Amount</th>
        <th scope="col">Balance</th>
        <th scope="col">Reference</th>
        <th scope="col">Download</th>
      </thead>

      <tr
        v-for="data in billingData"
        :key="data.reference"
        class="text-center border-t"
      >
        <td>{{ data.date }}</td>
        <td>{{ data.isInvoice ? "Invoice" : "Payment" }}</td>
        <td>£{{ data.amount }}</td>
        <td>£{{ data.balance }}</td>
        <td>{{ data.reference }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "BilingHistory",
  data() {
    return {
      billingData: [
        {
          date: "2022-03-22",
          isInvoice: true,
          amount: 15,
          balance: 15,
          reference: "8993UDEJ",
        },
        {
          date: "2022-02-22",
          isInvoice: false,
          amount: 45,
          balance: 0,
          reference: "8992UDEJ",
        },
        {
          date: "2022-02-22",
          isInvoice: true,
          amount: 15,
          balance: 45,
          reference: "8991UDEJ",
        },
        {
          date: "2022-01-22",
          isInvoice: true,
          amount: 15,
          balance: 30,
          reference: "8990UDEJ",
        },
        {
          date: "2021-12-22",
          isInvoice: true,
          amount: 15,
          balance: 15,
          reference: "8989UDEJ",
        },
      ],
    };
  },
};
</script>
