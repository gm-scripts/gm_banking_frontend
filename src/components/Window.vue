<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import makeDraggable from "../ts/ui/DragFunctions";
import Sidebar from "./Sidebar.vue";

export default defineComponent({
  setup() {
    const root = ref<HTMLDivElement | null>(null);

    function mounted() {
      if (root.value) {
        makeDraggable(root.value);
      }
    }

    onMounted(mounted);
    return {
      root,
    };
  },
  components: {
    Sidebar,
  },
});
</script>

<template lang="pug">
.window( ref="root" )
  .gm-frame WindowFrame
    .traffic-light
      svg( viewBox="0 0 8.4666667 8.4666667" )
        path( style="fill:none;stroke:#000000;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:0.35;stroke-miterlimit:4;stroke-dasharray:none" d="m 1.6933333,1.6933333 2.54,2.54 2.5399999,-2.54 -5.0799999,5.0799999 2.54,-2.5399999 2.5399999,2.5399999 v 0" )
  .windowcontent
    Sidebar
    router-view
</template>

<style lang="sass">
.window
  background-color: var(--bg-primary);
  user-select: none
  width: calc(var(--scale) * 110vh)
  height: calc(var(--scale) * 70vh)
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  border-radius: calc(var(--scale) * 1.25vh)

  overflow: auto
  font-family: 'Montserrat', Avenir, Arial, Helvetica, sans-serif

  transition: opacity 0.15s, transform 0.15s
  .gm-frame
    // position: absolute
    // z-index: 2
    font-size: calc(var(--scale) * 2.25vh)
    line-height: calc(var(--scale) * 2.25vh)
    width: calc(100%)
    color: var(--text-primary);
    padding: calc(var(--scale) * 0.25vh)
    padding-bottom: calc(var(--scale) * 1vh)
    cursor: move
    text-align: center
    background-color: var(--bg-secondary)
    .traffic-light
      background-color: var(--bg-primary)
      height: calc(var(--scale) * 1.5vh)
      width: calc(var(--scale) * 1.5vh)
      position: absolute
      top: calc(var(--scale) * 1vh)
      left: calc(var(--scale) * 1vh)
      transform: scale(1.01)
      border-radius: 50%
      cursor: pointer
      svg
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-45%, -45%)
        height: calc(var(--scale) * 1.2vh)
        width: calc(var(--scale) * 1.2vh)
        opacity: 0
      &:hover
        background-size: 75%
        background-position: center
        svg
          opacity: 1
    &:hover
      .traffic-light
        background-color: var(--tl-active)
  .windowcontent
    // display: block
    position: relative
    height: calc(100% - ((var(--scale) * 2.25vh) + (var(--scale) * 0.25vh) + (var(--scale) * 1vh)))
    width: 100%
</style>
