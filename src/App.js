import { publicRoutes } from './components/routes';
import MainLayout from './components/layouts/MainLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@mui/material/styles';
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
                                    <MainLayout>
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
