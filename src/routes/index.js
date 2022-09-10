import routes from '../configs/routes';
//  Pages
import AboutUs from '../pages/aboutUs';
import Home from '../pages/home';
import Categories from '../pages/categories';
import Donation from '../pages/donation';
import DonationRanking from '../pages/donationRanking';

export const publicRoutes = [
    { path: routes.home, component: Home, title: 'Home' },
    { path: routes.categories, component: Categories, title: 'Categories' },
    { path: routes.donation, component: Donation, title: 'Donation' },
    { path: routes.aboutUs, component: AboutUs, title: 'About us' },
    { path: routes.donationRanking, component: DonationRanking, title: 'Ranking' },
];
export const privateRoutes = [];
