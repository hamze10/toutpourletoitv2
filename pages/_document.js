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