import HelloWorld from './components/HelloWorld.vue'

declare module '@vue/runtime-dom' {
  export interface GlobalComponents {
    HelloWorld: typeof HelloWorld
  }
}
