<template>
  <div class="px-6 py-4 border-b flex row-auto gap-2">
    <div
      class="border rounded-md p-1 px-2 bg-white hover:cursor-pointer"
      v-for="account in jsonData"
      :key="account.account_id"
      @click="saveAccountData(account)"
      :class="{
        'border-blue-400': activeTab === account.account_id,
        'bg-blue-200': activeTab === account.account_id,
      }"
    >
      <div class="flex row-auto gap-2">
        <p class="font-bold text-blue-400">{{ account.business_name }}</p>
        <div
          class="border rounded-full px-1 text-xs font-medium my-auto"
          :class="{
            'text-green-400': account.account_status === 'Live',
            'bg-green-400/20': account.account_status === 'Live',
            'text-yellow-400': account.account_status === 'Suspended',
            'bg-yellow-400/20': account.account_status === 'Suspended',
            'text-red-400': account.account_status === 'Cancelled',
            'bg-red-400/20': account.account_status === 'Cancelled',
            'bg-white/100': activeTab === account.account_id,
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
      activeTab: null,
    };
  },
  created() {
    // eventBus.$emit("changeAccountData", this.jsonData[0]);
    this.activeTab = this.jsonData[0].account_id;
  },
  methods: {
    saveAccountData(account) {
      eventBus.$emit("changeAccountData", account);

      this.activeTab = account.account_id;
    },
  },
};
</script>
