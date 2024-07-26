<template>
  <div class="my-40">
    <div class="text-center">
      <h2 class="text-3xl font-bold mb-4">The first 3 days are on us 🥳</h2>
      <p class="text-2xl text-gray-500 font-extralight tracking-wider">
        Start now, choose a plan later
      </p>
    </div>

    <div class="md:flex md:gap-8 justify-center my-20">
      <div>
        <p class="text-3xl font-bold">Monthly</p>
        <div
          class="w-72 h-80 shadow-lg p-10 border-t-4 mt-4 rounded-lg border-rgb"
        >
          <div>
            <p class="font-bold mt-4">
              <span class="text-4xl">$4</span>/ month
            </p>
            <ul>
              <li class="mt-16 font-extralight">
                📆 Same benefits as the Annual plan, just billed Monthly
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <p class="text-3xl font-bold">Annual</p>
        <div
          class="w-72 h-80 shadow-lg p-10 border-t-4 mt-4 rounded-lg border-rgb"
        >
          <div>
            <p class="font-bold mt-4">
              <span class="text-4xl">$39</span>/ year
            </p>
            <button
              class="bg-orange-200 text-orange-500 font-bold p-1 rounded-md text-sm mt-1"
            >
              SAVE 2 MONTHS
            </button>
            <ul class="mt-8 font-extralight">
              <li class="sc-iapWAC dfyaKb">✅ Access to all features</li>
              <li class="sc-iapWAC dfyaKb">📱 Use on desktop and iOS</li>
              <li class="sc-iapWAC dfyaKb">🥰 Self-cancel anytime</li>
              <li class="sc-iapWAC dfyaKb">
                🎁 Upcoming
                <span
                  style="
                    text-decoration: underline;
                    cursor: pointer;
                    color: rgb(250, 114, 104);
                    font-family: Font-Bold;
                  "
                  >new features</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <Button class="text-center" />
    <p class="text-center mt-4 font-light">No credit card required</p>
  </div>
</template>

<script setup>
import Button from "./Button.vue";
</script>

<style lang="scss" scoped></style>
