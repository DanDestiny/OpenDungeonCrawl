var PIXI = require('pixi.js');

const GREEN = 0x42f468;

class GridCell{
    constructor(row, col, x, y, size, renderer){
        // have cell stuff
        this.row = row;
        this.col = col;
        this.x = x;
        this.y = y;
        this.size = size;
        this.renderer = renderer;

        // State
        this.hasPlayer = false;
        this.hasEnemy = false;
        
        // Create box for cell
        this.cellGraphics = new PIXI.Graphics();
        this.emptyCellColour();
        renderer.addChild(this.cellGraphics);
    }

    availableCellColour (){
        console.log("Colour Change");
        if (this.hasPlayer)
            return;

        this.cellGraphics.clear();
        this.cellGraphics.beginFill(GREEN);
        this.cellGraphics.lineStyle(5, 0xFF0000);
        this.cellGraphics.drawRect(this.x, this.y, this.size, this.size);
        //this.renderer.render(this.cellGraphics);
    }

    emptyCellColour(){
        this.cellGraphics.clear();
        this.cellGraphics.lineStyle(5, 0xFF0000);
        this.cellGraphics.drawRect(this.x, this.y, this.size, this.size);
    }

    getCenterX(){
        return this.x+(this.size/2);
    }

    getCenterY(){
        return this.y+(this.size/2);
    }
}

exports.GridCell = GridCell;