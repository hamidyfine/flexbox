import Preview from '../preview';
import Options from '../options';

const Playground = () => {
    return (
        <div className="flex justify-between h-full">
            <Options />
            <Preview />
        </div>
    );
};

export default Playground;
