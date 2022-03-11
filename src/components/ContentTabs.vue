<template>
  <div class="px-6 py-2 border-b flex row-auto gap-2 h-20">
    <div
      class="border rounded-md p-1 px-2 bg-white"
      v-for="account in jsonData"
      :key="account.account_id"
    >
      <div class="flex row-auto gap-2">
        <p class="font-bold text-blue-400">{{ account.business_name }}</p>
        <div
          class="border rounded-full px-2 text-xs font-semibold my-auto"
          :class="{
            'text-green-400': account.account_status === 'Live',
            'text-yellow-400': account.account_status === 'Suspended',
            'text-red-400': account.account_status === 'Cancelled',
          }"
        >
          {{ account.account_status }}
        </div>
      </div>
      <p class="text-xs leading-6">Account ID : {{ account.account_id }}</p>
    </div>

    <!-- <div class="border rounded-md p-1 px-2 bg-white">
      <div class="flex row-auto gap-2">
        <p class="font-bold text-blue-400">Mobis Valium</p>
        <div
          class="border rounded-full px-2 text-xs font-bold my-auto text-green-300"
        >
          Active
        </div>
      </div>
      <p class="text-xs leading-6">Account ID : 63531691</p>
    </div>

    <div class="border rounded-md p-1 px-2 bg-white">
      <div class="flex row-auto gap-2">
        <p class="font-bold text-blue-400">Jereme Hunt 3</p>
        <div
          class="border rounded-full px-2 text-xs font-bold my-auto text-green-300"
        >
          Active
        </div>
      </div>
      <p class="text-xs leading-6">Account ID : 63531691</p>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "ContentTabs",
  props: {
    jsonData: {
      type: Array,
      required: true,
    },
  },
};
</script>
