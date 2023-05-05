import react, { useRef, useLayoutEffect } from 'react';
import { useCanvas } from '../hooks/useCanvas.jsx';

const Canvas = ({ draw }) => {
    const canvas = useRef(null);
    const { width, height } = useCanvas();

    useLayoutEffect(() => {
        const context = canvas.current.getContext('2d');
        draw(context);
    }, [])

    return (
        <canvas ref={canvas} height={height} width={width} />
    )
}

export default Canvas;