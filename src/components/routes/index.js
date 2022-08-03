import routes from '../configs/routes';
//  Pages
import AboutUs from '../pages/aboutUs';
import Home from '../pages/home';
import Cups from '../pages/cups';
import Others from '../pages/others';
import Straws from '../pages/straws';

export const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.cups, component: Cups },
    { path: routes.others, component: Others },
    { path: routes.straws, component: Straws },
    { path: routes.aboutUs, component: AboutUs },
];
export const privateRoutes = [];
