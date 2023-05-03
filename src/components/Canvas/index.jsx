import { useLayoutEffect, useRef, useState } from "react";

function Canvas({children}) {
    const canvasRef = useRef(null);

    useLayoutEffect(() => {
        const context = canvasRef.current.getContext('2d');

        // context.fillStyle = '#000000';
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    }, []);
    return <canvas width="600" height="600" ref={canvasRef}>{children}</canvas>;
}

export default Canvas;