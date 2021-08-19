import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 414,
            md: 1024,
            lg: 1194,
            xl: 1440
        }
    },
    typography: {
        fontFamily: "'Noto Sans KR', sans-serif"
    }
});

export default theme;