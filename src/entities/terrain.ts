import { Drawable, GameObject, Point } from './object.js'

export class Terrain extends GameObject implements Drawable {
    loadMesh(meshData: Float32Array): boolean {
        return false
    }

    getPrimitives(): Point[] {
        throw new Error('Method not implemented.')
    }

    override init(): void {
        super.init()
    }
}
