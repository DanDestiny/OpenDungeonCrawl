var GridMap = require('../grid/gridmap').GridMap;

    // TODO:
    // LOAD LEVEL JSON FILE
    // CREATE GRID THAT SATISFIES LEVEL
    // FILL GRID WITH LEVEL DATA

class GameMap{
    constructor(levelJson, viewport){
        // Create Grid
        this.mapGrid = new GridMap(14, 8, 96, viewport);
        this.gridArray = this.mapGrid.gridArray;
    }

    debugShowGrid(){
        this.gridArray.forEach(row => {
            row.forEach(cell => {
                var cellText = new PIXI.Text("Cell");
                cellText.x = cell.x + (cell.size/2) - (cellText.width / 2);
                cellText.y = cell.y + (cell.size/2) - (cellText.height / 2);
                cellText.style = new PIXI.TextStyle({
                    fill: 0x000000
                });
                this.viewport.addChild(cellText);
            });
        });
    }
}

exports.GameMap = GameMap;