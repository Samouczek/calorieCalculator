import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import theme from "../atoms/theme";
import { ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),

    },
    title: {
        display: 'none',
        [theme.breakpoints.up('xs')]: {
            display: 'block',
        },
    },

    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export default function Navigation({username}) {
    const classes = useStyles();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);


    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';


    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <Button color="inherit">Profil</Button>
            </MenuItem>
            <MenuItem>
                <Button color="inherit">Kalorie</Button>
            </MenuItem>
            <MenuItem>
                <Button color="inherit">Pomiar ciała</Button>
            </MenuItem>
            <MenuItem>
                <Button color="inherit">Produkty</Button>
            </MenuItem>
            <MenuItem>
                <Button color="inherit">Jadłospis</Button>
            </MenuItem>

            <MenuItem>
                <Button color={'inherit'}
                        className={classes.menuButton}
                >
                    <i className="material-icons"
                    >
                        account_circle
                    </i>
                    {username ? username: 'Zaloguj'}
                </Button>
            </MenuItem>
        </Menu>
    );

    return (
        <ThemeProvider theme={theme}>
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Kalkulator żywności
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <Button color="inherit" className={classes.menuButton}>Profil</Button>
                        <Button color="inherit" className={classes.menuButton}>Kalorie</Button>
                        <Button color="inherit" className={classes.menuButton}>Pomiar ciała</Button>
                        <Button color="inherit" className={classes.menuButton}>Produkty</Button>
                        <Button color="inherit" className={classes.menuButton}>Jadłospis</Button>
                        <Button color={'inherit'}
                                className={classes.menuButton}
                        >
                            <i className="material-icons profile_icon"
                            >
                                account_circle
                            </i>
                            {username ? username: 'Zaloguj'}
                        </Button>

                    </div>
                    <div className={classes.sectionMobile}>
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
            {renderMobileMenu}
        </div>
        </ThemeProvider>
    );
}
