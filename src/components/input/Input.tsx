type TInputProp = {
    type?: string;
    disabled?: boolean;
    placeholder?: string;
};

const Input = ({ type = 'text', disabled, placeholder }: TInputProp) => {
    return (
        <input
            type={type}
            disabled={disabled}
            placeholder={placeholder}
            className="text-sm font-normal rounded border-2 text-black h-auto bg-white hover:border-blue-400 disabled:bg-gray-100 disabled:text-gray-500 transition-all focus:outline-none p-2"
        />
    );
};

export default Input;
