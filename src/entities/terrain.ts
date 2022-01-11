import { Drawable, GameObject, Point } from './object'

export class Terrain extends GameObject implements Drawable {
    loadMesh(meshData: Array<[number, number, number]>): boolean {
        return false
    }

    getPrimitives(): Point[] {
        throw new Error('Method not implemented.')
    }

    override init(): void {
        super.init()
    }
}
