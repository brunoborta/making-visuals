import { useLayoutEffect, useRef, useState } from "react";

function Canvas({children}) {
    const canvasRef = useRef(null);
    const width = 1080;
    const height = 1080;

    useLayoutEffect(() => {
        const context = canvasRef.current.getContext('2d');

        context.fillStyle = 'black';
        context.strokeStyle = 'white';
        context.fillRect(0, 0, width, height);

        const w = width * 0.10;
        const h = height * 0.10;
        const gap = width * 0.03;
        const initialX = width * 0.17;
        const initialY = height * 0.17;
        const off = width * 0.02;
        let x,y;
        for(let i = 0; i < 5; i++) {
            for(let j = 0; j < 5; j++) {

                x = initialX + (w + gap) * i;
                y = initialY + (h + gap) * j;
                context.beginPath();
                context.rect(x, y, w, h);
                if(Math.random() > 0.5) {
                    context.rect(x + off/2, y + off/2, w - off, h - off);
                }
                // context.closePath();
                context.stroke();
            }

        }

    }, []);
    return <canvas width={width} height={height} ref={canvasRef}>{children}</canvas>;
}

export default Canvas;