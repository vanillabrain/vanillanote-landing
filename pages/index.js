import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

// export default function Home() {
//   return (
//     <Layout home>
//       <Head>
//         <title>{siteTitle}</title>
//       </Head>
//       <section className={utilStyles.headingMd}>
//         <p>[Your Self Introduction]</p>
//         <p>
//           (This is a sample website - you’ll be building a site like this in{' '}
//           <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
//         </p>
//       </section>
//     </Layout>
//   )
// }

import Link from 'next/link'
import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const Homepage = () => {

    const router = useRouter()
    const { t } = useTranslation('common')

    return (
        <>
            <main>
                <Header heading={t('h1')} title={t('title')} />
                <div>
                    <Link
                        href='/'
                        locale={router.locale === 'en' ? 'de' : 'en'}
                    >
                        <button>
                            {t('change-locale')}
                        </button>
                    </Link>
                    <Link href='/second-page'>
                        <button
                            type='button'
                        >
                            {t('to-second-page')}
                        </button>
                    </Link>
                </div>
            </main>
            <Footer />
        </>
    )
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['common', 'footer']),
    },
})

export default Homepage