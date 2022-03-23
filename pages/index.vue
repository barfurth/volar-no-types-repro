<template>
  <HelloWorld who="World">
    <template #my-slot-1> Slot </template>
    <template #my-slot-2="{ arg1, arg2 }"> {{ arg1 }}, {{ arg2 }} </template>
  </HelloWorld>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Index extends Vue {}
</script>
