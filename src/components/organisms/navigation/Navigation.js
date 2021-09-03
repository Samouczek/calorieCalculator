import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core/styles';
import ButtonUserLogoutMenuMobile from "../../atoms/ButtonUserLogoutMenuMobile";
import ButtonUserLogoutMenu from "../../atoms/ButtonUserLogoutMenu";
import NavigationButtonMobile from "../../atoms/NavigationButtonMobile";
import {DATABASE, PRODUCTS, PROFILE} from "../../../constants/Route";
import theme from "../../../styles/theme";
import StyleNavigation from "./StyleNavigation";

export default function Navigation({username}) {
    const classes = StyleNavigation();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const [logout, setLogout] = useState(username);

    useEffect(() => setLogout(username))
    const handleUserLogout = (user) => setLogout(user);
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
            <NavigationButtonMobile title = {'Profil'} pathApp = {'/'}/>
            <NavigationButtonMobile title = {'Produkty'} pathApp = {PRODUCTS}/>
            <NavigationButtonMobile title = {'Baza produktów'} pathApp = {DATABASE}/>
            <ButtonUserLogoutMenuMobile username = {logout} isLogout = {handleUserLogout}/>
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
                            <Button
                                color = "inherit"
                                className={classes.menuButton}
                                component={NavLink}
                                to={PROFILE}
                            >
                                Profil
                            </Button>
                            <Button color = "inherit"
                                    className={classes.menuButton}
                                    component={NavLink}
                                    to={PRODUCTS}
                            >
                                Produkty
                            </Button>
                            <Button
                                color = "inherit"
                                className = {classes.menuButton}
                                component={NavLink}
                                to={DATABASE}>
                               Baza produktów
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
