//import  *  as PIXI from "pixi.js";
var PIXI = require('pixi.js');
import { GridMap } from "./js/grid/gridmap";
//import * as Viewport from "pixi-viewport";
var Viewport = require('pixi-viewport');

let app = new PIXI.Application(1280, 720, {
    transparent : false,

    backgroundColor: '0x525760'
});
document.body.appendChild(app.view);

// viewport
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

// Sprite
// var sprite = viewport.addChild(new PIXI.Sprite(PIXI.Texture.WHITE));
// sprite.tint = 0xff0000;
// sprite.width = sprite.height = 100;
// sprite.position.set(100, 100);

// Create Grid
var mapGrid = new GridMap(14, 8, 96, viewport);
var gridArray = mapGrid.gridArray;
//var mapGrid = Grid.gridMap(14, 8, 96);
//console.log(mapGrid);
debugShowGrid();

function debugShowGrid(){
    gridArray.forEach(row => {
        row.forEach(cell => {
            var cellText = new PIXI.Text("Cell");
            cellText.x = cell.x + (cell.size/2) - (cellText.width / 2);
            cellText.y = cell.y + (cell.size/2) - (cellText.height / 2);
            cellText.style = new PIXI.TextStyle({
                fill: 0x000000
            });
            viewport.addChild(cellText);
            //console.log(cell);
        });
    });
}