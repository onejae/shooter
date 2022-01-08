import * as THREE from 'three'
import { Drawable } from '../entities/object'

export class Renderer {
    drawables: Array<Drawable>

    constructor() {
        this.drawables = new Array<Drawable>()
    }

    init(el: HTMLElement): void {
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000,
        )

        const renderer = new THREE.WebGLRenderer()

        renderer.setSize(window.innerWidth, window.innerHeight)
        el.appendChild(renderer.domElement)
    }

    addDrawable(drawable: Drawable) {
        this.drawables.push(drawable)
    }

    startRender(): void {}
}
