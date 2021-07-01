<script lang="ts">
import { defineComponent } from "vue";
import HistoryIcon from "./icons/History.vue";
import DashboardIcon from "./icons/Dashboard.vue";
import DepositIcon from "./icons/Deposit.vue";
import WithdrawIcon from "./icons/Withdraw.vue";
import TransferIcon from "./icons/Transfer.vue";
import BillsIcon from "./icons/Bills.vue";

export default defineComponent({
  // setup() {},
  components: {
    HistoryIcon,
    DashboardIcon,
    DepositIcon,
    WithdrawIcon,
    TransferIcon,
    BillsIcon,
  },
});
</script>

<template lang="pug">
.sidebar
  DashboardIcon
  HistoryIcon
  DepositIcon
  WithdrawIcon
  TransferIcon
  BillsIcon
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
        // transform: scale(1.05)
        transition: transform 0.15s
</style>
