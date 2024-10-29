// src/scenes/InstructionsScene.js

import Phaser from 'phaser';

class InstructionsScene extends Phaser.Scene {
  constructor() {
    super('InstructionsScene');
  }

  create() {
    const { width, height } = this.scale;

    this.cameras.main.setBackgroundColor('#000'); // Set background color

    this.add
      .text(width / 2, height / 2 - 100, 'Instructions', {
        font: '32px monospace',
        fill: '#ffffff',
      })
      .setOrigin(0.5);

    const instructions = `
- Use WASD keys to move.
- Interact with buildings to view content.
- Press ESC to return to the main menu.
`;

    this.add
      .text(width / 2, height / 2, instructions, {
        font: '24px monospace',
        fill: '#ffffff',
        align: 'center',
        wordWrap: { width: 600 },
      })
      .setOrigin(0.5);

    // Back Button
    const backButton = this.add
      .text(width / 2, height - 50, 'Back', {
        font: '28px monospace',
        fill: '#ffffff',
      })
      .setOrigin(0.5)
      .setInteractive();

    backButton.on('pointerdown', () => {
      this.scene.start('MainMenuScene');
    });

    // Optional: Add hover effects for Back button
    backButton.on('pointerover', () => {
      backButton.setStyle({ fill: '#ff0' });
    });
    backButton.on('pointerout', () => {
      backButton.setStyle({ fill: '#fff' });
    });
  }
}

export default InstructionsScene;
