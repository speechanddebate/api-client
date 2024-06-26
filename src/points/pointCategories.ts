import { Category, Honor } from '@speechanddebate/types';
import { fetchBase, anonymousFetchOptions } from '../base.js';

export const getPointCategories = (realm: string, ranked: boolean) => {
    let URL = `points/categories?`;
    if (realm) {
        URL += `realm=${realm}&`;
    }
    if (ranked) {
        URL += `ranked=${ranked.toString()}&`;
    }
    return fetchBase<Category[]>(URL, anonymousFetchOptions);
};

export const getHonors = (type = 'member') =>
    fetchBase<Honor[]>(`honors?type=${type}`);
