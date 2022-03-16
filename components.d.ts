import HelloWorld from './HelloWorld'

declare module '@vue/runtime-dom' {
  export interface GlobalComponents {
    HelloWorld: typeof HelloWorld
  }
}
