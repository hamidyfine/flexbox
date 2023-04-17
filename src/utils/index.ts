export const camelToKebab = (camelCase: string) => camelCase.replace(/[A-Z]/g, (match) => '-' + match.toLowerCase());;

export const kebabToCamel = (str: string): string => str.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
