import dynamic from 'next/dynamic';
import Presentation from '../components/Content/Presentation';
import Services from '../components/Content/Services';
import Footer from '../components/Footer/Footer';

const CustomHeader = dynamic(
    () => import('../components/Header/Header'),
    { ssr : false}
);

const Index = () => (
    <div>
        <CustomHeader />
        <Presentation />
        <Services />
        <Footer />
    </div>
)

export default Index