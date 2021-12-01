// import ParticlesBg from "particles-bg";
import logo from "../images/logo.png";
import img_main from "../images/img_main.png";
import btn_google from "../images/btn_google.png";
import btn_app from "../images/btn_app.png";
import bgImg_tablet from "../images/bgImg_tablet.png";
import bgImg from "../images/bgImg.png";
import {Button, Grid, makeStyles, Typography} from "@material-ui/core";
import theme from "../theme";

const useStyles = makeStyles({
    banner: {
        backgroundImage: `url(${bgImg_tablet})`,
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
        height: "776px",
        backgroundColor: "#fff7e3",
        padding: "0",
        margin: "0",
        [theme.breakpoints.up('md')]: {
            backgroundImage:`url(${bgImg})`,
            height: "550px",
            padding: '0 201px 0 20px'
        },
        [theme.breakpoints.up('lg')]: {
            padding: '0 calc(50vw - 396px) 0 20px'
        },
    },
    heading: {
       width: '277px',
       height: '54px',
       margin: '0 0 0 calc(50vw - 138px)',
       fontSize: '36px',
       fontWeight: 'bold',
       fontStretch: 'normal',
       fontStyle: 'normal',
       lineHeight: '1.36',
       letterSpacing: '-1.47px',
       textAlign: 'center',
       color: '#562a2a',
       [theme.breakpoints.up('sm')]: {
           margin: '0 0 0 calc(50vw - 166px)',
           width: '333px',
           height: '58px',
           fontSize: '40px',
       },
       [theme.breakpoints.up('md')]: {
           textAlign: "left",
           fontSize: "50px",
           height: "68px",
           // margin: "0 calc(100vw - 987px) 0 154px",
           marginLeft: "154px",
           width: '500px',
       },
       [theme.breakpoints.up('lg')]: {
           width: '500px',
           margin: '0 0 0 calc(50vw - 443px)',
       }
   },
});

export const Header = (props) => {
    const classes = useStyles();

    return (
        <Grid
            container
            xs={12}
            className={classes.banner} role="banner">
            <Grid
                item
                container
                // className="container"
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                xs={12}>
                <Grid
                    item
                    container
                    xs={12}
                    md={8}
                    id="first_1">
                    <img src={logo}
                         className="logo"
                         alt="logo">
                    </img>
                    <Typography variant="h1" className={classes.heading}>{props.data ? props.data.title1 : 'Loading'}</Typography>
                    <Typography variant="h1" className={classes.heading}>{props.data ? props.data.title2 : 'Loading'}</Typography>
                    <p className="subheading">{props.data ? props.data.subtitle : 'Loading'}</p>
                    <img src={img_main}
                         id="img_main_phone"
                    alt="Vanilla Note Home">
                    </img>
                  <a href="https://play.google.com/store/apps/details?id=com.vanillabrain.vanillanote&hl=en_US&gl=US">
                    <img src={btn_google}
                         className="btn_google"
                    alt="Get It On Google Play">
                    </img>
                  </a>
                  <Button onClick={() => alert(props.data.iOS ?? "The iOS version is being prepared and will be released soon.")}>
                    <img src={btn_app}
                         className="btn_app"
                    alt="Download on the App Store">
                    </img>
                  </Button>
                </Grid>
                <Grid
                    item
                    container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                    xs={12}
                    md={4}
                    // className="column"
                    // id="first_2"
                >
                    <img src={img_main}
                         className="img_main">
                    </img>
                </Grid>
            </Grid>
        </Grid>
    );
}
