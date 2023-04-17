type CamelToKebab<T extends string, P extends string = ''> = string extends T ? string :
    T extends `${infer C0}${infer R}` ?
    CamelToKebab<R, `${P}${C0 extends Lowercase<C0> ? '' : '-'}${Lowercase<C0>}`> : P
    
export type TSelectOption = {
    label: string;
    value: string;
};

export type TOption = {
    slug: CamelToKebab<TContainerOptionsSlug> | CamelToKebab<TBoxOptionsSlug>,
    type: 'select' | 'input',
    input_type?: 'text' | 'number',
    placeholder?: string,
    disabled: boolean,
    values?: string[],
};

export type TGroup = 'container' | 'box';

export type TContainerOptionsSlug = 'display' | 'flexDirection' | 'flexWrap' | 'justifyContent' | 'alignItems' | 'alignContent' | 'rowGap' | 'columnGap';
export type TContainerOptions = Record<TContainerOptionsSlug, string>;

export type TBoxOptionsSlug = 'order' | 'flexGrow' | 'flexShrink' | 'flexBasis' | 'alignSelf';
export type TBoxOptions = Record<TBoxOptionsSlug, string>;

export type TOptions = {
    group_slug: TGroup,
    icon: string,
    color: string,
    options: TOption[],
};

export type TBox = {
    label: string;
    id: string;
    options: Record<TBoxOptionsSlug, string | number>;
};

export type TContainerAction = {
    slug: TContainerOptionsSlug;
    value: string;
};

export type TBoxAction = {
    slug: TBoxOptionsSlug;
    value: string;
};
