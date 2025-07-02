// js/scenes/dungeonscene.js
import * as Phaser from "https://cdn.jsdelivr.net/npm/phaser@3/dist/phaser.esm.js";

export default class DungeonScene extends Phaser.Scene {
  constructor() {
    super("Dungeon");
  }

  create() {
    // grab the current game size
    const width = this.scale.width;
    const height = this.scale.height;

    // draw a full-screen rectangle centered in the game
    this.add.rectangle(
      width / 2, // x-center
      height / 2, // y-center
      width, // full width
      height, // full height
      0xadd8e6 // green color
    );

    this.sound.add("dungeonMusic", { loop: true, volume: 0.5 }).play();
  }
  update() {
    // movement logic later
  }
}
// Note: This scene is very basic and will be expanded with actual game logic, player movement, and interactions later.
