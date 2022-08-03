import { StyledEngineProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './components/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyles>
            <StyledEngineProvider injectFirst>
                <App />
            </StyledEngineProvider>
        </GlobalStyles>
    </React.StrictMode>,
);
