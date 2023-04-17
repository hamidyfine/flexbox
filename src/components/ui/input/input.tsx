type TInputProp = {
    type?: string;
    disabled?: boolean;
    placeholder?: string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type = 'text', disabled, placeholder, value, onChange }: TInputProp) => {
    return (
        <input
            className="text-sm font-normal rounded border-2 text-black h-auto bg-white hover:border-blue-400 disabled:bg-gray-100 disabled:text-gray-500 transition-all focus:outline-none p-2"
            type={type}
            disabled={disabled}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;
