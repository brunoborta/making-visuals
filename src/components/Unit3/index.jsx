import { useLayoutEffect, useRef, useState } from "react";

function Canvas({children}) {
    const canvasRef = useRef(null);
    const width = 1080;
    const height = 1080;

    useLayoutEffect(() => {
        const x = width * 0.5;
        const y = height * 0.5;
        const w = width * 0.3;
        const h = height * 0.3;
        
        const context = canvasRef.current.getContext('2d');
        context.fillStyle = 'black';

        
        // context.rotate(0.3);
        
        context.beginPath();
        context.rect(w, h, w, h);
        context.fill();
        context.translate(x, y);

    }, []);
    return <canvas width={width} height={height} ref={canvasRef}>{children}</canvas>;
}

export default Canvas;