declare global {
  interface Window { bpmnInstances: any }
}

declare const elementRegistry: Object;
declare let bpmnInstances: Object & { elementRegistry: Object };
declare const window: Window & { bpmnInstances: Object };