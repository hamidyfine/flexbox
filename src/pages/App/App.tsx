import Header from '@/components/header';
import Footer from '@/components/footer';
import Playground from '@/components/playground';
import './App.scss';

const App = () => {
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
