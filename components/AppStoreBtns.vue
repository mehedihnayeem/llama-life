<template>
  <div class="flex gap-4 mt-8">
    <div class="flex gap-4">
      <img class="h-9 w-auto" :src="appDesktop" alt="Vue Jobs" />
      <img class="h-9 w-auto" :src="appPhone" alt="Vue Jobs" />
    </div>
    <div><img class="h-9 w-auto" :src="appAndroid" alt="Vue Jobs" /></div>
  </div>
</template>

import appDestop from "../assets/images/img2.png"; import appPhone from
"../assets/images/img3.png";
<script setup>
import appAndroid from "../assets/images/img14.png";
import appDesktop from "../assets/images/img2.png";
import appPhone from "../assets/images/img3.png";
</script>
