import { OPTIONS, TOption } from '@/config/options';
import Select from '../select';
import Input from '../input';
import { Locale } from '../Locale';
import classNames from 'classnames';

const camelToKebab = (camelCase: string) => {
    return camelCase.replace(/[A-Z]/g, (match) => '-' + match.toLowerCase());
};


const OptionBox = ({ option, classes, group }: { option: TOption, classes?: string; group: 'item' | 'container' }) => {
    const options_values = option.options?.map((val) => {
        return {
            label: val,
            value: val,
        };
    });
    return (
        <div className={classNames('items-center grid grid-cols-2 px-3 py-2', classes)}>
            <span className="text-sm font-medium">{camelToKebab(option.slug)}</span>
            <>
                {option.type === 'select' && (
                    <Select
                        disabled={option.disabled}
                        slug={option.slug}
                        group={group}
                        options={options_values!}
                    />
                )}
                {option.type === 'input' && (
                    <Input
                        disabled={option.disabled}
                        type={option.input_type}
                        placeholder={option.placeholder}
                        slug={option.slug}
                        group={group}
                    />
                )}
            </>
        </div>
    );
};

const Options = () => {
    // const options_keys = Object.keys(OPTIONS);

    return (
        <aside className="flex flex-col bg-white border-r border-gray-300 h-full w-80 overflow-y-auto p-2">
            {OPTIONS.map((group, index) => {
                return (
                    <div
                        key={index}
                        className={classNames('rounded-md border-2 mb-2', `border-${group.color}-300`)}
                    >
                        <div className={classNames('flex items-center justify-between px-3 py-2', `bg-${group.color}-300`)}>
                            <h3 className="font-medium text-base">
                                <Locale alias={`options.${group.group_slug}_title`} />
                            </h3>
                            {group.group_slug === 'item' && (
                                <span className="border-2 rounded-md bg-cyan-800 border-cyan-900 text-white px-3 py-1 cursor-default">A</span>
                            )}
                        </div>

                        <div>
                            {group.options.map((option, i) => {
                                return (
                                    <OptionBox
                                        option={option}
                                        group={group.group_slug}
                                        key={i}
                                        classes={classNames(`[&:nth-child(even)]:bg-${group.color}-50`)}
                                    />
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </aside>
    );
};

export default Options;
