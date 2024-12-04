import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppContent from './routes';

const App = () => (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
);

export default App;
