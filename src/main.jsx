import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStyles from './globalStyles.js'
import { CanvasProvider } from "./hooks/useCanvas.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <CanvasProvider>
      <App />
    </CanvasProvider>
  </React.StrictMode>,
)
