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
var centerCell = gameMap.mapGrid.getCenterCell();
//centerCell.changeColour();
viewport.moveCenter(centerCell.x + (centerCell.size / 2), centerCell.y + (centerCell.size / 2));
var player = gameMap.getPlayer();
gameMap.getMovableCells();
gameMap.debugShowGrid();

viewport.on("clicked", function(e){
    console.log(e);
    //console.log(e.data.global.x);
    player.setPosition(e.world.x, e.world.y);
    // TODO: Check for cells here 
    var cellClicked = gameMap.getCellFromPosition(e.world.x, e.world.y);
    if (cellClicked != null){
        cellClicked.changeColour();
        console.log("Cell Clicked: " + cellClicked);
    }
    console.log("Cell Clicked: " + cellClicked);
    // Check if appropriate cell
    // TODO: Move player to cell
});



// setInterval(update, 33);

// function update(){
//     console.log("X: " + viewport.x + " Y: " + viewport.y);
//     console.log("Center: " + viewport.center.x);
// }
