import Image from 'next/image'

export const Slide = (props) => {
    return (
        <div className="mySlides fade">
            <p className="title">{props.title}</p>
            <p className="subtitle">{props.subtitle1}</p>
            <p className="subtitle">{props.subtitle2}</p>
            <div style={{height: '24px'}}></div>
            <div className="slideshow_img">
            <Image src={props.img}//{`url(${bgImg_tablet})`}
                 alt="">
            </Image>
            </div>
        </div>
    );
}