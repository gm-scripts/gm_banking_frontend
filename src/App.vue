<script lang="ts">
import { defineComponent } from "vue";
import Window from "./components/Window.vue";

export default defineComponent({
  // setup() {},
  components: {
    Window,
  },
});
</script>

<template lang="pug">
.ui-container
  Window
</template>

<style lang="sass">
@import "./assets/root.sass";

.ui-container
  --scale: 1
</style>
