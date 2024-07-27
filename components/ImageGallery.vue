<template>
  <div class="text-center font-bold py-20">
    <p class="text-3xl px-4">Get ready to live your best life!</p>
    <img class="w-[50rem] mx-auto px-8 my-8" src="../assets/images/img9.png" />
    <div class="flex items-center justify-center gap-0 my-24">
      <img class="w-32" src="../assets/images/img15.png" />
      <img class="w-[35rem] mr-32" src="../assets/images/img10.png" />
    </div>
    <p class="text-3xl mt-16 px-4">And now, also available on iOS!</p>
    <img class="w-[70rem] mx-auto my-6" src="../assets/images/img11.png" />
    <AppStoreBtns
      class="justify-center flex-col items-center md:flex-row"
      :isLarge="true"
    />
    <!-- <p
      class="text-sm font-extrabold hover:underline hover:text-orange-400 hover:cursor-pointer"
    >
      Android coming later in 2024!
    </p> -->
  </div>
</template>

<script setup>
import AppStoreBtns from "./AppStoreBtns.vue";
</script>

<style lang="scss" scoped></style>
