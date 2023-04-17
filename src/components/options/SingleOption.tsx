import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { setContainerStyle } from '@/stores/container.store';
import { setBoxStyle } from '@/stores/box.store';
import { camelToKebab, kebabToCamel } from '@/utils';
import { TBoxOptionsSlug, TContainerOptionsSlug, TGroup, TOption, TSelectOption } from '@/types';
import Select from '../ui/select';
import Input from '../ui/input';

type TSingleOption = {
    group: TGroup;
    option: TOption;
    classes?: string;
    value?: string;
};

const SingleOption = ({ group, option, classes, value }: TSingleOption) => {
    const dispatch = useDispatch();

    const options_list: TSelectOption[] = option.values?.map((val) => {
        return {
            label: val,
            value: val,
        };
    }) || [];

    const onChange = (value: string) => {
        if (group === 'container') {
            dispatch(setContainerStyle({ slug: kebabToCamel(option.slug) as TContainerOptionsSlug, value: value }));
        }
        if (group === 'box') {
            dispatch(setBoxStyle({ slug: kebabToCamel(option.slug) as TBoxOptionsSlug, value: value }));
        }
    };

    return (
        <div className={classNames('items-center grid grid-cols-2 px-3 py-2', classes)}>
            <span className="text-sm font-medium">{camelToKebab(option.slug)}</span>

            {option.type === 'select' && (
                <Select
                    disabled={option.disabled}
                    options={options_list}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
            )}
            {option.type === 'input' && (
                <Input
                    disabled={option.disabled}
                    type={option.input_type}
                    placeholder={option.placeholder}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
            )}
        </div>
    );
};

export default SingleOption;
