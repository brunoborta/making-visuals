import { useState, createContext, useContext } from 'react';

const CanvasContext = createContext();

export function CanvasProvider({ children }) {
    const [width, setWidth] = useState(1080);
    const [height, setHeight] = useState(1080);

    return <CanvasContext.Provider value={{width, height}}>{children}</CanvasContext.Provider>
}

export function useCanvas() {
    const context = useContext(CanvasContext);

    return context;
}