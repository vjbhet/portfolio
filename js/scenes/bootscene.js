// js/scenes/bootscene.js
import * as Phaser from 'https://cdn.jsdelivr.net/npm/phaser@3/dist/phaser.esm.js'

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot')
  }
  preload() {
    this.load.image('tiles', 'assets/tilesets/dungeon_tiles.png')
    // …etc
  }
  create() {
    this.scene.start('Dungeon')
  }
}
