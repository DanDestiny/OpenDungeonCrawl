var PIXI = require('pixi.js');
var Viewport = require('pixi-viewport');
var GameMap = require('../src/js/levels/gamemap').GameMap;

// ## PIXI APP ##
let app = new PIXI.Application(1280, 720, {
    transparent : false,

    backgroundColor: '0x525760'
});
document.body.appendChild(app.view);

// ## viewport ##
var viewport = new Viewport({
    screenWidth: 1280,
    screenHeight: 720,
    worldWidth: 2000,
    worldHeight: 2000,
    interaction: app.renderer.plugins.interaction
});

app.stage.addChild(viewport);

viewport
    .drag({ factor: 0})
    .pinch()
    .wheel()
    .decelerate({ friction: 0.2});

// ## Game Map ##
// TODO: Import map json here
var gameMap = new GameMap(false, viewport);
