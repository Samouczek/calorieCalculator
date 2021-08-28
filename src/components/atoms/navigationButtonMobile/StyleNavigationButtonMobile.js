import {makeStyles} from "@material-ui/core/styles";
import theme from "../../../styles/theme";

function StyleNavigationButtonMobile(){
    return  makeStyles(() => ({
        anchorLink: {
            textDecoration: 'none',
            color: theme.palette.common.black,
        }
    }));
}

export default  StyleNavigationButtonMobile();