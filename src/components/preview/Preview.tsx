import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { Locale } from '../Locale';

const Preview = ({ ...props }) => {
    const boxes: string[] = ['A', 'B', 'C', 'D', 'E'];
    const base_classes: string = 'border-2 border-cyan-500 bg-cyan-200 border-dashed rounded-md flex items-center justify-center font-bold w-40 h-20 m-2';
    const options = useSelector((state: any) => state.options);

    return (
        <section className="h-full flex flex-grow items-center justify-center bg-gray-100 p-4 overflow-x-auto">
            <div
                className={classNames('border-4 border-dashed border-amber-300 p-8 relative rounded-md')}
                style={options}
            >
                <span className="font-handwriting absolute left-0 -top-10 text-2xl">
                    <Locale alias="options.container_title" />
                </span>
                {boxes.map((box, index) => {
                    return (
                        <div
                            key={index}
                            className={classNames(base_classes)}
                        >
                            {box}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Preview;
