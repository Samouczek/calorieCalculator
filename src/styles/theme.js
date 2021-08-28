import { createTheme } from '@material-ui/core/styles';
import {plPL} from "@material-ui/core/locale";

 const theme = createTheme({
    palette: {
        primary: {
            light: '#64d8cb',
            main: '#26a69a',
            dark: '#00766c',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ffff56',
            main: '#ffea00',
            dark: '#c7b800',
            contrastText: '#000',
        }
    },
}, plPL);

export default theme;