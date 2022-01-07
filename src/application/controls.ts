import { Player } from '../entities/player.js'
import { Renderer } from './renderer.js'
import { Terrain } from '../entities/terrain.js'
import { Point } from '../entities/object.js'

class GameController {
    player: Player
    renderer: Renderer
    terrain: Terrain

    constructor() {
        this.player = new Player()
        this.renderer = new Renderer()
        this.terrain = new Terrain()
    }

    init(el: HTMLElement): void {
        this.player.init()
        this.renderer.init()
        this.terrain.init()

        const vertices = this.generateTerrain()

        this.terrain.loadMesh(vertices)

        this.renderer.addDrawable(this.player)
        this.renderer.addDrawable(this.terrain)
    }

    generateTerrain(): Float32Array {
        const vertices = new Float32Array([
            -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0,
            1.0, 1.0, -1.0, -1.0, 1.0,
        ])

        return vertices
    }

    startGame(): void {
        this.renderer.startRender()
    }
}

export default GameController
