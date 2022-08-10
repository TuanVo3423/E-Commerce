import React, { useEffect, useState } from 'react';
import './header.css';
import { Fragment } from 'react';
import {
    AppBar,
    ListItemIcon,
    Toolbar,
    useMediaQuery,
    Drawer,
    List,
    ListItemButton,
    ListItemText,
} from '@mui/material';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import MenuIcon from '@mui/icons-material/Menu';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AbcOutlinedIcon from '@mui/icons-material/AbcOutlined';
import InfoIcon from '@mui/icons-material/Info';
import LoginIcon from '@mui/icons-material/Login';
import { Logo } from '../../../assets/Image';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import routes from '../../../configs/routes';
import CartProduct from '../../../components/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { headerReducer } from './ReducerSlice';
import { headerCartSelector } from '../../../redux/selectors';

const data = [
    {
        title: 'Home',
        link: routes.home,
    },
    {
        title: 'Categories',
        link: routes.categories,
    },
    {
        title: 'Donation',
        link: routes.donation,
    },
    {
        title: 'About us',
        link: routes.aboutUs,
    },
];
const dataMenu = [
    {
        icon: CloseIcon,
        title: 'Menu',
        hasSub: false,
        path: '#',
    },
    {
        icon: HomeIcon,
        title: 'Home',
        hasSub: false,
        path: '/',
    },
    {
        icon: CategoryIcon,
        title: 'Categories',
        hasSub: true,
        path: '/categories',
    },
    {
        icon: AbcOutlinedIcon,
        title: 'Donation',
        hasSub: false,
        path: '/donation',
    },

    {
        icon: InfoIcon,
        title: 'About Us',
        hasSub: false,
        path: '/aboutUs',
    },
];

export default function Header({ path }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [path]);
    const dispath = useDispatch();

    const [isHoverCategories, setIsHoverCategories] = useState(false);
    // const [isClose, setIsClose] = useState(true);
    // const [open, setOpen] = React.useState(false);
    const [openDraw, setOpenDraw] = React.useState(false);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const outerTheme = createTheme({
        palette: {
            primary: {
                main: '#2f9e44',
            },
        },
    });
    const handleOpenCart = () => {
        dispath(headerReducer.actions.VisibleCart(false));
    };
    // const handleClickExpandSubMenu = () => {
    //     setOpen(!open);
    // };

    const handleOpenDraw = () => {
        setOpenDraw(true);
    };
    const handleCloseMenu = () => {
        setOpenDraw(false);
    };

    const handleMouse = (event) => {
        if (event.target.className.includes('Categories')) {
            setIsHoverCategories(true);
        } else {
            setIsHoverCategories(false);
        }
    };
    const handleMouseOver = (event) => {
        if (!event.target.className.includes('Categories')) {
            setIsHoverCategories(false);
        }
    };
    const handleMouseWhenLeave = () => {
        setIsHoverCategories(false);
    };
    const checkCategories = (item) => {
        if (item === 'Categories') {
            return 'Categories px-12 font-semibold';
        } else {
            return 'px-12 font-semibold';
        }
    };

    return (
        <ThemeProvider theme={outerTheme}>
            <AppBar className="bg-white h-20">
                <Toolbar className="relative">
                    <div className="h-full w-40 bg-cover">
                        <div
                            onMouseLeave={handleMouseWhenLeave}
                            className="absolute headerCategories border-solid border-t-2 border-green-500 flex items-center text-black  bg-white left-0 top-full w-full h-32"
                            style={{ display: isHoverCategories ? 'flex' : 'none' }}
                        >
                            <div className="w-1/2 m-auto flex flex-row flex-wrap ">
                                <div className="flex w-1/4">
                                    <AcUnitIcon />
                                    <p className="text-lg ml-1 font-medium">Bàn chải</p>
                                </div>
                                <div className="flex w-1/4">
                                    <AcUnitIcon />
                                    <p className="text-lg ml-1 font-medium">Bàn chải</p>
                                </div>
                                <div className="flex w-1/4">
                                    <AcUnitIcon />
                                    <p className="text-lg ml-1 font-medium">Bàn chải</p>
                                </div>
                                <div className="flex w-1/4">
                                    <AcUnitIcon />
                                    <p className="text-lg ml-1 font-medium">Bàn chải</p>
                                </div>
                                <div className="flex w-1/4">
                                    <AcUnitIcon />
                                    <p className="text-lg ml-1 font-medium">Bàn chải</p>
                                </div>
                                <div className="flex w-1/4">
                                    <AcUnitIcon />
                                    <p className="text-lg ml-1 font-medium">Bàn chải</p>
                                </div>
                                <div className="flex w-1/4">
                                    <AcUnitIcon />
                                    <p className="text-lg ml-1 font-medium">Bàn chải</p>
                                </div>
                                <div className="flex w-1/4">
                                    <AcUnitIcon />
                                    <p className="text-lg ml-1 font-medium">Bàn chải</p>
                                </div>
                            </div>
                        </div>
                        <Logo className="h-full w-full object-cover" />
                    </div>
                    {!matches ? (
                        <Fragment>
                            <Tabs
                                className="m-auto"
                                value={path}
                                textColor="primary"
                                TabIndicatorProps={{
                                    style: {
                                        backgroundColor: '#51cf66',
                                        height: '3px',
                                    },
                                }}
                            >
                                {data.map((item, index) => (
                                    <Tab
                                        key={index}
                                        value={item.title}
                                        onMouseOver={handleMouse}
                                        onMouseLeave={handleMouseOver}
                                        to={item.link}
                                        component={Link}
                                        className={checkCategories(item.title)}
                                        label={item.title}
                                    />
                                ))}
                            </Tabs>
                            <AddShoppingCartIcon onClick={handleOpenCart} className="text-black ml-auto" />
                            <LoginIcon className="text-black ml-5" />
                        </Fragment>
                    ) : (
                        <Fragment>
                            <MenuIcon onClick={handleOpenDraw} className="text-black ml-auto" />

                            <Drawer
                                PaperProps={{
                                    sx: {
                                        width: 200,
                                    },
                                }}
                                anchor="right"
                                open={openDraw}
                            >
                                <List
                                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                                    component="nav"
                                    aria-labelledby="nested-list-subheader"
                                >
                                    {dataMenu.map((item, index) => {
                                        return (
                                            <Fragment key={index}>
                                                {/* {item.hasSub ? (
                                                    <>
                                                        <ListItemButton key={index} onClick={handleClickExpandSubMenu}>
                                                            <ListItemIcon>
                                                                <HomeIcon />
                                                            </ListItemIcon>
                                                            <ListItemText primary={item.title} />
                                                            {open ? <ExpandLess /> : <ExpandMore />}
                                                        </ListItemButton>
                                                        <Collapse in={open} timeout="auto" unmountOnExit>
                                                            <List component="div" disablePadding>
                                                                {dataSubMenu.map((item, index) => {
                                                                    return (
                                                                        <ListItem
                                                                            to={item.path}
                                                                            component={Link}
                                                                            key={index}
                                                                        >
                                                                            <ListItemButton sx={{ pl: 4 }}>
                                                                                <ListItemIcon>
                                                                                    <item.icon
                                                                                        onClick={handleCloseMenu}
                                                                                    />
                                                                                </ListItemIcon>
                                                                                <ListItemText primary={item.title} />
                                                                            </ListItemButton>
                                                                        </ListItem>
                                                                    );
                                                                })}
                                                            </List>
                                                        </Collapse>
                                                    </>
                                                ) : ( */}
                                                <ListItemButton
                                                    onClick={handleCloseMenu}
                                                    component={Link}
                                                    to={item.path}
                                                    key={index}
                                                >
                                                    <ListItemIcon>
                                                        <item.icon onClick={handleCloseMenu} />
                                                    </ListItemIcon>
                                                    <ListItemText primary={item.title} />
                                                </ListItemButton>
                                                {/* ) */}
                                                {/* } */}
                                            </Fragment>
                                        );
                                    })}
                                </List>
                            </Drawer>
                        </Fragment>
                    )}
                </Toolbar>
            </AppBar>
            <CartProduct />
        </ThemeProvider>
    );
}
{
}
