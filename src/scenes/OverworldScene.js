// src/scenes/OverworldScene.js

import Phaser from 'phaser';

class OverworldScene extends Phaser.Scene {
  constructor() {
    super('OverworldScene');
  }

  preload() {
    // Load assets needed for OverworldScene
    this.load.image('background', 'assets/images/background.png');
    this.load.image('tiles', 'assets/tilemaps/tiles.png');
    this.load.tilemapTiledJSON('map', 'assets/tilemaps/map.json');
    this.load.spritesheet('player', 'assets/sprites/player.png', {
      frameWidth: 32,
      frameHeight: 48,
    });
    // Load other assets as needed
  }

  create() {
    const { width, height } = this.scale;

    // **Add the background image**
    const bg = this.add.image(width / 2, height / 2, 'background').setOrigin(0.5);

    // **Optional: Adjust background to cover the entire game world**
    // If your background image isn't covering the entire area, you can scale it
    // bg.setScale(2); // Adjust the scale factor as needed

    // **Optional: Fix the background to the camera (if desired)**
    // bg.setScrollFactor(0);

    // Create the tilemap and tileset
    const map = this.make.tilemap({ key: 'map' });
    const tileset = map.addTilesetImage('tiles', 'tiles');

    // Create layers from the tilemap
    const backgroundLayer = map.createLayer('Background', tileset);
    const worldLayer = map.createLayer('World', tileset);
    worldLayer.setCollisionByProperty({ collides: true });

    // Create the player sprite
    this.player = this.physics.add.sprite(100, 100, 'player');

    // Set camera to follow player
    this.cameras.main.startFollow(this.player);

    // Add collisions between the player and world
    this.physics.add.collider(this.player, worldLayer);

    // Set up input controls
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    const speed = 175;
    this.player.body.setVelocity(0);

    // Horizontal movement
    if (this.cursors.left.isDown) {
      this.player.body.setVelocityX(-speed);
    } else if (this.cursors.right.isDown) {
      this.player.body.setVelocityX(speed);
    }

    // Vertical movement
    if (this.cursors.up.isDown) {
      this.player.body.setVelocityY(-speed);
    } else if (this.cursors.down.isDown) {
      this.player.body.setVelocityY(speed);
    }

    // Normalize and scale the velocity to prevent faster diagonal movement
    this.player.body.velocity.normalize().scale(speed);
  }
}

export default OverworldScene;

