import { useLayoutEffect, useRef, useState } from "react";

function Canvas({children}) {
    const canvasRef = useRef(null);

    useLayoutEffect(() => {
        const context = canvasRef.current.getContext('2d');

        // context.fillRect(0, 0, context.canvas.width, context.canvas.height);

        context.lineWidth = 4;
        context.beginPath();
        context.rect(100, 100, 400, 400);
        // context.stroke();

        context.beginPath();
        context.arc(300, 300, 100, 0, Math.PI * 2);
        // context.stroke();

        const width = 60;
        const height = 60;
        const x = 100;
        const y = 100;
        const gap = 80;
        for(let i = 0; i < 5; i++) {
            for(let j = 0; j < 5; j++) {

                context.beginPath();
                context.rect(x + gap * i, y + gap * j, width, height);
                if(Math.random() > 0.5) {
                    context.rect((x + gap * i) + 8, (y + gap * j) + 8, width - 16, height - 16);
                }
                context.stroke();
            }

        }

    }, []);
    return <canvas width="1080" height="1080" ref={canvasRef}>{children}</canvas>;
}

export default Canvas;