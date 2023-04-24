/* eslint-disable max-len */
import { useSelector, useDispatch } from 'react-redux';
import { Locale, localize } from '../Locale';
import Button from '../ui/button';
import { addNewBox, setActiveBoxId } from '@/stores/box.store';
import Box from './Box';
import { TBox } from '@/types';

const Preview = () => {
    const dispatch = useDispatch();
    const boxes: TBox[] = useSelector((state: any) => state.box.items);
    const active_box_id = useSelector((state: any) => state.box.active_box_id);
    const container_styles = useSelector((state: any) => state.container);

    const addBox = () => {
        const lastLetter = boxes.length ? boxes[boxes.length - 1].label : null;
        const has_z = boxes.find((box) => box.label === 'Z');
        let nextLetter: string;

        if (!lastLetter) {
            nextLetter = 'A';
        } else if (has_z) {
            const randomLetters = Math.random().toString(36).replace(/[^a-zA-Z]/g, '').toUpperCase().slice(0, 2);
            nextLetter = randomLetters;
        } else {
            nextLetter = String.fromCharCode(lastLetter.charCodeAt(0) + 1);
        }

        const box: TBox = {
            label  : nextLetter,
            id     : String(boxes.length + 1),
            options: {
                order     : 0,
                flexGrow  : 0,
                flexShrink: 0,
                flexBasis : 'auto',
                alignSelf : 'auto',
            },
        };
        dispatch(addNewBox(box));
    };

    const onBoxClick = (box: TBox) => () => {
        if (box.id !== active_box_id) {
            dispatch(setActiveBoxId(box.id));
        } else {
            dispatch(setActiveBoxId(null));
        }
    };

    return (
        <section className="h-full flex flex-grow basis-3/4 items-center justify-center bg-gray-100 p-4 max-h-screen overflow-x-auto relative">
            <div
                style={{ maxHeight: 'calc(100vh - 73px - 33px)', minHeight: '400px' }}
                className="flex flex-col w-full p-8"
            >
                <div className="flex items-center justify-between mb-2">
                    <h3 className="font-handwriting text-2xl">
                        <Locale alias="options.container_box_title" />
                    </h3>

                    <Button
                        text={localize('playground.add_box', { ns: 'buttons' }) as string}
                        onClick={() => addBox()}
                    />
                </div>
                <div
                    className="border-4 border-solid p-8 relative rounded-md flex-grow bg-orange-400 border-orange-500"
                    style={container_styles}
                >
                    {boxes.map(box => {
                        return (
                            <Box
                                key={box.id}
                                box={box}
                                className={`border-2 border-solid rounded-md flex items-center justify-center font-bold w-40 h-20 m-2 cursor-pointer hover:bg-blue-300 hover:border-blue-900 hover:text-black ${box.id === active_box_id ? 'border-blue-900 bg-blue-300 text-black' : 'border-cyan-900 bg-cyan-600 text-white'}`}
                                style={box.options}
                                onClick={onBoxClick(box)}
                            />
                        );
                    })}
                </div>
            </div>

            <a
                href="https://www.buymeacoffee.com/hamidyfine"
                target="_blank"
                rel="noreferrer"
                className="fixed bottom-10 right-6 rounded-md"
            >
                <img
                    src="/bmc-button.png"
                    alt="Buy me a coffee"
                    className="w-40 cursor-pointer block"
                />
            </a>
        </section>
    );
};

export default Preview;
