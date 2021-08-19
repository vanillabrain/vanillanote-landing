import btn_google from "../images/btn_google.png";
import btn_app from "../images/btn_app.png";
import {Box, Container, Grid, InputLabel, makeStyles, TextField} from "@material-ui/core";
import Submit from "./submit";
import React, { useState, useRef } from 'react';

export const Form = (props) => {
    return (
        <section className="fourth">
            <Grid container justifyContent="center" className="cont_column">
                <p className="fourth_heading">{props.data ? props.data.title : 'Loading'}</p>
                <div style={{height: '16px'}}></div>
                <p className="fourth_subheading">{props.data ? props.data.subtitle1 : 'Loading'}</p>
                <p className="fourth_subheading">{props.data ? props.data.subtitle2 : ''}</p>
                <div className="Rectangle-295">
                        <Submit data={props.data}>
                        </Submit>
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