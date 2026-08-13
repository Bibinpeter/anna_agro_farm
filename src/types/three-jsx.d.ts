import * as THREE from 'three';
import { ReactNode } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      cylinderGeometry: any;
      planeGeometry: any;
      meshStandardMaterial: any;
      ambientLight: any;
      directionalLight: any;
      pointLight: any;
      spotLight: any;
    }
  }
}

declare module 'lenis' {
  export default class Lenis {
    constructor(options?: any);
    raf(time: number): void;
    destroy(): void;
    scrollTo(target: any, options?: any): void;
  }
}
