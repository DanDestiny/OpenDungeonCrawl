var gridArray = [];

function setupGridArray(){

}

export function gridMap(rows, columns, pixelSize){
    for (var i = 0; i < rows; i++){
        var row = [];
        for(var j = 0; j < columns; j++){
            row.push(new cell(i * pixelSize, j * pixelSize, pixelSize));
        }
        gridArray.push(row);
    }
    return gridArray;
}

// Origin would be the top left corner
function cell(x, y, size){
    // have cell stuff
    this.x = x;
    this.y = y;
    this.size = size;
}

export function getGrid(){
    return gridArray;
}

export function getCell(row, column){
    return grid[row][column];
}