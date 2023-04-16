import { Locale } from '../Locale';

const Footer = () => {
    return (
        <footer className="bg-zinc-100 py-2 px-4 border-t border-stone-300">
            <p className="container mx-auto text-center text-xs text-gray-600">
                <Locale alias="footer" />
            </p>
        </footer>
    );
};

export default Footer;
