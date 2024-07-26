<template>
  <div>
    <div class="lg:flex lg:gap-10 lg:items-center lg:mb-4 px-[23%] mt-10">
      <div>
        <p class="text-[2.8rem] leading-none font-extrabold">
          Say goodbye to never-ending lists, and hello to daily bliss
        </p>

        <ul class="text-gray-400 leading-loose mt-4">
          <li>⚡️ Whiz through your monstrous to-do list</li>
          <li>⏰ Finish work on time and live a little</li>
          <li>👍 Do the stuff you said you would</li>
        </ul>

        <AppStoreBtns class="my-4" />

        <p class="mt-4 text-xs font-light">
          Try for free and welcome bliss back into your life!<br />No credit
          card upfront.
        </p>
      </div>
      <div>
        <img src="../assets/images/img1.jpg" />
      </div>
    </div>
    <div>
      <p class="text-center font-extrabold text-xl">As seen on:</p>
      <div
        class="flex flex-col md:flex-row justify-center items-center mt-4 mb-12 gap-6"
      >
        <img class="w-44" src="../assets/images/img4.png" />
        <img class="h-12" src="../assets/images/img5.png" />
        <img class="h-16" src="../assets/images/img6.png" />
        <img class="h-12" src="../assets/images/img7.webp" />
        <img class="w-56" src="../assets/images/img8.svg" />
      </div>
      <div class="text-center">
        <p class="text-8xl font-extrabold text-gray-300 mb-[-2.5rem]">‟</p>
        <p class="italic w-[40%] lg:w-[30%] m-auto mb-12 font-light">
          I love that this app solves a very specific problem that is
          infuriatingly overlooked by every other bloated productivity tool in
          the world!
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppStoreBtns from "./AppStoreBtns.vue";
</script>

<style lang="scss" scoped></style>
