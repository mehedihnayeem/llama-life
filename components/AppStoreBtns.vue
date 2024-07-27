<template>
  <div class="flex gap-4 mt-8">
    <div class="flex gap-4">
      <img
        :class="['w-auto', { 'h-12': isLarge, 'h-9': !isLarge }]"
        :src="appDesktop"
        alt="Vue Jobs"
      />
      <img
        :class="['w-auto', { 'h-12': isLarge, 'h-9': !isLarge }]"
        :src="appPhone"
        alt="Vue Jobs"
      />
    </div>
    <div>
      <img
        :class="['w-auto', { 'h-12': isLarge, 'h-9': !isLarge }]"
        :src="appAndroid"
        alt="Vue Jobs"
      />
    </div>
  </div>
</template>

<script setup></script>

import appDestop from "../assets/images/img2.png"; import appPhone from
"../assets/images/img3.png";
<script setup>
import appAndroid from "../assets/images/img14.png";
import appDesktop from "../assets/images/img2.png";
import appPhone from "../assets/images/img3.png";

const props = defineProps({
  isLarge: {
    type: Boolean,
    default: false,
  },
});
</script>
