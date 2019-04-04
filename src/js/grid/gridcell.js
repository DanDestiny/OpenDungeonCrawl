var PIXI = require('pixi.js');

export class GridCell{
    constructor(x, y, size, renderer){
        // have cell stuff
        this.x = x;
        this.y = y;
        this.size = size;
        this.renderer = renderer;
        
        // Create box for cell
        var graphics = new PIXI.Graphics();
        //graphics.beginFill(0xFFFF00);
        graphics.lineStyle(5, 0xFF0000);
        graphics.drawRect(this.x, this.y, size, size);
        renderer.addChild(graphics);
    }
}