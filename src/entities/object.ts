abstract class GameObject {
    constructor() {}

    init(): void {}

    // vertex-vertex
    abstract loadMesh(meshData: Float32Array): boolean
}

class Point {
    x: number
    y: number
    z: number

    constructor(x: number, y: number, z: number = 0.0) {
        this.x = x
        this.y = y
        this.z = z
    }
}

interface Movable {
    getPosition(): Point
    moveTo(point: Point): void
}

interface Drawable {
    getPrimitives(): Array<Point>
}

export { GameObject, Point, Movable, Drawable }
