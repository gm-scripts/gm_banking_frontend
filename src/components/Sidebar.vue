<script lang="ts">
import { defineComponent } from "vue";
import HistoryIcon from "./icons/History.vue";

export default defineComponent({
  // setup() {},
  components: {
    HistoryIcon,
  },
});
</script>

<template lang="pug">
.sidebar
  HistoryIcon
</template>

<style lang="sass">
.sidebar
  display: block
  float: left
  width: calc(var(--scale) * 6.5vh)
  background-color: var(--bg-tertiary)
  height: 100%
  .icon
    display: grid
    place-items: center
    height: calc(var(--scale) * 6.5vh)
    width: calc(var(--scale) * 6.5vh)
    transition: background-color 0.25s
    cursor: pointer
    svg
      height: 85%
      width: 85%
      transition: transform 0.25s
    &:hover
      background-color: var(--bg-tertiary-lighter-b)
      transition: background-color 0.15s
      svg
        transform: scale(1.15)
        transition: transform 0.15s
</style>
