/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module '*.js' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module '*.jsx' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module '*.scss' {
  const classes: { readonly [key: string]: string }
  export default classes
}
declare interface SlefWheelEvent extends WheelEvent {
  readonly wheelDelta: number
}
declare interface selfHTMLElement extends HTMLElement {
  readonly requestFullScreen: any
  readonly webkitRequestFullScreen: any
  readonly mozRequestFullScreen: any
  readonly msRequestFullScreen: any
  readonly msExitFullscreen: any
  readonly mozCancelFullScreen: any
  readonly webkitExitFullscreen: any
}
declare interface Window {
  MathJax: any
  myChart: any
}
interface Window {
  system: { [key: string]: any };
}
declare module 'sortablejs'