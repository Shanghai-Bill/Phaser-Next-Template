import Phaser from "phaser";

class SimpleScene extends Phaser.Scene {
    preload() {
        // Preload assets
    }

    create() {
        this.add.text(100, 100, "Hello World", {});
    }
}


export default SimpleScene;