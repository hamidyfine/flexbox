type TProps = {
    className?: string;
    onClick?: () => void;
    text: string | JSX.Element;
    type?: 'primary' | 'secondary';
};

const Button = ({ className, onClick, text, type = 'primary' }: TProps) => {
    const primary = 'text-white bg-blue-600 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-blue-600 focus:ring-opacity-40';
    const secondary = 'text-blue-600 bg-gray-100 hover:bg-blue-50 focus:bg-blue-50 font-semibold focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-blue-600 focus:ring-opacity-40';

    return (
        <button
            className={`text-sm cursor-pointer rounded px-4 py-2 border-none ${className} ${type === 'primary' ? primary : secondary}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
