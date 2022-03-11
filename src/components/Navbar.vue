<template>
  <div class="grid grid-cols-3 border-b content-center">
    <div class="w-28 m-4 p-1 my-auto col-span-2">
      <img alt="bOnline logo" src="./../assets/bOnline-logo.svg" />
    </div>
    <div class="m-4 col-end-4 flex">
      <div class="bellIcon border-r mr-4 my-auto bg-slate-300 w-8 h-8"></div>
      <div class="accountUser flex flex-row border-l pl-4">
        <div
          class="accountUserIcon rounded-full border my-auto h-8 w-8 bg-gray-300"
        ></div>
        <div class="ml-2 flex flex-col">
          <p class="font-bold">{{ fullName }}</p>
          <p class="font-light text-xs">{{ computedEmailAddress }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppNavbar",
  data() {
    return {
      firstName: "Werner",
      LastName: "van der Merwe",
    };
  },
  computed: {
    fullName() {
      return this.firstName.concat(" ", this.LastName);
    },
    computedEmailAddress() {
      return this.firstName
        .concat(this.LastName)
        .split(" ")
        .join("")
        .toLowerCase()
        .concat("@bonline.com");
    },
  },
};
</script>
