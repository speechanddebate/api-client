import { fetchBase, anonymousFetchOptions } from '../base.js';
export const getPointCategories = (realm, ranked) => {
    let URL = `points/categories?`;
    if (realm) {
        URL += `realm=${realm}&`;
    }
    if (ranked) {
        URL += `ranked=${ranked.toString()}&`;
    }
    return fetchBase(URL, anonymousFetchOptions);
};
export const getHonors = (type = 'member') => fetchBase(`honors?type=${type}`);
