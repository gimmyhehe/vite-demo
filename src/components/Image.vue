<template>
    <tiny-image style="width: 100px; height: 100px" :src="url" :preview-src-list="[url]"></tiny-image>
    <button @click="change">1</button>
  </template>
  
  <script lang="jsx">
  import { Image } from '@opentiny/vue'
  
  export default {
    components: {
      TinyImage: Image
    },
    data() {
      return {
        url: `http://127.0.0.1:7131/static/images/house.jpg`,
        url2: `http://127.0.0.1:7131/static/images/mountain.png`,
        url3: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/bridge.png`,
        srcList: [
          `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`,
          `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/house.jpg`,
          `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/bridge.jpg`
        ]
      }
    },
    methods: {
      change() {
        this.url = this.url2
      }
    }
  }
  </script>
  