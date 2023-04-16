import { useDispatch, useSelector } from 'react-redux';
import { setStyle } from '@/stores/options';

type TOption = {
    value: string;
    label: string;
};

type TProps = {
    options: TOption[];
    disabled?: boolean;
    slug: string;
    group: 'item' | 'container';
}

const kebabToCamelCase = (str: string): string => str.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());


const Select = ({ options, disabled, slug, group }: TProps) => {
    const value = useSelector((state: any) => state.options[group][slug]);
    const dispatch = useDispatch();

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setStyle({ group: group, slug: kebabToCamelCase(slug), value: e.target.value }));
    };

    return (
        <select
            className="text-sm font-normal rounded border-2 text-black h-auto bg-white hover:border-blue-400 disabled:bg-gray-100 disabled:text-gray-500 transition-all focus:outline-none p-2"
            disabled={disabled || !options.length}
            onChange={onChange}
        >
            {options.map((option, index) => {
                return (
                    <option
                        key={index}
                        value={option.value}
                        selected={option.value === value}
                    >
                        {option.label}
                    </option>
                );
            })}
        </select>
    );
};

export default Select;
