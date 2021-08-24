import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Header } from '../components/header'
import { Footer } from '../components/Footer'
import {Note} from "../components/note";
import {Third_row} from "../components/third_row";
import {Form} from "../components/form";
import { thirdEN } from '../public/locales/en/third_EN';
import { thirdKR } from '../public/locales/ko/third_KR';

function SafeHydrate({ children }) {
    return (
        <div suppressHydrationWarning>
            {typeof window === 'undefined' ? null : children}
        </div>
    )
}

const Homepage = () => {

    const router = useRouter()
    const { t } = useTranslation('common')

    var third;
    if (t('language') === 'ko') {
        third = thirdKR;
    }
    else {
        third = thirdEN;
    }

    return (
        <div className="App">
            <Head>
                <title>

                    VanillaNote - Notepad, Checklist, Color Labels
                </title>
                <meta name="description" content="VanillaNote is a neat note/checklist app that uses word labels and color labels.
Enter ideas that come into mind anytime, anywhere, and save them right into your notes.
Also, you can create your own label rules and use them in various ways.
Text labels allow you to view notes grouped by tabs.
Color labels allow you to view notes grouped by color.
- When you're finished using the notepad, click the back button to save your note."
                      data-react-helmet="true" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://vanillanoteapp.web.app" />
                {/*<meta property="og:image" content="./images/logo.png" />*/}
                <meta property="og:title" content="VanillaNote - Notepad, Checklist, Color Labels" />
                <meta property="og:description" content="VanillaNote is a neat note/checklist app that uses word labels and color labels.
Enter ideas that come into mind anytime, anywhere, and save them right into your notes.
Also, you can create your own label rules and use them in various ways.
Text labels allow you to view notes grouped by tabs.
Color labels allow you to view notes grouped by color.
- When you're finished using the notepad, click the back button to save your note."
                      data-react-helmet="true" />
            </Head>
            <Header />
            <Note />
            <SafeHydrate><Third_row data={third} /></SafeHydrate>
            <Form />
        </div>
    )
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['common', 'footer']),
    },
})

export default Homepage

