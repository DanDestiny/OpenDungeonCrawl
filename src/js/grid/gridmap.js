var GridCell = require('./gridcell').GridCell;

class GridMap {
    constructor(rows, columns, pixelSize, renderer){
        this.rows = rows;
        this.columns = columns;
        this.cellSize = pixelSize;
        this.renderer = renderer;

        this.gridArray = this.createGrid(rows, columns, pixelSize, this.renderer); 
    }

    getCell(row, column){
        return this.gridArray[row][column];
    }

    createGrid(rows, columns, size, renderer){
        var gridArr = [];
        for (var i = 0; i < rows; i++){
            var row = [];
            for(var j = 0; j < columns; j++){
                row.push(new GridCell(i, j, i * size, j * size, size, renderer));
            }
            gridArr.push(row);
        }
        return gridArr;
    }

    findCell(findCell){
        for (let i = 0; i < this.gridArray.length; i++) {
            const row = this.gridArray[i];
            for (let j = 0; j < row.length; j++) {
                const cell = row[j];
                if (cell == findCell)
                    return { row : i, col: j};       
            }
        }
        return null;
    }

    getCellInRange(cellPos, range){
        var row = cellPos.row;
        var col = cellPos.col;
        var arr = [];
        for (let i = 1; i <= range; i++) {
            for (let j = 0; j < i; j++) {
                const element = array[j];
                
            }
            if(this.gridArray[row + i][col] != null){
                arr.push(this.gridArray[row + i][col]);
            }
            if(this.gridArray[row - i][col] != null){
                arr.push(this.gridArray[row - i][col]);
            }
            if(this.gridArray[row][col + i] != null){
                arr.push(this.gridArray[row][col + i]);
            }
            if(this.gridArray[row][col - i] != null){
                arr.push(this.gridArray[row][col - i]);
            }
            if(this.gridArray[row + i][col + i] != null){
                arr.push(this.gridArray[row + i][col + i]);
            }
            if(this.gridArray[row - i][col - i] != null){
                arr.push(this.gridArray[row - i][col - i]);
            }
            if(this.gridArray[row + i][col - i] != null){
                arr.push(this.gridArray[row + i][col - i]);
            }
            if(this.gridArray[row - i][col + i] != null){
                arr.push(this.gridArray[row - i][col + i]);
            }
        }
        return arr;
    }

    getCenterCell(){
        console.log("rows: " + this.rows/2 + " Rounded: " +  Math.round(this.rows / 2));
        return this.gridArray[Math.round(this.rows / 2) - 1][Math.round(this.columns / 2) - 1];
    }
}

exports.GridMap = GridMap;