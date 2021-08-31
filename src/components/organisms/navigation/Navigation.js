import React, {useEffect, useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core/styles';
import ButtonUserLogoutMenu from "../../atoms/ButtonUserLogoutMenu";
import NavigationButtonMobile from "../../atoms/navigationButtonMobile/NavigationButtonMobile";
import {DATABASE, PRODUCTS} from "../../../constants/Route";
import theme from "../../../styles/theme";
import StyleNavigation from "./StyleNavigation";

export default function Navigation({username}) {
    const classes = StyleNavigation();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const [logout, setLogout] = useState(username);
    console.log("ChildApp: " + username)
    console.log("Navigation: " + logout);
    const handleUserLogout = (user) => setLogout(user);

    useEffect(() => setLogout(username))

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl = {mobileMoreAnchorEl}
            anchorOrigin = {{ vertical: 'top', horizontal: 'right' }}
            id = {mobileMenuId}
            keepMounted
            transformOrigin = {{ vertical: 'top', horizontal: 'right' }}
            open = {isMobileMenuOpen}
            onClose = {handleMobileMenuClose}
        >
            <NavigationButtonMobile title={'Profil'} pathApp={'/'}/>
            <NavigationButtonMobile title={'Kalorie'} pathApp={'/'}/>
            <NavigationButtonMobile title={'Pomiar ciała'} pathApp={'/'}/>
            <NavigationButtonMobile title={'Produkty'} pathApp={PRODUCTS}/>
            <NavigationButtonMobile title={'Baza produktów'} pathApp={DATABASE}/>
            <ButtonUserLogoutMenu username={logout} isLogout={handleUserLogout}/>
        </Menu>
    );

    return (
        <ThemeProvider theme = {theme}>
        <div className = {classes.grow}>
            <AppBar position = "static">
                <Toolbar>
                    <Typography className = {classes.title}
                                variant = "h6"
                                noWrap
                    >
                        Kalkulator kalorii
                    </Typography>
                    <div className = {classes.grow}/>
                    <div className = {classes.sectionDesktop}>
                        <Button color = "inherit" className={classes.menuButton}>
                            <a href={'/'} className={classes.anchorLink}>Profil</a>
                        </Button>
                        <Button color = "inherit" className = {classes.menuButton}>
                            Kalorie
                        </Button>
                        <Button color = "inherit" className = {classes.menuButton}>
                           Pomiar ciała
                        </Button>
                        <Button color = "inherit" className={classes.menuButton}>
                            <a href={PRODUCTS} className={classes.anchorLink}>Produkty </a>
                        </Button>
                        <Button color = "inherit" className = {classes.menuButton}>
                            <a href={DATABASE} className={classes.anchorLink}>Baza produktów </a>
                        </Button>
                        <ButtonUserLogoutMenu username={logout} logout={handleUserLogout}/>
                    </div>
                    <div className = {classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            { renderMobileMenu }
        </div>
        </ThemeProvider>
    );
}
