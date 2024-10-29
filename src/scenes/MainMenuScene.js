// src/scenes/MainMenuScene.js

import Phaser from 'phaser';

class MainMenuScene extends Phaser.Scene {
  constructor() {
    super('MainMenuScene');
  }

  preload() {
    // Load assets needed for MainMenuScene
    this.load.image('background', 'assets/images/background.png');

    const { width, height } = this.scale;

    // Loading text
    const loadingText = this.add.text(width / 2, height / 2, 'Loading...', {
      font: '20px monospace',
      fill: '#ffffff',
    }).setOrigin(0.5);

    // Remove loading text when complete
    this.load.on('complete', () => {
      loadingText.destroy();
    });
  }

  create() {
    const { width, height } = this.scale;

    // Set background image
    this.add.image(width / 2, height / 2, 'background').setOrigin(0.5);

    // Add game title
    this.titleText = this.add
      .text(width / 2, height / 2 - 150, 'My Portfolio Game', {
        font: '48px monospace',
        fill: '#ffffff',
      })
      .setOrigin(0.5);

    // ** MENU OPTIONS & FUNCTIONALITY **

    // Start Game Menu Option
    const startGameText = this.add
      .text(width / 2, height / 2 - 50, 'Start Game', {
        font: '32px monospace',
        fill: '#ffffff',
      })
      .setOrigin(0.5)
      .setInteractive();

    startGameText.on('pointerdown', () => {
      this.scene.start('OverworldScene');
    });

    // Instructions Menu Option
    const instructionsText = this.add
      .text(width / 2, height / 2 + 10, 'Instructions', {
        font: '32px monospace',
        fill: '#ffffff',
      })
      .setOrigin(0.5)
      .setInteractive();

    instructionsText.on('pointerdown', () => {
      this.scene.start('InstructionsScene'); // Corrected scene key
    });

    // Add hover effects for Start Game
    startGameText.on('pointerover', () => {
      startGameText.setStyle({ fill: '#ff0' });
    });
    startGameText.on('pointerout', () => {
      startGameText.setStyle({ fill: '#fff' });
    });

    // Add hover effects for Instructions
    instructionsText.on('pointerover', () => {
      instructionsText.setStyle({ fill: '#ff0' });
    });
    instructionsText.on('pointerout', () => {
      instructionsText.setStyle({ fill: '#fff' });
    });
  }
}

export default MainMenuScene;



// // src/scenes/MainMenuScene.js
// import Phaser from 'phaser';

// class MainMenuScene extends Phaser.Scene {
//   constructor() {
//     super('MainMenuScene');
//   }

//   create() {
//     const { width, height } = this.scale;

//     // Background Color or Image
//     this.cameras.main.setBackgroundColor('#000000'); // Set a solid color
//     // Alternatively, add a background image:
//     // this.add.image(width / 2, height / 2, 'backgroundImageKey').setOrigin(0.5);
//     // In MainMenuScene.js create() method
//     this.add.image(width / 2, height / 2, 'background').setOrigin(0.5);


//     // Game Title
//     this.titleText = this.add
//       .text(width / 2, height / 2 - 100, 'My Portfolio Game', {
//         font: '48px monospace',
//         fill: '#ffffff',
//       })
//       .setOrigin(0.5);

//     // Menu Options
//     this.startText = this.add
//       .text(width / 2, height / 2, 'Start Game', {
//         font: '32px monospace',
//         fill: '#ffffff',
//       })
//       .setOrigin(0.5)
//       .setInteractive();

//     this.instructionsText = this.add
//       .text(width / 2, height / 2 + 60, 'Instructions', {
//         font: '32px monospace',
//         fill: '#ffffff',
//       })
//       .setOrigin(0.5)
//       .setInteractive();

//     this.aboutText = this.add
//       .text(width / 2, height / 2 + 120, 'About Me', {
//         font: '32px monospace',
//         fill: '#ffffff',
//       })
//       .setOrigin(0.5)
//       .setInteractive();

//     // Interactivity
//     this.startText.on('pointerdown', () => {
//       this.scene.start('OverworldScene');
//     });

//     this.instructionsText.on('pointerdown', () => {
//       // Implement instructions scene or popup
//       this.scene.start('InstructionsScene');
//     });

//     this.aboutText.on('pointerdown', () => {
//       // Implement about me scene or popup
//       this.scene.start('AboutScene');
//     });

//     // Optional: Add hover effects
//     [this.startText, this.instructionsText, this.aboutText].forEach((text) => {
//       text.on('pointerover', () => {
//         text.setStyle({ fill: '#ff0' });
//       });
//       text.on('pointerout', () => {
//         text.setStyle({ fill: '#fff' });
//       });
//     });
//   }
// }

// export default MainMenuScene;
