import Vue from 'vue'

export default class HelloWorld extends Vue {
  $props: {
    /**
     * [@props] who
     */
    who: string
  }
}
