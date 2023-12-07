<script setup lang="ts">
import { RouterView } from 'vue-router'

</script>

<template>
  <RouterView/>
</template>

<style>
html,body { margin: 0 !important;}
*::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
* {
-ms-overflow-style: none;  /* IE and Edge */
scrollbar-width: none;  /* Firefox */
}
</style>
