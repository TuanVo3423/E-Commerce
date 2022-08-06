import { StyledEngineProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './components/GlobalStyles';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyles>
            <StyledEngineProvider injectFirst>
                <Provider store={store}>
                    <App />
                </Provider>
            </StyledEngineProvider>
        </GlobalStyles>
    </React.StrictMode>,
);
