<template>
  <div>Hello {{ who }}</div>
</template>

<script lang="ts">
import { VNode } from 'vue'
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
  @Prop({ default: 'World' }) readonly who!: string

  $props!: {
    who: string
  }

  // This causes an error to be shown - ts(2416)
  $emit!: {
    (e: 'my-event-1'): void
    (e: 'my-event-2', arg1: string, arg2: number): void
  }

  $scopedSlots!: {
    // $scopedSlots for vue2, $slots for vue3
    'my-slot-1': () => VNode[]
    'my-slot-2': (bindings: { arg1: string; arg2: number }) => VNode[]
  }
}
</script>
