import {GridCell} from './gridcell';

export class GridMap {
    constructor(rows, columns, pixelSize, renderer){
        this.rows = rows;
        this.columns = columns;
        this.cellSize = pixelSize;
        this.renderer = renderer;

        this.gridArray = createGrid(rows, columns, pixelSize, this.renderer); 
    }

    get cell(){
        return this.gridArray[row][column];
    }
}

function createGrid(rows, columns, size, renderer){
    var gridArr = [];
    for (var i = 0; i < rows; i++){
        var row = [];
        for(var j = 0; j < columns; j++){
            row.push(new GridCell(i * size, j * size, size, renderer));
        }
        gridArr.push(row);
    }
    return gridArr;
}
