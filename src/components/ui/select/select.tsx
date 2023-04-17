import { TSelectOption } from '@/types';

type TSelectProp = {
    options: TSelectOption[];
    disabled?: boolean;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ options, disabled, onChange, value }: TSelectProp) => {
    return (
        <select
            className="text-sm font-normal rounded border-2 text-black h-auto bg-white hover:border-blue-400 disabled:bg-gray-100 disabled:text-gray-500 transition-all focus:outline-none p-2"
            disabled={disabled || !options.length}
            value={value}
            onChange={onChange}
        >
            {options.map((option, index) => {
                return (
                    <option
                        key={index}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                );
            })}
        </select>
    );
};

export default Select;
