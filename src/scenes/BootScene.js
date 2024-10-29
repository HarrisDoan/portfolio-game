import Phaser from 'phaser';

class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene');
  }

  preload() {
    // Load assets needed for the loading screen, if any
  }

  create() {
    this.scene.start('PreloaderScene');
  }
}

export default BootScene;
