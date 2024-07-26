<template>
  <div class="bg-customGray py-16 flex flex-col items-center">
    <p class="mb-5 text-xs"><i class="pi pi-circle-fill"></i></p>
    <p class="text-3xl font-semibold leading-snug">
      Looks like you're serious <br />
      about getting stuff done
    </p>
    <div>
      <AppStoreBtns class="my-4" />
    </div>

    <p class="underline text-gray-600 text-xs">Remind me later</p>
    <p class="mt-10 text-xs"><i class="pi pi-circle-fill"></i></p>
  </div>
</template>

<script setup>
import AppStoreBtns from "./AppStoreBtns.vue";
</script>

<style lang="scss" scoped></style>
