import { bomberFrames } from '../assets/loader';
import * as PIXI from 'pixi.js';

// Prepare frames
const playerFrames = bomberFrames;
const currentFrame = 'front';


export class GameApp {

    private app: PIXI.Application;

    constructor(parent: HTMLElement, width: number, height: number) {

        this.app = new PIXI.Application(width, height, {backgroundColor : 0x000000});
        parent.replaceChild(this.app.view, parent.lastElementChild); // Hack for parcel HMR

        // init Pizi loader
        let loader = new PIXI.loaders.Loader();

        // Add user player assets
        console.log('Player to load', playerFrames);
        Object.keys(playerFrames).forEach(key => {
            loader.add(playerFrames[key]);
        });

        // Load assets
        loader.load(this.onAssetsLoaded.bind(this));
    }

    private onAssetsLoaded() {

        const playerIdle: PIXI.extras.AnimatedSprite = new PIXI.extras.AnimatedSprite(playerFrames[currentFrame].map(path => PIXI.Texture.fromFrame(path))); // PIXI.extras.AnimatedSprite(playerIdleFrames);

        /*
        * An AnimatedSprite inherits all the properties of a PIXI sprite
        * so you can change its position, its anchor, mask it, etc
        */
        playerIdle.x = 100;
        playerIdle.y = 150;
        playerIdle['vx'] = 1;
        playerIdle.anchor.set(0, 1);
        // playerIdle.anchor.set(0.5);
        playerIdle.animationSpeed = 0.3;
        playerIdle.play();

        this.app.stage.addChild(playerIdle);
    }

}
