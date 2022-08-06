import { publicRoutes } from './routes';
import MainLayout from './layouts/MainLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@mui/material/styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
let theme = createTheme({
    palette: {
        primary: {
            main: '#fefefe',
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    {publicRoutes.map((route, index) => {
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
