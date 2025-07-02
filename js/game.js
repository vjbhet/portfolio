import * as Phaser from 'https://cdn.jsdelivr.net/npm/phaser@3/dist/phaser.esm.js'
import BootScene    from './scenes/bootscene.js'
import DungeonScene from './scenes/dungeonscene.js'

const config = {
  type: Phaser.AUTO,
  parent: 'game-container',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 800,
    height: 600
  },
  pixelArt: true,
  physics: { default: 'arcade', arcade: { debug: false } },
  scene: [ BootScene, DungeonScene ]
}

function startMyGame() {
  new Phaser.Game(config)
}

window.addEventListener('load', () => {
  const splash  = document.getElementById('splash')
  const msg     = document.getElementById('splash-message')
  const gameCtn = document.getElementById('game-container')

  // Step 1: fade out "Welcome..." after 2s
  setTimeout(() => {
    msg.classList.add('fade-out-msg')
  }, 2000)

  // Step 2: after that fade finishes, swap in "Press any key" and fade it back in
  msg.addEventListener('transitionend', function onWelcomeFade(e) {
    // only run on the fade-out of the welcome text
    if (e.propertyName === 'opacity') {
      msg.textContent = 'Press any key to start'
      msg.classList.remove('fade-out-msg')

      // now wait for that fade-in to finish
      msg.addEventListener('transitionend', function onPressFadeIn(e2) {
        // Step 3: only now attach the keydown listener
        window.addEventListener('keydown', () => {
          splash.classList.add('fade-out')
          splash.addEventListener('transitionend', () => {
            splash.remove()
            gameCtn.classList.add('visible')
            startMyGame()
          }, { once: true })
        }, { once: true })
      }, { once: true })
    }
  }, { once: true })
})


