// import ParticlesBg from "particles-bg";
import logo from "../images/logo.png";
import img_main from "../images/img_main.png";
import btn_google from "../images/btn_google.png";
import btn_app from "../images/btn_app.png";

export const Header = (props) => {
    return (
        <section className="banner" role="banner">
            <div className="container">
                <div className="column" id="first_1">
                    <img src={logo}
                         className="logo"
                         alt="logo">
                    </img>
                    <p className="heading">{props.data ? props.data.title1 : 'Loading'}</p>
                    <p className="heading">{props.data ? props.data.title2 : 'Loading'}</p>
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
