import { Head, Link } from '@inertiajs/react';
import Header from '../../js/Pages/SRC/components/Common/Header/Header';
// import Banner from '../Pages/SRC/components/Banner/Banner';
import Footer from "../../js/Pages/SRC/components/Common/Footer/Footer";
import Home from "../../js/Pages/SRC/packeges/p_Home";
export default function Welcome({ auth, laravelVersion, phpVersion,IternaryList }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        
        <>
            {/* Head Metadata */}
            <Head title="Home" />

            {/* Header Section */}
            <Header />

            {/* Banner Section */}

            {/* Home Section */}
            <Home  />

            {/* Footer Section */}
            <Footer />
   
        </>
    );
}
