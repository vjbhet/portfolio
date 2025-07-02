import * as Phaser from 'https://cdn.jsdelivr.net/npm/phaser@3/dist/phaser.esm.js'
import BootScene    from './scenes/bootscene.js'
import DungeonScene from './scenes/dungeonscene.js'

const config = {
  type: Phaser.AUTO,
  parent: 'game-container',
  scale: {
    mode: Phaser.Scale.RESIZE,              // auto-resizes game to container
    autoCenter: Phaser.Scale.CENTER_BOTH    // keep it centered
  },
  physics: { default: 'arcade', arcade: { debug: false } },
  scene: [ BootScene, DungeonScene ]
}

function startMyGame() {
  new Phaser.Game(config)
}

window.addEventListener('load', () => {
  const splash  = document.getElementById('splash')
  const gameCtn = document.getElementById('game-container')

  setTimeout(() => {
    splash.classList.add('fade-out')
    splash.addEventListener('transitionend', () => {
      splash.remove()
      gameCtn.classList.add('visible')
      startMyGame()
    }, { once: true })
  }, 2000)
})

