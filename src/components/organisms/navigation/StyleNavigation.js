import {makeStyles} from "@material-ui/core/styles";
import theme from "../../../styles/theme";

function StyleNavigation(){
   return  makeStyles(() => ({
        grow: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),

        },
        title: {
            display: 'none',
            [ theme.breakpoints.up('xs') ]: {
                display: 'block',
            },
        },
        sectionDesktop: {
            display: 'none',
            [ theme.breakpoints.up('md') ]: {
                display: 'flex',
            },
        },
        sectionMobile: {
            display: 'flex',
            [ theme.breakpoints.up('md') ]: {
                display: 'none',
            },
        },
       anchorLink: {
            textDecoration: 'none',
            color: theme.palette.common.white,
       }
    }));
}

export default StyleNavigation();