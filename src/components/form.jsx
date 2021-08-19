import btn_google from "../images/btn_google.png";
import btn_app from "../images/btn_app.png";
import {Box, Container, Grid, InputLabel, makeStyles, TextField} from "@material-ui/core";

export const Form = (props) => {
    return (
        <section className="fourth">
            <Grid container justifyContent="center" className="cont_column">
                <p className="fourth_heading">{props.data ? props.data.title : 'Loading'}</p>
                <div style={{height: '16px'}}></div>
                <p className="fourth_subheading">{props.data ? props.data.subtitle1 : 'Loading'}</p>
                <p className="fourth_subheading">{props.data ? props.data.subtitle2 : ''}</p>
                <div className="Rectangle-295">
                    <form className="form">
                        <div>
                            {/*<InputLabel htmlFor="writer_name">*/}
                            {/*    {props.data ? props.data.writer_name : 'Loading'}*/}
                            {/*</InputLabel>*/}
                            <label htmlFor="writer_name" className="writer_name">{props.data ? props.data.writer_name : 'Loading'}</label>
                            {/*<Box className="fourth_input_box" marginLeft="52px">*/}
                            {/*<TextField id="writer_name" name="writer_name" className="fourth_input"*/}
                            {/*           required placeholder="Please enter your name" variant="outlined" margin="dense">*/}
                            {/*    {props.data ? props.data.writer_name : 'Loading'}*/}
                            {/*</TextField>*/}
                            {/*</Box>*/}
                            <input id="writer_name" name="writer_name" className="fourth_input" required placeholder={props.data ? props.data.hint_writer_name : 'Loading'}>
                        </input>
                        </div>
                        <div>
                            <label htmlFor="writer_email" className="writer_email">{props.data ? props.data.writer_email : 'Loading'}</label>
                            <input id="writer_email" name="writer_email" className="fourth_input" required placeholder={props.data ? props.data.hint_writer_email : 'Loading'}>
                            </input>
                            {/*<TextField id="writer_email" name="writer_email" className="fourth_input" required placeholder="Please enter your E-Mail" variant="outlined" margin="dense">*/}
                            {/*    {props.data ? props.data.writer_email : 'Loading'}*/}
                            {/*</TextField>*/}
                        </div>
                        <div>
                                <label htmlFor="form_content" className="form_content">{props.data ? props.data.content : 'Loading'}</label>
                                <textarea id="form_content" name="form_content" className="fourth_textarea"
                                          required placeholder={props.data ? props.data.hint_content : 'Loading'}></textarea>
                            {/*<TextField id="form_content" name="form_content" className="fourth_textarea" required placeholder="Please enter your inquiry" variant="outlined" margin="dense" multiline rows={12}>*/}
                            {/*</TextField>*/}
                        </div>
                                <button type="submit" className="Rectangle-19" onClick="onClick()">
                                    <span className="form_done">{props.data ? props.data.form_done : 'Loading'}</span>
                                </button>
                    </form>
                </div>
                <div className="fourth_cont_row">
                    <img src={btn_google}
                         className="google">
                    </img>
                        <img src={btn_app}
                             className="app">
                        </img>
                </div>
                <div style={{height: '45px'}}/>
                <p className="footer"><span className="bold">{props.data ? props.data.footer1 : 'Loading'}</span>{props.data ? props.data.footer2 : ''}</p>
                <p className="footer">{props.data ? props.data.footer3 : ''}<span className="bold">{props.data ? props.data.footer4 : ''}</span>{props.data ? props.data.footer5 : ''}</p>
            </Grid>
        </section>
    );
}