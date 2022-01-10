import * as THREE from 'three'
import { Drawable } from '../entities/object'

export class Renderer {
    drawables: Array<Drawable>
    scene: THREE.Scene
    camera: THREE.Camera
    renderer: THREE.WebGLRenderer

    constructor() {
        this.drawables = new Array<Drawable>()
    }

    init(el: HTMLElement): void {
        this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            1,
            500,
        )
        this.camera.position.set(0, 0, 100)
        this.camera.lookAt(0, 0, 0)

        this.renderer = new THREE.WebGLRenderer()

        this.renderer.setSize(window.innerWidth, window.innerHeight)
        el.appendChild(this.renderer.domElement)
    }

    addDrawable(drawable: Drawable) {
        this.drawables.push(drawable)

        const points = []

        points.push(new THREE.Vector3(-10, 0, 0))
        points.push(new THREE.Vector3(0, 10, 0))
        points.push(new THREE.Vector3(10, 0, 0))

        const geometry = new THREE.BufferGeometry().setFromPoints(points)

        const material = new THREE.LineBasicMaterial({ color: 0xff00ff })

        const line = new THREE.Line(geometry, material)

        this.scene.add(line)
        this.renderer.render(this.scene, this.camera)
    }

    startRender(): void {
        requestAnimationFrame(this.render.bind(this))
    }

    render(taskStartTime: Number): void {
        this.renderer.render(this.scene, this.camera)
        requestAnimationFrame(this.render.bind(this))
    }
}
