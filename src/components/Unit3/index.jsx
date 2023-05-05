import { useLayoutEffect, useRef, useState } from "react";
import Canvas from '../Canvas.jsx';
import { useCanvas } from '../../hooks/useCanvas.jsx';

function Unit3({children}) {
    const { width, height } = useCanvas();

    function draw(context) {
        const x = width * 0.5;
        const y = height * 0.5;
        const w = width * 0.3;
        const h = height * 0.3;
        
        context.fillStyle = 'black';

        
        // context.rotate(0.3);
        
        context.beginPath();
        context.rect(0, 0, w, h);
        context.fill();
        // context.translate(x, y);
    }

    return <Canvas draw={draw} />;
}

export default Unit3;