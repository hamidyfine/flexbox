import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { Locale, localize } from '../Locale';
import React from 'react';
import Button from '../button';

type TBox = {
    className: string;
    style: object;
    box: string;
};

const Box = ({ className, style, box }: TBox) => {
    return (
        <div
            className={className}
            style={style}
        >
            {box}
        </div>
    );
};

const Preview = ({ ...props }) => {
    const [boxes, setBoxes] = React.useState(['A', 'B', 'C']);
    const base_classes: string = 'border-2 border-cyan-500 bg-cyan-200 border-dashed rounded-md flex items-center justify-center font-bold w-40 h-20 m-2';
    const options = useSelector((state: any) => state.options);

    const addBox = () => {
        const lastLetter = boxes[boxes.length - 1];
        let nextLetter: string;
  
        if (boxes.includes('Z')) {
            const randomLetters = Math.random().toString(36).replace(/[^a-zA-Z]/g, '').toUpperCase().slice(0, 2);
            nextLetter = randomLetters;
        } else {
            nextLetter = String.fromCharCode(lastLetter.charCodeAt(0) + 1);
        }
        setBoxes([...boxes, nextLetter]);
    };

    return (
        <section className="h-full flex flex-grow basis-3/4 items-center justify-center bg-gray-100 p-4 max-h-screen overflow-x-auto">
            <div className="flex flex-col w-full min-h-2/5 max-h-full overflow-y-auto p-4">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="font-handwriting text-2xl">
                        <Locale alias="options.container_title" />
                    </h3>

                    <Button
                        text={localize('playground.add_box', { ns: 'buttons' }) as string}
                        onClick={addBox}
                    />
                </div>
                <div
                    className={classNames('border-4 border-dashed border-amber-300 p-8 relative rounded-md flex-grow')}
                    style={options.container}
                >
                    {boxes.map((box, index) => {
                        return (
                            <Box
                                key={index}
                                box={box}
                                className={classNames(base_classes)}
                                style={options.item}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Preview;
