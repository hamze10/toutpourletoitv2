import dynamic from 'next/dynamic';
import Presentation from '../components/Content/Presentation';
import Services from '../components/Content/Services';
import Footer from '../components/Footer/Footer';
import AOS from 'aos';

const CustomHeader = dynamic(
    () => import('../components/Header/Header'),
    { ssr : false}
);

if (typeof window !== 'undefined'){
    AOS.init({
        duration : 2000
    });
}

const Index = () => (
    <div>
        <CustomHeader />
        <Presentation />
        <Services />
        <Footer />
    </div>
)

export default Index