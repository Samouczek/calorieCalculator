import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import { NavLink} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {LOG_IN} from "../../constants/Route";
import theme from "../../styles/theme";

const styled= makeStyles(() => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

function ButtonUserLogoutMenuMobile({username, isLogout}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [userName, setUserName] = useState(username);
    const classes = styled();

    useEffect(() => setUserName(username));

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        if (typeof isLogout === "function"){
            isLogout(false);
            setUserName(false);
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
        setUserName(false);
    };

    return (
        <>
            <MenuItem>
                { userName &&
                    <Button
                        color = {'inherit'}
                        className = {classes.menuButton}
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <i className = "material-icons">account_circle</i> { userName ? userName : 'Zaloguj' }
                    </Button>
                }
                { !userName &&
                    <Button
                        color = {'inherit'}
                        className = {classes.menuButton}
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                        component={NavLink}
                        to={LOG_IN}
                    >
                        <i className = "material-icons">account_circle</i> { userName ? userName : 'Zaloguj' }
                    </Button>
                }
            </MenuItem>
            {(userName) &&
                <MenuItem>
                    <Button component={NavLink} to={LOG_IN} onClick={handleClose}>Wyloguj</Button>
                </MenuItem>
            }
        </>
    );
}

export default ButtonUserLogoutMenuMobile;