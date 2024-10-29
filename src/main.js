// src/main.js

import Phaser from 'phaser';
import MainMenuScene from './scenes/MainMenuScene';
import OverworldScene from './scenes/OverworldScene';
import ResumeScene from './scenes/ResumeScene';
import InstructionsScene from './scenes/InstructionsScene'; // Import InstructionsScene

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game-container',
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
  scene: [
    MainMenuScene,
    OverworldScene,
    ResumeScene,
    InstructionsScene, // Add InstructionsScene to the scene array
    // ... other scenes
  ],
};

const game = new Phaser.Game(config);

export default game;

