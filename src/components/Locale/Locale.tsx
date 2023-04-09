import { Trans } from 'react-i18next';
import i18n from '@/i18n';

type TLocaleProps = {
    ns?: string;
    alias?: string;
    trans?: string;
    values?: object;
    components?: any;
};

export const localize = (string: string, values?: any) => {
    if (!string) return '';

    return i18n.t(string, { defaultValue: string, ...values });
};

export const Locale = ({ns, alias, trans, values, components}: TLocaleProps) => {
    const i18nKey = `${ns ? `${ns}:` : ''}${alias}`;
    return (
        <Trans
            i18nKey={i18nKey}
            defaults={trans}
            values={values}
            components={components}
        />
    );
};
