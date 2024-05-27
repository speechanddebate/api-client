/* eslint-disable import/prefer-default-export */
import { fetchBase, defaultFetchOptions, anonymousFetchOptions } from '../base';

export const getSchools = (realm = null, stateCode = null, city = null, international = false) => {
    let URL = `schools?`;
    if (realm) { URL += `realm=${realm}&`; }
    if (stateCode) { URL += `state=${stateCode}&`; }
    if (city) { URL += `city=${encodeURIComponent(city)}&`; }
    if (international) { URL += `international=true&`; }
    return fetchBase(URL, anonymousFetchOptions);
};

export const postSchool = (school) => fetchBase(
    `schools`,
    { ...defaultFetchOptions, method: 'POST', maxRetries: 0 },
    school
);

export const getCities = (international = false, stateCode = null) => {
    const URL = international ? `cities?international=true` : `cities?state=${stateCode}`;
    return fetchBase(URL, anonymousFetchOptions);
};

export const getNCESSchools = (
    realm = null,
    stateCode = null,
    city = null,
    international = false
) => {
    let URL = `nces/schools?`;
    if (realm) { URL += `realm=${realm}&`; }
    if (stateCode) { URL += `state=${stateCode}&`; }
    if (city) { URL += `city=${encodeURIComponent(city)}&`; }
    if (international) { URL += `international=true&`; }
    return fetchBase(URL, anonymousFetchOptions);
};

export const getNCESCities = (international = false, stateCode = null) => {
    const URL = international ? `nces/cities?international=true` : `nces/cities?state=${stateCode}`;
    return fetchBase(URL, anonymousFetchOptions);
};
