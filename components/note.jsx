import logo_bg from "../public/images/logo_bg.png";
import {Grid, ImageList} from "@material-ui/core";
import {useTranslation} from "next-i18next";
import Image from 'next/image'

export const Note = (props) => {
    const { t } = useTranslation('common')

    return (
        <Grid
            container
            className="note">
            <Grid
                item
                container
                justifyContent="center"
                alignItems="center"
                className="cont_row">
                <Grid
                    className="box_new1 s4_5">
                    <span className="s3">
                        {t('paragraph1')}
                    </span>
                    <span className="s4_5">
                        {t('paragraph2')}
                    </span><br/>
                    {t('paragraph3')}<br/>
                    {t('paragraph4')}<br/>
                    {t('paragraph5')}<br/>
                    {t('paragraph6')}<br/>
                </Grid>
                <Grid
                    className="box_new3">
                    <div className="logo_bg">
                    <Image src={logo_bg}>
                    </Image>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    );
}
