import { TOptions } from '@/types';

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
                values  : [
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
                values  : [
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
                values  : [
                    'wrap',
                    'nowrap',
                    'wrap-reverse',
                ],
            },
            {
                slug    : 'justify-content',
                type    : 'select',
                disabled: false,
                values  : [
                    'center',
                    'flex-start',
                    'flex-end',
                    'space-between',
                    'space-around',
                    'space-evenly',
                ],
            },
            {
                slug    : 'align-items',
                type    : 'select',
                disabled: false,
                values  : [
                    'center',
                    'stretch',
                    'flex-start',
                    'flex-end',
                    'baseline',
                ],
            },
            {
                slug    : 'align-content',
                type    : 'select',
                disabled: false,
                values  : [
                    'center',
                    'stretch',
                    'flex-start',
                    'flex-end',
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
        ],
    },
    {
        group_slug: 'box',
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
                input_type: 'number',
            },
            {
                slug    : 'flex-basis',
                type    : 'select',
                disabled: false,
                values  : [
                    'auto',
                    'content',
                    'fit-content',
                    'max-content',
                    'min-content',
                ],
            },
            {
                slug    : 'align-self',
                type    : 'select',
                disabled: false,
                values  : [
                    'auto',
                    'stretch',
                    'flex-start',
                    'flex-end',
                    'center',
                    'baseline',
                ],
            },
        ],
    },
];
