<template>
  <div class="my-40">
    <div class="text-center px-4">
      <h2 class="text-[2rem] font-extrabold mb-4">
        The first 3 days are on us 🥳
      </h2>
      <p class="text-[1.7rem] text-customLightGray tracking-wider font-light">
        Start now, choose a plan later
      </p>
    </div>

    <div
      class="flex flex-col md:flex-row gap-8 justify-center items-center my-20"
    >
      <div>
        <p class="text-3xl font-bold pl-3">Monthly</p>
        <div
          class="w-[17rem] h-[18rem] shadow-lg mt-4 rounded-lg border-rgb pt-[0.35rem]"
        >
          <div class="bg-white w-[17rem] p-10 h-[18rem] pt-10">
            <p class="font-bold"><span class="text-3xl">$4</span> / mth</p>
            <ul>
              <li class="mt-16 font-extralight text-sm">
                <div class="flex gap-2">
                  <div>📆</div>
                  <div>
                    Same benefits as the Annual plan, just billed Monthly
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <p class="text-3xl font-bold pl-3">Annual</p>
        <div
          class="w-[17rem] h-[18rem] shadow-lg mt-4 rounded-lg border-rgb pt-[0.35rem]"
        >
          <div class="bg-white w-[17rem] p-10 h-[18rem] pt-10">
            <p class="font-bold"><span class="text-3xl">$39</span> / yr</p>
            <button
              class="bg-orange-200 text-orange-500 font-bold p-1 rounded-md text-xs mt-1"
            >
              SAVE 2 MONTHS
            </button>
            <ul class="mt-8 font-extralight text-sm">
              <li class="my-1">✅ &nbsp Access to all features</li>
              <li class="my-1">
                <div class="flex gap-2">
                  <div>📱</div>
                  <div>Use on desktop, iOS and Android</div>
                </div>
              </li>
              <li class="my-1">🥰 &nbsp Self-cancel anytime</li>
              <li class="my-1">
                🎁 &nbsp Upcoming
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
