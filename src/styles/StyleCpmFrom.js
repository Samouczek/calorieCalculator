import {makeStyles} from "@material-ui/core/styles";
import theme from "./theme";

function StyleCpmForm(){
    return makeStyles(() => ({
        root: {
            width: '100%',
            '& > * + *': {
                marginTop: theme.spacing(2),
            },
        },
        paper: {
            marginTop: theme.spacing(4),
            marginBottom: theme.spacing(10),
        },
        button: {
            textAlign: 'center',
        },
        header: {
            color: theme.palette.primary.dark,
            textAlign: 'center',
            paddingBottom: theme.spacing(3),
        }
    }));
}

export default StyleCpmForm();