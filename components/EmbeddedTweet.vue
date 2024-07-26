<template>
  <div>
    <blockquote
      class="twitter-tweet"
      :data-dnt="true"
      :data-theme="theme"
      :data-lang="lang"
      :data-link-color="linkColor"
    >
      <a :href="tweetUrl"></a>
    </blockquote>
  </div>
</template>

<script>
export default {
  props: {
    tweetUrl: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      default: "light", // or 'dark'
    },
    lang: {
      type: String,
      default: "en",
    },
    linkColor: {
      type: String,
      default: "#1DA1F2",
    },
  },
  mounted() {
    if (typeof twttr !== "undefined") {
      twttr.widgets.load();
    }
  },
  watch: {
    tweetUrl() {
      if (typeof twttr !== "undefined") {
        twttr.widgets.load();
      }
    },
  },
};
</script>

<style scoped></style>
