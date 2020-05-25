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
            <title> Excell'Toit - Société de toiture, toit. </title>
            <meta property="og:title" content="Excell'Toit" key="title" />
            <meta name="Description" content="Excell'Toit est une société composée de couvreurs agrées et expérimentés et d'ouvriers qualifiés. Nous offrons différents services de qualité à des prix corrects aux clients désireux d'effectuer des travaux de toiture."></meta>
        </Head>
        
        <CustomHeader />
        <Presentation />
        <Services />
        <Footer />
    </div>
)

export default Index