import Image from 'next/image'

export const Third_Column = (props) => {
    return (
        <div className="column">
            <p className="title">{props.title}</p>
            <p className="subtitle">{props.subtitle1}</p>
            <p className="subtitle">{props.subtitle2}</p>
            <div className="third_images">
                <div className="third_img">
                <Image src={props.img}
                     alt="">
                </Image>
                </div>
            </div>
        </div>
    );
}