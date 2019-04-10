var GridMap = require('../grid/gridmap').GridMap;
var Player = require('../entities/player').Player;

    // TODO:
    // LOAD LEVEL JSON FILE
    // CREATE GRID THAT SATISFIES LEVEL
    // FILL GRID WITH LEVEL DATA

class GameMap{
    constructor(levelJson, viewport){
        // Create Grid
        this.viewport = viewport;
        this.mapGrid = new GridMap(15, 9, 96, this.viewport);
        this.gridArray = this.mapGrid.gridArray;
        var centercell = this.mapGrid.getCenterCell();
        this.player = new Player(centercell.getCenterX(), centercell.getCenterY(), 32, this.viewport);
        this.player.setCell(centercell);
        this.moveableCells = [];
    }

    getPlayer(){
        return this.player;
    }

    getCellFromPosition(x, y){
        for (let i = 0; i< this.gridArray.length; i++) {
            const row = this.gridArray[i];
            for (let i = 0; i< row.length; i++) {
                const cell = row[i];
                //console.log(cell);
                if (cell.x < x && (cell.x + cell.size) > x){
                    if (cell.y < y && (cell.y + cell.size) > y){
                        return cell;
                    }
                }
            }
        }
        return null;
    }

    checkMovableCells(cell){
        for (let i = 0; i < this.moveableCells.length; i++) {
            const element = this.moveableCells[i];
            if (element == cell){
                return true;
            }
        }
        return false;
    }

    getMovableCells(){
        var dist = this.player.speed;
        var cellPos = this.mapGrid.findCell(this.player.currentCell);
        var cellsInRange = this.mapGrid.getCellInRange(cellPos, dist);
        // Clear old Cells
        this.clearCellsColour(this.moveableCells);
        //console.log("Start Changing Cells Colour");
        if (cellsInRange.length <= 0)
            return;
        for (let i = 0; i < cellsInRange.length; i++) {
            var cell = cellsInRange[i];
            //console.log("Changing Cells Colour");
            cell.availableCellColour();
        }
        this.moveableCells = cellsInRange;
    }

    clearCellsColour(cellsList){
        for (let i = 0; i < cellsList.length; i++) {
            var cell = cellsList[i];
            //console.log("Clearing Cells Colour");
            cell.emptyCellColour();
        }
    }

    changeCellColour(){
        // TODO: Change cell colour based on if player can reach it
        // Green : achievable
        // transparent : can't reach
    }

    debugShowGrid(){
        this.gridArray.forEach(row => {
            row.forEach(cell => {
                var cellText = new PIXI.Text(cell.row + "," + cell.col);
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