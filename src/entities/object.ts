class Point {
    x: number
    y: number

    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

interface Movable {
    getPosition(): Point
    moveTo(Point): void
}
