<script setup lang="ts">
import HelloWorld from './components/Image.vue'
</script>

<template>
  <HelloWorld/>
  <iframe src="http://localhost:7131/pc/form/custom-validation-rule" frameborder="0"></iframe>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
