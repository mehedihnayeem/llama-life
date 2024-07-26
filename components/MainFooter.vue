<template>
  <footer class="mt-10 text-xs leading-5">
    <div
      class="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-6 px-10 justify-center gap-10"
    >
      <div>
        <p class="font-bold text-2xl">llama life.</p>
        <p class="mt-3">
          Say goodbye to never-ending lists 🎉 and hello to daily bliss ☀️
        </p>
      </div>

      <div>
        <p class="font-bold mb-1">Company</p>
        <ul class="company-links list-none p-0">
          <li>
            <NuxtLink to="/about" class="hover:text-orange-500 hover:underline"
              >About</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/blog" class="hover:text-orange-500 hover:underline"
              >Blog</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/press-kit"
              class="hover:text-orange-500 hover:underline"
              >Press Kit</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/whats-new"
              class="hover:text-orange-500 hover:underline"
              >What's new</NuxtLink
            >
          </li>
        </ul>
      </div>

      <div>
        <p class="font-bold mb-1">Resources</p>
        <ul class="section-links list-none p-0">
          <li>
            <NuxtLink
              to="/how-to-videos"
              class="hover:text-orange-500 hover:underline"
              >How to videos</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/help-center"
              class="hover:text-orange-500 hover:underline"
              >Help Center</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/cool-stuff"
              class="hover:text-orange-500 hover:underline"
              >Cool Stuff</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/adhd-insights"
              class="hover:text-orange-500 hover:underline"
              >ADHD Insights</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/single-timers"
              class="hover:text-orange-500 hover:underline"
              >Single Timers</NuxtLink
            >
          </li>
        </ul>
      </div>

      <div>
        <ul class="section-links list-none p-0">
          <li class="font-bold mb-1">Socials</li>
          <li>
            <NuxtLink
              to="/twitter"
              class="hover:text-orange-500 hover:underline"
              ><i class="pi pi-twitter"></i> Twitter</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/instagram"
              class="hover:text-orange-500 hover:underline"
              ><i class="pi pi-instagram"></i> Instagram</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/youtube"
              class="hover:text-orange-500 hover:underline"
              ><i class="pi pi-youtube"></i> YouTube</NuxtLink
            >
          </li>
        </ul>
      </div>

      <div>
        <ul class="section-links list-none p-0">
          <li class="font-bold mb-1">Features</li>
          <li>
            <NuxtLink
              to="/task-timer"
              class="hover:text-orange-500 hover:underline"
              >Task Timer</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/brown-noise"
              class="hover:text-orange-500 hover:underline"
              >Brown Noise</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/todoist-integration"
              class="hover:text-orange-500 hover:underline"
              >Todoist Integration</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/visual-alarm"
              class="hover:text-orange-500 hover:underline"
              >Visual Alarm</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/keyboard-shortcuts"
              class="hover:text-orange-500 hover:underline"
              >Keyboard shortcuts</NuxtLink
            >
          </li>
        </ul>
      </div>

      <div>
        <ul class="section-links list-none p-0">
          <li class="font-bold mb-1">Use Cases</li>
          <li>
            <NuxtLink
              to="/templates"
              class="hover:text-orange-500 hover:underline"
              >Templates</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/adhd-to-do-list"
              class="hover:text-orange-500 hover:underline"
              >ADHD To Do List</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/adhd-tool-adults"
              class="hover:text-orange-500 hover:underline"
              >ADHD Tool for Adults</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>

    <div
      class="bg-customGray flex justify-between p-5 mt-10 px-32 lg:px-48 text-gray-500"
    >
      <div>© 2024 Llama Life, Inc.</div>

      <div>
        <ul class="flex gap-4">
          <li>
            <NuxtLink to="/terms">Terms</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/privacy">Privacy</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped></style>
