import { Locale, localize } from '@/components/Locale';
import appPackageInfo from '../../../package.json';
import Button from '@/components/button';
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
                    className="text-2xl mr-4 hover:bg-zinc-200 rounded-full p-2 transition-all"
                    href="https://github.com/hamidyfine/flexbox"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Github theme="outline" />
                </a>
                <Button
                    text={localize('playground.reset', { ns: 'buttons' }) as string}
                    type="primary"
                />
            </div>
        </header>
    );
};

export default Header;
