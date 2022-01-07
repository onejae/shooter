import * as THREE from 'three'
import { Drawable } from '../entities/object'

export class Renderer {
    drawables: Array<Drawable>

    constructor() {
        this.drawables = new Array<Drawable>()
    }

    init(): void {}
    addDrawable(drawable: Drawable) {
        this.drawables.push(drawable)
    }
    startRender(): void {}
}
