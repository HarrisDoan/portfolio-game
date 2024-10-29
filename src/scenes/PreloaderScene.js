// src/scenes/PreloaderScene.js

import Phaser from 'phaser';

class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('PreloaderScene');
  }

  preload() {
    // Get the width and height of the game canvas
    const { width, height } = this.scale;

    // Create a loading progress bar
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();

    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(width / 2 - 160, height / 2 - 25, 320, 50);

    // Loading text
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });
    loadingText.setOrigin(0.5);

    // Percent text
    const percentText = this.make.text({
      x: width / 2,
      y: height / 2,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    percentText.setOrigin(0.5);

    // Asset text
    const assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    assetText.setOrigin(0.5);

    // Update progress bar
    this.load.on('progress', (value) => {
      percentText.setText(parseInt(value * 100) + '%');
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(width / 2 - 150, height / 2 - 15, 300 * value, 30);
    });

    // Update file progress
    this.load.on('fileprogress', (file) => {
      assetText.setText('Loading asset: ' + file.key);
    });

    // Remove progress bar when complete
    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
    });

    // ** Load your assets here **

    // Example: Load images
    this.load.image('background', 'assets/images/background.png');
    this.load.image('building', 'assets/images/building.png');

    // Example: Load spritesheets
    this.load.spritesheet('player', 'assets/sprites/player.png', {
      frameWidth: 32,
      frameHeight: 48,
    });

    // Example: Load tilemap and tileset
    this.load.image('tiles', 'assets/tilemaps/tiles.png');
    this.load.tilemapTiledJSON('map', 'assets/tilemaps/map.json');

    // Example: Load audio files
    // this.load.audio('bgMusic', 'assets/audio/bgMusic.mp3');

    // ** Add more assets as needed **
  }

  create() {
    // Start the MainMenuScene after loading assets
    this.scene.start('MainMenuScene');
  }
}

export default PreloaderScene;
