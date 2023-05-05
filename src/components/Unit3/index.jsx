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

        //
        // context.translate(x, y);

        context.rotate(0.3);

        context.beginPath();
        context.rect(0, 0, w, h);
        context.fill();

    }, []);
    return <canvas width={width} height={height} ref={canvasRef}>{children}</canvas>;
}

export default Canvas;