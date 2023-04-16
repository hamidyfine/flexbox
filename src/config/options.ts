export type TOption = {
    slug: string,
    type: 'select' | 'input',
    input_type?: 'text' | 'number',
    placeholder?: string,
    disabled: boolean,
    options?: string[],
};

type TOptions = {
    group_slug: 'container' | 'item',
    icon: string,
    color: string,
    options: TOption[],
};

export const OPTIONS: TOptions[] = [
    {
        group_slug: 'container',
        icon      : '',
        color     : 'amber',
        options   : [
            {
                slug    : 'display',
                type    : 'select',
                disabled: true,
                options : [
                    'flex',
                    'inline-flex',
                    'block',
                    'inline-block',
                    'inline',
                ],
            },
            {
                slug    : 'flex-direction',
                type    : 'select',
                disabled: false,
                options : [
                    'row',
                    'row-reverse',
                    'column',
                    'column-reverse',
                ],
            },
            {
                slug    : 'flex-wrap',
                type    : 'select',
                disabled: false,
                options : [
                    'nowrap',
                    'wrap',
                    'wrap-reverse',
                ],
            },
            {
                slug       : 'flex-flow',
                type       : 'input',
                disabled   : true,
                input_type : 'text',
                placeholder: 'row nowrap',
            },
            {
                slug    : 'justify-content',
                type    : 'select',
                disabled: false,
                options : [
                    'flex-start',
                    'flex-end',
                    'center',
                    'space-between',
                    'space-around',
                    'space-evenly',
                ],
            },
            {
                slug    : 'align-items',
                type    : 'select',
                disabled: false,
                options : [
                    'stretch',
                    'flex-start',
                    'flex-end',
                    'center',
                    'baseline',
                ],
            },
            {
                slug    : 'align-content',
                type    : 'select',
                disabled: false,
                options : [
                    'stretch',
                    'flex-start',
                    'flex-end',
                    'center',
                    'space-between',
                    'space-around',
                ],
            },
            {
                slug       : 'row-gap',
                type       : 'input',
                disabled   : false,
                input_type : 'text',
                placeholder: '10px',
            },
            {
                slug       : 'column-gap',
                type       : 'input',
                disabled   : false,
                input_type : 'text',
                placeholder: '10px',
            },
            {
                slug       : 'gap',
                type       : 'input',
                disabled   : true,
                input_type : 'text',
                placeholder: 'row-gap column-gap'
            },
        ]
    },
    {
        group_slug: 'item',
        icon      : '',
        color     : 'cyan',
        options   : [
            {
                slug      : 'order',
                type      : 'input',
                disabled  : false,
                input_type: 'number',
            },
            {
                slug      : 'flex-grow',
                type      : 'input',
                disabled  : false,
                input_type: 'number',
            },
            {
                slug      : 'flex-shrink',
                type      : 'input',
                disabled  : false,
                input_type: 'number'
            },
            {
                slug    : 'flex-basis',
                type    : 'select',
                disabled: false,
                options : [
                    'auto',
                    'content',
                    'fit-content',
                    'max-content',
                    'min-content',
                ],
            },
            {
                slug       : 'flex',
                type       : 'input',
                disabled   : true,
                input_type : 'text',
                placeholder: 'flex-grow flex-shrink auto'
            },
            {
                slug    : 'align-self',
                type    : 'select',
                disabled: false,
                options : [
                    'auto',
                    'stretch',
                    'flex-start',
                    'flex-end',
                    'center',
                    'baseline',
                ],
            },
        ]
    }
];
