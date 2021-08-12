import NewList_grid from "../images/NewList_grid.png";
import NewList_2 from "../images/NewList_2.png";
import NewList_3 from "../images/NewList_3.png";
import D_NewList_grid from "../images/D_NewList_grid.png";
import arrow_back from "../images/arrow_back.png";
import arrow_forward from "../images/arrow_forward.png";
import { Slide } from './slide'
import {Button} from "@material-ui/core";

export const Slideshow = (props) => {
    var slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        if (slides[slideIndex - 1] !== undefined)
        slides[slideIndex - 1].style.display = "block";
        if (dots[slideIndex - 1] !== undefined)
        dots[slideIndex - 1].className += " active";
    }

    return (
        <div>
            <div className="slideshow-container">
                <Slide
                    title={props.data ? props.data.title1 : "Loading"}
                    subtitle1={props.data ? props.data.subtitle1_1 : "Loading"}
                    subtitle2={props.data ? props.data.subtitle1_2 : ""}
                    img={NewList_grid}
                />
                <Slide
                    title={props.data ? props.data.title2 : "Loading"}
                    subtitle1={props.data ? props.data.subtitle2_1 : "Loading"}
                    subtitle2={props.data ? props.data.subtitle2_2 : ""}
                    img={NewList_2}
                />
                <Slide
                    title={props.data ? props.data.title3 : "Loading"}
                    subtitle1={props.data ? props.data.subtitle3_1 : "Loading"}
                    subtitle2={props.data ? props.data.subtitle3_2 : ""}
                    img={NewList_3}
                />
                <Slide
                    title={props.data ? props.data.title4 : "Loading"}
                    subtitle1={props.data ? props.data.subtitle4_1 : "Loading"}
                    subtitle2={props.data ? props.data.subtitle4_2 : ""}
                    img={D_NewList_grid}
                />

                <a className="prev" onClick={() => plusSlides(-1)}>
                    <img src={arrow_back}
                         className="arrow_back">
                    </img>
                </a>
                <a className="next" onClick={() => plusSlides(1)}>
                    <img src={arrow_forward}
                         className="arrow_forward">
                    </img>
                </a>
            </div>
            <div style={{height: '36px'}}></div>

            <div className="dots center">
                <span className="dot" onClick={() => currentSlide(1)}/>
                <span className="dot" onClick={() => currentSlide(2)}/>
                <span className="dot" onClick={() => currentSlide(3)}/>
                <span className="dot" onClick={() => currentSlide(4)}/>
            </div>
        </div>
    );
}