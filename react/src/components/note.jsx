import logo_bg from "../images/logo_bg.png";

export const Note = (props) => {
    return (
        <section id="note" className="note">
            <div className="cont_row">
                <div className="box_new1 s4_5">
                    <span className="s3">
                        {props.data ? props.data.paragraph1 : 'Loading'}
                    </span>
                    <span className="s4_5">
                        {props.data ? props.data.paragraph2 : ''}
                    </span><br/>
                    {props.data ? props.data.paragraph3 : ''}<br/>
                    {props.data ? props.data.paragraph4 : ''}<br/>
                    {props.data ? props.data.paragraph5 : ''}<br/>
                    {props.data ? props.data.paragraph6 : ''}<br/>
                </div>
                <div className="box_new3">
                    <img src={logo_bg}
                         className="logo_bg">
                    </img>
                </div>
            </div>
        </section>
    );
}