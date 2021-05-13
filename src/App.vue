<script lang="ts">
import { defineComponent } from "vue";
import Window from "./components/Window.vue";
import { cssConfig, fetchConfig } from "./ts/data/FetcherFunctions";

export default defineComponent({
  setup() {
    fetchConfig();
    return {
      cssConfig,
    };
  },
  components: {
    Window,
  },
});
</script>

<template lang="pug">
.ui-container( :style="cssConfig" )
  Window
</template>

<style lang="sass">
@import "./assets/root.sass";

.ui-container
  --scale: 1
</style>
