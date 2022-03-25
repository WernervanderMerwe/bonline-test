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
          <td class="py-2">£{{ data.amount | currencyfy }}</td>
          <td class="py-2">£{{ data.balance | currencyfy }}</td>
          <td class="py-2">{{ data.reference }}</td>
          <td class="py-2">
            <font-awesome-icon icon="fa-solid fa-download" />
          </td>
        </tr>
      </table>
    </div>

    <div class="flex justify-center pb-2">
      <div class="flex w-8 h-8 bg-blue-400 text-white text-sm rounded-md">
        <div class="m-auto">1</div>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "./../main.js";

export default {
  name: "BilingHistory",
  // props: {
  //   accountData: {
  //     type: Object,
  //     required: true,
  //   },
  // },
  data() {
    return {
      billingData: [
        {
          date: "2021-11-22",
          isInvoice: true,
          amount: null,
          balance: null,
          reference: "8989UDEJ",
        },
        {
          date: "2021-12-22",
          isInvoice: true,
          amount: null,
          balance: null,
          reference: "8990UDEJ",
        },
        {
          date: "2022-01-22",
          isInvoice: true,
          amount: null,
          balance: null,
          reference: "8991UDEJ",
        },
        {
          date: "2022-01-22",
          isInvoice: false,
          amount: null,
          balance: null,
          reference: "8992UDEJ",
        },
        {
          date: "2022-02-22",
          isInvoice: true,
          amount: null,
          balance: null,
          reference: "8993UDEJ",
        },
      ],
      accountData: {},
    };
  },
  computed: {
    computedBillingData() {
      // amount is worked out according to how many products an account has
      if (this.accountData.account_id) {
        const amount = 4.75 * this.accountData.products.length;

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
      } else {
        return "";
      }
    },
  },
  created() {
    this.computedBillingData;

    eventBus.$on("payNow", (invoiceDate) => {
      if (this.billingData[this.billingData.length - 1].balance === 0) {
        return;
      }

      const obj = {
        date: invoiceDate,
        isInvoice: false,
        reference: "8994UDEJ",
      };

      this.billingData.push(obj);
      this.computedBillingData;
    });
    eventBus.$on("changeAccountData", (account) => {
      this.accountData = account;
      this.computedBillingData;

      if (this.billingData.length > 5) {
        this.billingData.pop();
      }
    });
    eventBus.$emit(
      "updateBalance",
      this.billingData[this.billingData.length - 1].balance
    );
  },
  beforeUpdate() {
    eventBus.$emit(
      "updateBalance",
      this.billingData[this.billingData.length - 1].balance
    );
  },
  filters: {
    currencyfy(value) {
      return value.toFixed(2);
    },
  },
};
</script>
