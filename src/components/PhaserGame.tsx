import React, { useEffect, useState } from "react";

let Phaser: any;

const PhaserGame: React.FC = () => {
    const [isPhaserLoaded, setIsPhaserLoaded] = useState(false);

    useEffect(() => {
        // Dynamically import Phaser to avoid server-side issues 
        import('phaser').then(phaser => {
            Phaser = phaser.default;
            setIsPhaserLoaded(true);
        });
    }, []);

    useEffect(() => {
        if (!isPhaserLoaded) return;

        const SimpleScene = require('@/pages/game').default;

        const config = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            scene: SimpleScene
        };

        new Phaser.Game(config);
    }, [isPhaserLoaded]);

    return <div id="game" />;
}

export default PhaserGame;