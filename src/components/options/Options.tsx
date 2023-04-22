import { useDispatch, useSelector } from 'react-redux';
import { OPTIONS } from '@/config/options.config';
import { Locale } from '../Locale';
import SingleOption from './SingleOption';
import { kebabToCamel } from '@/utils';
import { removeBox } from '@/stores/box.store';
import Button from '../ui/button';
import { Delete } from '@icon-park/react';

const Options = () => {
    const dispatch = useDispatch();
    const boxes = useSelector((state: any) => state.box.items);
    const active_box_id = useSelector((state: any) => state.box.active_box_id);
    const container_style = useSelector((state: any) => state.container);

    const active_box = boxes.find((box: any) => box.id === active_box_id);

    const removeActiveBox = (id: string) => {
        dispatch(removeBox(id));
    };

    return (
        <aside className="flex flex-col basis-1/4 bg-white border-r border-gray-300 h-full w-80 overflow-y-auto p-2">
            {OPTIONS.map((group, index) => {
                return (
                    <div
                        key={index}
                        className={`rounded-md border-2 mb-2 border-${group.color}-300`}
                    >
                        <div className={`flex items-center justify-between px-3 py-2 bg-${group.color}-300`}>
                            <h3 className="font-medium text-base">
                                <Locale alias={`options.${group.group_slug}_title`} />
                            </h3>
                            {group.group_slug === 'box' && active_box?.id && (
                                <div>
                                    <Button
                                        text={<Delete theme="outline" />}
                                        type="secondary"
                                        className="mr-2"
                                        onClick={() => removeActiveBox(active_box?.id)}
                                    />
                                    <span className="border-2 rounded-md bg-cyan-800 border-cyan-900 text-white px-3 py-1 cursor-default">
                                        {active_box?.label}
                                    </span>
                                </div>
                            )}
                        </div>

                        <div>
                            {/* Container Options */}
                            {group.group_slug === 'container' && group.options.map((option, i) => {
                                return (
                                    <SingleOption
                                        key={i}
                                        group={group.group_slug}
                                        option={option}
                                        value={container_style[kebabToCamel(option.slug)]}
                                        classes={`[&:nth-child(even)]:bg-${group.color}-50`}
                                    />
                                );
                            })}

                            {/* Box Options */}
                            {group.group_slug === 'box' && !active_box?.id && (
                                <p className="block m-4 p-4 border-2 rounded-md bg-gray-50 text-sm text-center leading-relaxed">
                                    <Locale alias="options.no_box_selected" />
                                </p>
                            )}
                            {group.group_slug === 'box' && active_box?.id && group.options.map((option, i) => {
                                return (
                                    <SingleOption
                                        key={i}
                                        group={group.group_slug}
                                        option={option}
                                        value={active_box.options[kebabToCamel(option.slug)]}
                                        classes={`[&:nth-child(even)]:bg-${group.color}-50`}
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
