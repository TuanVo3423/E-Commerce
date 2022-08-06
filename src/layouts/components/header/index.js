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
    Collapse,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import CoffeeIcon from '@mui/icons-material/Coffee';
import CategoryIcon from '@mui/icons-material/Category';
import MenuIcon from '@mui/icons-material/Menu';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import BakeryDiningOutlinedIcon from '@mui/icons-material/BakeryDiningOutlined';
import AbcOutlinedIcon from '@mui/icons-material/AbcOutlined';
import InfoIcon from '@mui/icons-material/Info';
import LoginIcon from '@mui/icons-material/Login';
import { Logo } from '../../../assets/Image';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Link } from 'react-router-dom';
import routes from '../../../configs/routes';

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
        title: 'Others',
        link: routes.others,
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
    },
    {
        icon: HomeIcon,
        title: 'Home',
        hasSub: false,
    },
    {
        icon: CategoryIcon,
        title: 'Categories',
        hasSub: true,
    },
    {
        icon: InfoIcon,
        title: 'About Us',
        hasSub: false,
    },
];
const dataSubMenu = [
    {
        icon: BakeryDiningOutlinedIcon,
        title: 'Straws',
    },
    {
        icon: CoffeeIcon,
        title: 'Cups',
    },
    {
        icon: AbcOutlinedIcon,
        title: 'Others',
    },
];
export default function Header({ path }) {
    const [isHoverCategories, setIsHoverCategories] = useState(false);
    const [open, setOpen] = React.useState(false);
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
    const handleClickExpandSubMenu = () => {
        setOpen(!open);
    };
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
                            <AddShoppingCartIcon className="text-black ml-auto" />
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
                                                {item.hasSub ? (
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
                                                                        <ListItemButton sx={{ pl: 4 }} key={index}>
                                                                            <ListItemIcon>
                                                                                <item.icon onClick={handleCloseMenu} />
                                                                            </ListItemIcon>
                                                                            <ListItemText primary={item.title} />
                                                                        </ListItemButton>
                                                                    );
                                                                })}
                                                            </List>
                                                        </Collapse>
                                                    </>
                                                ) : (
                                                    <ListItemButton key={index}>
                                                        <ListItemIcon>
                                                            <item.icon onClick={handleCloseMenu} />
                                                        </ListItemIcon>
                                                        <ListItemText primary={item.title} />
                                                    </ListItemButton>
                                                )}
                                            </Fragment>
                                        );
                                    })}
                                </List>
                            </Drawer>
                        </Fragment>
                    )}
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}
{
    /*  */
}
