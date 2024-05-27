import { fetchBase, defaultFetchOptions } from '../base';

export const getSchoolPoints = (schoolId, status, recent) => {
    let URL = `schools/${schoolId}/points?`;
    if (status) { URL += `&status=${status}`; }
    if (recent) { URL += `&recent=true`; }
    return fetchBase(URL);
};

export const putSchoolPoints = (schoolId, entries) => fetchBase(
    `schools/${schoolId}/points`,
    { ...defaultFetchOptions, method: 'PUT', maxRetries: 0 },
    entries
);

export const postPoints = (schoolId, tourn, entries) => fetchBase(
    `points`,
    { ...defaultFetchOptions, method: 'POST', maxRetries: 0 },
    { school_id: schoolId, tourn, entries }
);
