import { Player } from '../entities/player'
import { Renderer } from './renderer'
import { Terrain } from '../entities/terrain'
import { Point } from '../entities/object'

class GameController {
    player: Player
    renderer: Renderer
    terrain: Terrain

    constructor() {
        this.player = new Player()
        this.renderer = new Renderer()
        this.terrain = new Terrain()
        console.log(this.player)
    }

    init(el: HTMLElement): void {
        console.log('okay')
        this.player.init()
        this.renderer.init(el)
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
