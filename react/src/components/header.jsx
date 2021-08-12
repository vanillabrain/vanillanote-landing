// import ParticlesBg from "particles-bg";
import logo from "../images/logo.png";
import img_main from "../images/img_main.png";
import btn_google from "../images/btn_google.png";
import btn_app from "../images/btn_app.png";
import bgImg_tablet from "../images/bgImg_tablet.png";
import bgImg from "../images/bgImg.png";
import {makeStyles, Typography} from "@material-ui/core";
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
    },
    heading: {
       width: '237px',
       height: '54px',
       margin: '0 0 0 calc(50vw - 118px)',
       fontSize: '36px',
       fontWeight: 'bold',
       fontStretch: 'normal',
       fontStyle: 'normal',
       lineHeight: '1.36',
       letterSpacing: '-1.47px',
       textAlign: 'center',
       color: '#562a2a',
       [theme.breakpoints.up('sm')]: {
           marginLeft: 'calc(50vw - 166px)',
           width: '333px',
           height: '58px',
           fontSize: '40px',
       },
       [theme.breakpoints.up('md')]: {
           textAlign: "left",
           fontSize: "50px",
           height: "68px",
           margin: "0 calc(100vw - 987px) 0 154px",
       },
       [theme.breakpoints.up('lg')]: {
           margin: '0 207px 0 calc(50vw - 443px)',
       }
   },
});

export const Header = (props) => {
    const classes = useStyles();

    return (
        <section className={classes.banner} role="banner">
            <div className="container">
                <div className="column" id="first_1">
                    <img src={logo}
                         className="logo"
                         alt="logo">
                    </img>
                    <Typography className={classes.heading}>{props.data ? props.data.title1 : 'Loading'}</Typography>
                    <Typography className={classes.heading}>{props.data ? props.data.title2 : 'Loading'}</Typography>
                    <p className="subheading">{props.data ? props.data.subtitle : 'Loading'}</p>
                    <img src={img_main}
                         id="img_main_phone">
                    </img>
                    <img src={btn_google}
                         className="btn_google">
                    </img>
                    <img src={btn_app}
                         className="btn_app">
                    </img>
                </div>
                <div className="column" id="first_2">
                    <img src={img_main}
                         className="img_main">
                    </img>
                </div>
            </div>
        </section>
    );
}
