import { useEffect } from 'react';
import ReactGA from 'react-ga';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Playground from '@/components/playground';

const App = () => {
    useEffect(() => {
        // Initialize Google Analytics
        ReactGA.initialize('G-V2W8PRVXZ7');
        if (typeof window !== 'undefined') {
            ReactGA.pageview(window.location.pathname + window.location.search);
        }
    }, []);

    return (
        <div className="flex flex-col justify-between h-screen">
            <Header />
            <main className="grow overflow-hidden">
                <Playground />
            </main>
            <Footer />
        </div>
    );
};

export default App;
