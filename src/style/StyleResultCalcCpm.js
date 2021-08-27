import {makeStyles} from "@material-ui/core/styles";
import theme from "./theme";

function StyleResultCalcCpm(){
    return makeStyles({
        root:{
            marginTop: theme.spacing(4),
            marginBottom: theme.spacing(4),
        },
        resultNumber: {
            color:  theme.palette.primary.dark,
        },
        comment: {
            color: theme.palette.text.secondary,
            fontSize: '0.85rem',
        }
    });
}

export default StyleResultCalcCpm();