import { useDispatch, useSelector } from 'react-redux';
import { setStyle } from '@/stores/options';
import React, { useEffect } from 'react';

type TInputProp = {
    type?: string;
    disabled?: boolean;
    placeholder?: string;
    slug: string;
    group: 'item' | 'container';
};

const kebabToCamelCase = (str: string): string => str.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());

const Input = ({ type = 'text', disabled, placeholder, slug, group }: TInputProp) => {
    const optionsValue = useSelector((state: any) => state.options);
    const [value, setValue] = React.useState(optionsValue[group][slug] || '');
    const dispatch = useDispatch();
    
    useEffect(() => {
        setValue(optionsValue[group][kebabToCamelCase(slug)]);
    }, [group, optionsValue, slug]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setStyle({ group: group, slug: kebabToCamelCase(slug), value: e.target.value }));
    };

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
