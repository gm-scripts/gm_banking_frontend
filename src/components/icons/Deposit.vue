<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // setup() {},
});
</script>

<template lang="pug">
.icon#deposit
  svg(
    style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;"
    xml:space="preserve"
    width="100%"
    version="1.1"
    viewBox="0 0 600 600"
  )
    g( id="bankbox" )
      path(
        stroke="#23bf7c"
        stroke-width="40"
        d="M100+340L100+500L500+500L500+340"
        fill="none"
        stroke-linecap="round"
        opacity="0.75"
        stroke-linejoin="round"
      )
    g( id="downarrow" )
      path(
        d="M300.688+272.875C292.403+272.813+285.625+279.497+285.562+287.781L284.656+408.688L258.562+387.156C255.368+384.52+251.415+383.416+247.594+383.781C243.772+384.147+240.074+385.962+237.438+389.156C232.164+395.545+233.08+405.008+239.469+410.281L289.875+451.906C290.001+452.011+290.152+452.057+290.281+452.156C291.401+453.022+292.659+453.727+294+454.25C294.323+454.375+294.64+454.46+294.969+454.562C296.245+454.962+297.569+455.239+298.969+455.281C299.243+455.289+299.507+455.288+299.781+455.281C301.201+455.248+302.547+454.964+303.844+454.562C304.083+454.488+304.326+454.461+304.562+454.375C305.98+453.857+307.287+453.115+308.469+452.219C308.587+452.129+308.727+452.094+308.844+452L360.344+410.5C366.794+405.302+367.823+395.856+362.625+389.406C357.427+382.956+347.981+381.927+341.531+387.125L314.656+408.781L315.562+288C315.625+279.716+308.972+272.937+300.688+272.875Z"
        opacity="0.75"
        fill="#0a7ad0"
      )

    g( id="dollarbill-a" )
      path(
        d="M171.438+80C150.009+80+150+101.25+150+101.25L150+228.75C150+250+171.438+250+171.438+250L428.562+250C449.991+250+450+228.75+450+228.75L450+101.25C450+80+428.562+80+428.562+80L171.438+80ZM201.812+110L398.188+110C398.188+110+398.182+132+420+132L420+198C420+198+398.188+198+398.188+220L201.812+220C201.812+220+201.818+198+180+198L180+132C180+132+201.812+132+201.812+110Z"
        opacity="0.75"
        fill="#23bf7c"
      )
      path(
        stroke="#0a7ad0"
        stroke-width="30"
        d="M285+165C285+156.716+291.716+150+300+150C308.284+150+315+156.716+315+165C315+173.284+308.284+180+300+180C291.716+180+285+173.284+285+165Z"
        fill="#23bf7c"
        stroke-linecap="round"
        opacity="0.75"
        stroke-linejoin="round"
      )
    g( id="dollarbill-b" )
      path(
        d="M171.438+80C150.009+80+150+101.25+150+101.25L150+228.75C150+250+171.438+250+171.438+250L428.562+250C449.991+250+450+228.75+450+228.75L450+101.25C450+80+428.562+80+428.562+80L171.438+80ZM201.812+110L398.188+110C398.188+110+398.182+132+420+132L420+198C420+198+398.188+198+398.188+220L201.812+220C201.812+220+201.818+198+180+198L180+132C180+132+201.812+132+201.812+110Z"
        opacity="0.75"
        fill="#23bf7c"
      )
      path(
        stroke="#0a7ad0"
        stroke-width="30"
        d="M285+165C285+156.716+291.716+150+300+150C308.284+150+315+156.716+315+165C315+173.284+308.284+180+300+180C291.716+180+285+173.284+285+165Z"
        fill="#23bf7c"
        stroke-linecap="round"
        opacity="0.75"
        stroke-linejoin="round"
      )
</template>

<style lang="sass">
#deposit
  #bankbox
  #downarrow
    opacity: 1
    transform: none
    transition: opacity 0.2s
  #dollarbill-a
    opacity: 1
    transition: opacity 0s 0.5s
  #dollarbill-b
    transition: transform 0.5s, opacity 0s 0.5s
    transform: translateY(0)
    opacity: 0
  &:hover
    #bankbox
    #downarrow
      transform: translateY(50%)
      opacity: 0
      transition: transform 0.5s, opacity 0.4s
    #dollarbill-a
      transform: translateY(33.5%)
      opacity: 0
      transition: transform 0.5s, opacity 0.5s 0.75s
    #dollarbill-b
      transform: translateY(-50%)
      transition: transform 0s 0.75s, opacity 0s 0.75s
      opacity: 1
</style>
