import  *  as PIXI from "pixi.js";
import * as Grid from "./gridmap";

let app = new PIXI.Application(1280, 720, {
    transparent : false,

    backgroundColor: '0x525760'
});
document.body.appendChild(app.view);

// Create Grid
var mapGrid = Grid.gridMap(14, 8, 96);
console.log(mapGrid);
debugShowGrid();

function debugShowGrid(){
    mapGrid.forEach(row => {
        row.forEach(cell => {
            var cellText = new PIXI.Text("Cell");
            cellText.x = cell.x + (cell.size/2);
            cellText.y = cell.y + (cell.size/2);
            cellText.style = new PIXI.TextStyle({
                fill: 0x000000
            });
            app.stage.addChild(cellText);
            //console.log(cell);
        });
    });
}