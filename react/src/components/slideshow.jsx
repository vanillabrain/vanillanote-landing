import NewList_grid from "../images/NewList_grid.png";
import NewList_2 from "../images/NewList_2.png";
import NewList_3 from "../images/NewList_3.png";
import D_NewList_grid from "../images/D_NewList_grid.png";
import arrow_back from "../images/arrow_back.png";
import arrow_forward from "../images/arrow_forward.png";

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
        console.log("clicked");
    }

    return (
        <div>
            <div className="slideshow-container">
                <div className="mySlides fade">
                    <p className="title">다양한 라벨 기능</p>
                    <p className="subtitle">텍스트 라벨, 컬러 라벨, 별표 라벨 등</p>
                    <p className="subtitle">다양한 그룹화로 노트를 관리해보세요.</p>
                    <div style={{height: '24px'}}></div>
                    <img src={NewList_grid}
                    class="slideshow_img">
                    </img>
                </div>
                <div className="mySlides fade">
                    <p className="title">편리한 체크리스트</p>
                    <p className="subtitle">체크리스트의 추가, 삭제, 순서변경</p>
                    <p className="subtitle">기능으로 리스트를 관리하세요.</p>
                    <div style={{height: '24px'}}></div>
                    <img src={NewList_2}
                    class="slideshow_img">
                    </img>
                </div>
                <div className="mySlides fade">
                    <p className="title">텍스트 라벨 관리</p>
                    <p className="subtitle">텍스트 라벨을 지정하면 탭으로</p>
                    <p className="subtitle">그룹화하여 관리할 수 있습니다.</p>
                    <div style={{height: '24px'}}></div>
                    <img src={NewList_3}
                    class="slideshow_img">
                    </img>
                </div>
                <div className="mySlides fade">
                    <p className="title">다크모드 지원</p>
                    <p className="subtitle">다크모드 지원으로 설정을 통해</p>
                    <p className="subtitle">자유롭게 사용할 수 있습니다.</p>
                    <div style={{height: '24px'}}></div>
                    <img src={D_NewList_grid}
                    class="slideshow_img">
                    </img>
                </div>

                <a className="prev" onClick={plusSlides(-1)}>
                    <img src={arrow_back}
                         className="arrow_back">
                    </img>
                </a>
                <a className="next" onClick={plusSlides(1)}>
                    <img src={arrow_forward}
                         className="arrow_forward">
                    </img>
                </a>
            </div>
            <div style={{height: '36px'}}></div>

            <div className="dots center">
                <span className="dot" onClick={currentSlide(1)}/>
                <span className="dot" onClick={currentSlide(2)}/>
                <span className="dot" onClick={currentSlide(3)}/>
                <span className="dot" onClick={currentSlide(4)}/>
            </div>
        </div>
    );
}