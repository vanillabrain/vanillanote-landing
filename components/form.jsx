import btn_google from "../public/images/btn_google.png";
import btn_app from "../public/images/btn_app.png";
import {Box, Container, Grid, InputLabel, makeStyles, TextField} from "@material-ui/core";
import Submit from "./submit";
import React, { useState, useRef } from 'react';
import {useTranslation} from "next-i18next";
import Image from 'next/image'

export const Form = (props) => {
    const { t } = useTranslation('common')

    return (
        <section className="fourth">
            <Grid container justifyContent="center" className="cont_column">
                <p className="fourth_heading">{t('title')}</p>
                <div style={{height: '16px'}}></div>
                <p className="fourth_subheading">{t('subtitle1')}</p>
                <p className="fourth_subheading">{t('subtitle2')}</p>
                <div className="Rectangle-295">
                    <Submit />
                </div>
                <div className="fourth_cont_row">
                    <div className="google">
                    <Image src={btn_google}>
                    </Image>
                    </div>
                    <div className="app">
                        <Image src={btn_app}>
                        </Image>
                    </div>
                </div>
                <div style={{height: '45px'}}/>
                <p className="footer"><span className="bold">{t('footer1')}</span>{t('footer2')}</p>
                <p className="footer">{t('footer3')}<span className="bold">{t('footer4')}</span>{t('footer5')}</p>
            </Grid>
        </section>
    );
}