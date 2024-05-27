/* eslint-disable import/prefer-default-export */
import { fetchBase, anonymousFetchOptions } from '../base.js';
export const getRankings = (type = 'student', district = null, stateCode = null, category = null, realm = null) => {
    let URL = `rankings/${type}?`;
    // Can only get one of state or district
    if (district) {
        URL += `district=${district.toString()}&`;
    }
    else if (stateCode) {
        URL += `state=${stateCode}&`;
    }
    // Only allow category for students and if no district selected
    if (category && type === 'student' && !district) {
        URL += `category=${category.toString()}&`;
    }
    if (realm) {
        URL += `realm=${realm}&`;
    }
    return fetchBase(URL, anonymousFetchOptions);
};
