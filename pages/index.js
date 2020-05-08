import dynamic from 'next/dynamic';
import Head from 'next/head';
import Presentation from '../components/Content/Presentation';
import Services from '../components/Content/Services';
import Footer from '../components/Footer/Footer';

const CustomHeader = dynamic(
    () => import('../components/Header/Header'),
    { ssr: false }
);

const Index = () => (
    <div>
        <Head>
            <title> Tout pour le toit </title>
            <meta property="og:title" content="Tout pour le toit" key="title" />
            <meta name="Description" content="Société de toiture, tout pour le toit."></meta>
        </Head>
        
        <CustomHeader />
        <Presentation />
        <Services />
        <Footer />
    </div>
)

export default Index