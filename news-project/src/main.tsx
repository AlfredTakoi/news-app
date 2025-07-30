import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="container mx-auto w-full h-full flex flex-col p-5">
      <App />
    </div>
  </StrictMode>,
)
