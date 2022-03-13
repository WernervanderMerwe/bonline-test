<template>
  <div class="px-6 py-4 border-b flex row-auto gap-2">
    <div
      class="border rounded-md p-1 px-2 bg-white hover:cursor-pointer"
      v-for="account in jsonData"
      :key="account.account_id"
      @click="saveAccountData(account)"
    >
      <div class="flex row-auto gap-2">
        <p class="font-bold text-blue-400">{{ account.business_name }}</p>
        <div
          class="border rounded-full px-1 text-xs font-medium my-auto"
          :class="{
            'text-green-400': account.account_status === 'Live',
            'text-yellow-400': account.account_status === 'Suspended',
            'text-red-400': account.account_status === 'Cancelled',
          }"
        >
          {{
            account.account_status === "Live"
              ? "Active"
              : account.account_status
          }}
        </div>
      </div>

      <p class="text-xs leading-6">
        Account ID :
        {{ account.account_id }}
      </p>
    </div>
  </div>
</template>

<script>
import { eventBus } from "./../main";

export default {
  name: "AccountTabs",
  props: {
    jsonData: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      accountData: {},
    };
  },
  methods: {
    saveAccountData(account) {
      eventBus.$emit("changeAccountData", account);
    },
  },
};
</script>
