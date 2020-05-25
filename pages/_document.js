import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="fr">
                <Head> 
                    <link rel="shortcut icon" href="/assets/images/favicon.ico" />
                    <meta name="google-site-verification" content="ZLQEF-kL0FBV7602_l40MmHp_6KoS6egW_ZZsbEkaM0" />
                    <meta name="og:description" content="Excell'Toit est une société belge composée de couvreurs agrées et expérimentés et d'ouvriers qualifiés. Nous offrons différents services de qualité à des prix corrects aux clients désireux d'effectuer des travaux de toiture."></meta>
                    <meta name="og:email" content="excelltoit@hotmail.com"/>
                    <meta name="og:phone_number" content="+32489501357"/>
                    <meta name="og:locality" content="Bruxelles"/>
                    <meta name="og:region" content="Bruxelles"/>
                    <meta name="og:postal-code" content="1030"/>
                    <meta name="og:country-name" content="Belgium"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument