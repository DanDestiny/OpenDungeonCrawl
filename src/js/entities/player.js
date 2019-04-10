var PIXI = require('pixi.js');

class Player{
    constructor(x, y, size, renderer){
        this.name = "Player";
        this.speed = 2;
        this.size = size;
        this.currentCell = null;
        this.sprite = renderer.addChild(new PIXI.Sprite(PIXI.Texture.WHITE));
        this.sprite.tint = 0x1e6ded;
        this.sprite.width = this.sprite.height = this.size;
        this.sprite.position.set(x - (this.size / 2), y - (this.size / 2));
    }

    getName(){
        return this.name;
    }

    getX(){
        return this.sprite.position.x;
    }

    getY(){
        return this.sprite.position.y;
    }

    setPosition(x, y){
        this.sprite.position.set(x - (this.size / 2), y - (this.size / 2));
    }

    setCell(cell){
        this.currentCell = cell;
    }
}

exports.Player = Player;