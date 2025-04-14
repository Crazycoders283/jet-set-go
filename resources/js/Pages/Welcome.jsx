import { Head, Link } from '@inertiajs/react';
import Mani from './Mani';
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
        <h1>Hello I'm Manindar Reddy Lakkireddy </h1>
        <p>I have  3 years of exp</p>
        <Mani/>
        </>
    );
}
