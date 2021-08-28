import {makeStyles} from "@material-ui/core/styles";
import theme from "../../../styles/theme";

function StyleProductsTable(){
    return makeStyles({
        root: {
            minWidth: 275,
            marginBottom: theme.spacing(1),
            marginTop: theme.spacing(1),
            [theme.breakpoints.up('md')]: {
                minHeight: 500,
            },
        },
        title: {
            color: theme.palette.primary.dark,
            textAlign: 'center',
            fontWeight: '500',
            paddingBottom: theme.spacing(1),
        },
        pos: {
            marginBottom: 12,
        },
        table: {
            minWidth: 300,
        },
    });
}

export default StyleProductsTable();