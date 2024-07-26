<template>
  <div>
    <nav
      class="fixed top-0 left-0 w-full bg-white z-50 flex justify-between items-center px-8 py-2 shadow-sm shadow-slate-100 md:mb-8"
    >
      <div class="font-extrabold text-2xl">
        <NuxtLink to="/">llama life.</NuxtLink>
      </div>
      <div class="hidden lg:flex">
        <ul
          class="flex flex-row gap-8 font-semibold text-gray-400 justify-center items-center"
        >
          <li><NuxtLink to="/">what's new</NuxtLink></li>
          <li><NuxtLink to="/">templates</NuxtLink></li>
          <li><NuxtLink to="/">features</NuxtLink></li>
          <li><NuxtLink to="/">pricing</NuxtLink></li>
          <li><NuxtLink to="/">sign in</NuxtLink></li>
          <li>
            <button class="bg-black text-white px-6 py-2 text-sm rounded-md">
              <NuxtLink to="/">get started for free</NuxtLink>
            </button>
          </li>
        </ul>
      </div>
      <div class="lg:hidden">
        <button @click="toggleMenu" class="focus:outline-none">
          <i class="pi pi-bars text-2xl"></i>
        </button>
      </div>
    </nav>
    <div
      v-if="isMenuOpen"
      class="fixed top-0 left-0 w-full h-full bg-white z-40 flex flex-col items-center pt-20"
    >
      <ul class="flex flex-col gap-4 font-semibold text-gray-400 items-center">
        <li><NuxtLink to="/" @click="toggleMenu">what's new</NuxtLink></li>
        <li><NuxtLink to="/" @click="toggleMenu">templates</NuxtLink></li>
        <li><NuxtLink to="/" @click="toggleMenu">features</NuxtLink></li>
        <li><NuxtLink to="/" @click="toggleMenu">pricing</NuxtLink></li>
        <li><NuxtLink to="/" @click="toggleMenu">sign in</NuxtLink></li>
        <li>
          <button class="bg-black text-white px-6 py-2 text-sm rounded-md">
            <NuxtLink to="/" @click="toggleMenu">get started for free</NuxtLink>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style lang="scss" scoped></style>
