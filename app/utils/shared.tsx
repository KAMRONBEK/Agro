import AsyncStorage from '@react-native-community/async-storage';
import {Locale, UNAUTHENTICATED, USER_TOKEN} from 'const';
import localization from 'locales/i18n';
import moment from 'moment';
import {IMessageError} from 'types';

export const setAlpha = (rgbaHex: string, a: number): string => {
    const hexColor = rgbaHex.split('#')[1];
    const r = parseInt(hexColor.slice(0, 2), 16);
    const g = parseInt(hexColor.slice(2, 4), 16);
    const b = parseInt(hexColor.slice(4, 6), 16);
    return `rgba(${r},${g},${b},${a})`;
};

export const compose = <T extends {}>(...funcs: any[]) => {
    const newCompose = funcs.reduceRight((acc, next) => (...args: any[]) => next(acc(...args)));
    return (...args: any[]): T => newCompose(...args);
};

export const isTokenExist = async (): Promise<string> => {
    return await AsyncStorage.getItem(USER_TOKEN);
};

export const isDataNull = (data: any): boolean => {
    return data === null;
};

export function getFormatedDate(date: Date, format: string) {
    return moment(date).format(format);
}

export async function setLocale(locale: Locale) {
    localization.setLanguage(locale);
    AsyncStorage.setItem('locale', locale);
}

export function formatedMask(mask: string): string {
    return mask?.replace(/\[(\d+)\]/g, function (m, p1) {
            let replace = '';

            for (var i = 0; i < p1.length; i++) {
                replace += '9';
            }

            return '[' + replace + ']'
        }
    )
        .split('{')
        .join('[')
        .split('}')
        .join(']')
        .split('#')
        .join('-');
}

export function formatedMaxLength(mask: string): number {
    return mask?.split('[')
        .join('')
        .split(']')
        .join('')
        .split('{')
        .join('')
        .split('}')
        .join('')
        .length
}

export function formatedPureValue(value: string): string {
    return value?.split('+').reduce((prev, cur) => prev + cur);
}

export function clearSpaces(value: string): string {
    return value.split(' ').join('');
}

export function isUnauthenticated(error: IMessageError): boolean {
    return error?.message === UNAUTHENTICATED;
}
