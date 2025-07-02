// js/scenes/bootscene.js
import * as Phaser from "https://cdn.jsdelivr.net/npm/phaser@3/dist/phaser.esm.js";

export default class BootScene extends Phaser.Scene {
  constructor() {
    super("Boot");
  }

  preload() {
    // preload the music
    this.load.audio("dungeonMusic", "assets/audio/dungeon.mp3");
  }
  create() {
    this.scene.start("Dungeon");
  }
}
