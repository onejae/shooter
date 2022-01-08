import { GameObject, Point, Drawable, Movable } from './object'

export class Player extends GameObject implements Drawable, Movable {
    loadMesh(meshData: Float32Array): boolean {
        throw new Error('Method not implemented.')
    }
    constructor() {
        console.log('A Player is created')
        super()
    }
    getPrimitives(): Point[] {
        throw new Error('Method not implemented.')
    }
    getPosition(): Point {
        throw new Error('Method not implemented.')
    }
    moveTo(point: Point): void {
        throw new Error('Method not implemented.')
    }
}
