<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // setup() {},
});
</script>

<template lang="pug">
.sidebar
</template>

<style lang="sass">
.sidebar
  display: block
  float: left
  width: calc(var(--scale) * 6.5vh)
  background-color: var(--bg-tertiary)
  height: 100%
</style>
