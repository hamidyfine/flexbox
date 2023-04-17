import { TBox } from '@/types';

type TBoxProps = {
    className: string;
    style: object;
    box: TBox;
    onClick: () => void;
};

const Box = ({ className, style, box, onClick }: TBoxProps) => {
    return (
        <div
            className={className}
            style={style}
            onClick={onClick}
        >
            {box.label}
        </div>
    );
};

export default Box;
