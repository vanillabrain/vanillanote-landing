import NewList_grid from "../images/NewList_grid.png";
import NewList_2 from "../images/NewList_2.png";
import NewList_3 from "../images/NewList_3.png";
import D_NewList_grid from "../images/D_NewList_grid.png";
import arrow_back from "../images/arrow_back.png";
import arrow_forward from "../images/arrow_forward.png";
import { Slide } from './slide'
import {Button, Grid} from "@material-ui/core";
//import PropTypes from 'prop-types';

const images = [
    NewList_grid,
    NewList_2,
    NewList_3,
    D_NewList_grid
];

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

    const {data, className, ...rest } = props;

    return (
        <div>
            <div className="slideshow-container">
                {data.map((item, index) => (
                    <Slide
                    title={item.title1}
                    subtitle1={item.subtitle1}
                    subtitle2={item.subtitle2}
                    img={images[index]}//{NewList_grid}
                    />
                ))}
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

// Slideshow.propTypes = {
//     /**
//      * External classes
//      */
//     className: PropTypes.string,
//     /**
//      * data to be rendered
//      */
//     data: PropTypes.array.isRequired,
// };