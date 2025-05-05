interface ClassNamesDictionary {
    [index: string]: boolean | undefined | null;
}

export type ClassName = string | number | ClassNamesDictionary | boolean | undefined | null;

export const cc = (...classNames: ClassName[]): string => {
    return classNames.join(' ')
}
