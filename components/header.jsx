// import ParticlesBg from "particles-bg";
import logo from "../public/images/logo.png";
import img_main from "../public/images/img_main.png";
import btn_google from "../public/images/btn_google.png";
import btn_app from "../public/images/btn_app.png";
import {Grid, makeStyles, Typography} from "@material-ui/core";
import theme from "./theme";
import {useTranslation} from "next-i18next";
import Image from 'next/image'

const useStyles = makeStyles({
    banner: {
        backgroundImage: "url('/images/bgImg_tablet.png')",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
        height: "776px",
        backgroundColor: "#fff7e3",
        padding: "0",
        margin: "0",
        [theme.breakpoints.up('md')]: {
            backgroundImage: "url('/images/bgImg.png')",
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

    const { t } = useTranslation('common')

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
                    className="first_2">
                    <div className="logo">
                    <Image src={logo}
                         alt="logo">
                    </Image>
                    </div>
                    <Typography variant="h1" className={classes.heading}>{t('title1')}</Typography>
                    <Typography variant="h1" className={classes.heading}>{t('title2')}</Typography>
                    <p className="subheading">{t('subtitle')}</p>
                    <Grid className="img_main_phone">
                    <Image src={img_main}
                           className="img_main_phone"
                    alt="Vanilla Note Home">
                    </Image>
                    </Grid>
                    <div className="btn_google">
                    <Image src={btn_google}
                    alt="Get It On Google Play">
                    </Image>
                    </div>
                    <div className="btn_app">
                    <Image src={btn_app}
                    alt="Download on the App Store">
                    </Image>
                    </div>
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
                    <div className="img_main">
                    <Image src={img_main}>
                    </Image>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    );
}