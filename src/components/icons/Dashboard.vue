<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // setup() {},
});
</script>

<template lang="pug">
.icon#dashboard
    svg(
      width="100%"
      height="100%"
      style="fill-rule: evenodd;clip-rule: evenodd;stroke-linecap: round;stroke-linejoin: round;"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      xml:space="preserve"
      xmlns:vectornator="http://vectornator.io"
      version="1.1"
      viewBox="0 0 600 600"
    ) 
      rect(
        class="sq1 sq"
        width="160"
        height="160"
        stroke="#23bf7c"
        stroke-width="40"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        opacity="0.75"
        x="100"
        y="100"
      )
      rect(
        class="sq2 sq"
        width="160"
        height="160"
        stroke="#0a7ad0"
        stroke-width="40"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        opacity="0.75"
        x="340"
        y="100"
      )
      rect(
        class="sq3 sq"
        width="160"
        height="160"
        stroke="#0a7ad0"
        stroke-width="40"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        opacity="0.75"
        x="100"
        y="340"
      )
      rect(
        class="sq4 sq"
        width="160"
        height="160"
        stroke="#23bf7c"
        stroke-width="40"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        opacity="0.75"
        x="340"
        y="340"
      )
</template>

<style lang="sass">

#dashboard
  $timer-colors: 10s
  $timer-blocks: 3s
  .sq
    animation: switch-cols $timer-colors linear 0s infinite normal
  .sq1, .sq4
    --animacol1: var(--brand)
    --animacol2: var(--brand-sec)
  .sq2, .sq3
    --animacol1: var(--brand-sec)
    --animacol2: var(--brand)
    animation: switch-cols $timer-colors linear 0s infinite normal
  &:hover
    .sq1, .sq2
      --animacol1: var(--brand-sec)
      --animacol2: var(--brand)
      animation: resize-blocks-top $timer-blocks linear 0s infinite normal
    .sq2
      animation-direction: reverse
    .sq3, .sq4
      --animacol1: var(--brand)
      --animacol2: var(--brand-sec)
      animation: resize-blocks-bottom $timer-blocks linear 0s infinite normal
    .sq3
      animation-direction: reverse

@keyframes switch-cols
  0%
    stroke: var(--animacol1)
  25%
    stroke: var(--animacol1)
  50%
    stroke: var(--animacol2)
  75%
    stroke: var(--animacol2)
  100%
    stroke: var(--animacol1)

@keyframes resize-blocks-top
  0%
    height: 160px;
    stroke: var(--animacol1)
  25%
    height: 120px;
    stroke: var(--animacol1)
  50%
    height: 160px;
    stroke: var(--animacol2)
  75%
    height: 200px;
    stroke: var(--animacol2)
  100%
    height: 160px;
    stroke: var(--animacol1)

@keyframes resize-blocks-bottom
  0%
    height: 160px;
    stroke: var(--animacol2)
  25%
    height: 120px;
    stroke: var(--animacol2)
    y: 380px
  50%
    height: 160px;
    stroke: var(--animacol1)
  75%
    height: 200px;
    stroke: var(--animacol1)
    y: 300px
  100%
    height: 160px;
    stroke: var(--animacol2)
</style>
