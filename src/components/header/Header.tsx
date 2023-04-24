import { Locale } from '@/components/Locale';
import appPackageInfo from '../../../package.json';
// import Button from '@/components/ui/button';
import { Github } from '@icon-park/react';

const Header = () => {
    return (
        <header className="flex items-center justify-between bg-white p-4 border-b border-stone-300">
            <h1 className="flex items-center justify-start text-2xl font-medium">
                <Locale alias='app.name' />
                <span className="ml-2 text-xs bg-zinc-700 text-white py-0.5 px-1 rounded-sm">
                    {appPackageInfo.version}
                </span>
            </h1>

            <div className="flex items-center justify-end">
                <a
                    // eslint-disable-next-line max-len
                    className="bg-green-300 hover:bg-green-500 hover:text-white focus:bg-green-50 font-normal focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-green-600 focus:ring-opacity-40 transition-all mr-4 px-4 py-2 rounded-md text-inherit"
                    href="https://itshamid.me/blog/flexbox-ultimate-guide-part-1"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Locale
                        alias='playground.learn_flexbox'
                        ns="buttons"
                    />
                </a>
                <a
                    className="text-2xl mr-4 hover:bg-zinc-200 rounded-full p-2 transition-all"
                    href="https://github.com/hamidyfine/flexbox"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Github theme="outline" />
                </a>
                {/* <Button
                    text={localize('playground.reset', { ns: 'buttons' }) as string}
                    type="primary"
                /> */}
            </div>
        </header>
    );
};

export default Header;
