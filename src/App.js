import { publicRoutes } from './routes';
import MainLayout from './layouts/MainLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScreenPlay } from './components/ScreenPlay';
import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@mui/material/styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
let theme = createTheme({
    palette: {
        primary: {
            main: '#fefefe',
        },
    },
});

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const time = setTimeout(() => {
        setIsLoading(false);
        return clearTimeout(time);
    }, 3000);
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                {isLoading && <ScreenPlay />}
                <Routes>
                    {!isLoading &&
                        publicRoutes.map((route, index) => {
                            const Page = route.component;
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <MainLayout path={route.title}>
                                            <Page />
                                        </MainLayout>
                                    }
                                />
                            );
                        })}
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}
export default App;
