<template>
  <div>Hello {{ who }}</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
  @Prop({ default: 'World' }) readonly who!: string

  $props!: {
    who: string
  }
}
</script>
