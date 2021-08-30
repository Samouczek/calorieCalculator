import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import {LOG_IN} from "../../constants/Route";
import React from "react";
import theme from "../../styles/theme";
import {makeStyles} from "@material-ui/core/styles";

const styled= makeStyles(() => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    anchorLink: {
        textDecoration: 'none',
        color: theme.palette.common.black,
    }
}));

function ButtonUserLogoutMenu( {username}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = styled();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <MenuItem>
            <Button
                color = {'inherit'}
                className = {classes.menuButton}
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <i className = "material-icons">account_circle</i> { username ? username: 'Zaloguj' }
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem>
                    <Button>
                        <a href={LOG_IN} className={classes.anchorLink}>Wyloguj</a>
                    </Button>
                </MenuItem>
            </Menu>
        </MenuItem>
    );
}

export default ButtonUserLogoutMenu;