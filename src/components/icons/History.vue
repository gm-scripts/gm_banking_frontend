<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // setup() {},
});
</script>

<template lang="pug">
.icon#history
  svg( height="100%" style="fill-rule: evenodd;clip-rule: evenodd;stroke-linecap: round;stroke-linejoin: round;" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="100%" xmlns:vectornator="http://vectornator.io" version="1.1" viewBox="0 0 600 600" id="icon" )
    g( id="Ebene 1" vectornator:layerName="Ebene 1" )
        path( d="M80+299.5L69.7636+299.5" opacity="var(--icon-part-conf)" fill="var(--brand)" )
        path( d="M120.031+299.5C120.304+200.322+200.758+120+300+120C399.411+120+480+200.589+480+300C480+399.411+399.411+480+300+480C250.294+480+205.292+459.855+172.719+427.281L144.438+455.562C184.25+495.375+239.249+520+300+520C421.503+520+520+421.503+520+300C520+178.497+421.503+80+300+80C178.665+80+80.2714+178.229+80+299.5" opacity="var(--icon-part-conf)" fill="var(--brand)" )
        path( d="M70.0661+299L50.3025+299L100.302+359L150.302+299L120.334+299" opacity="var(--icon-part-conf)" fill="var(--brand-sec)" )
        g( id="shorthand")
          path( id="short" d="M300+280L390+280C401.046+280+410+288.954+410+300L410+300C410+311.046+401.046+320+390+320L300+320C288.954+320+280+311.046+280+300L280+300C280+288.954+288.954+280+300+280Z" opacity="var(--icon-part-conf)" fill="var(--brand-sec)" )
        g( id="longhand" )
          path( id="long" d="M300+160L300+160C311.046+160+320+168.954+320+180L320+300C320+311.046+311.046+320+300+320L300+320C288.954+320+280+311.046+280+300L280+180C280+168.954+288.954+160+300+160Z" opacity="var(--icon-part-conf)" fill="var(--brand)" )
</template>

<style lang="sass">
#history
  #short,#long
    animation: tick linear 0s infinite
    transform-origin: 50%

  #short
    animation-duration: 360s

  #long
    animation-duration: 6s

  #shorthand, #longhand
    animation-play-state: running
    transform-origin: 50%
    animation: tick linear 0s infinite reverse

  #shorthand
    animation-duration: 396s

  #longhand
    animation-duration: 6600ms

  #icon:hover #shorthand, #icon:hover #longhand
    animation-play-state: paused

  @keyframes tick
    to
      transform: rotate(360deg)
</style>
