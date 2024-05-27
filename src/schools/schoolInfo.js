import { fetchBase, defaultFetchOptions } from '../base';

export const getSchoolInfo = (schoolId) => fetchBase(`schools/${schoolId}`);

export const patchSchool = (schoolId, updates) => fetchBase(
    `schools/${schoolId}`,
    { ...defaultFetchOptions, method: 'PATCH' },
    updates
);

export const putSchool = (school) => fetchBase(
    `schools/${school.school_id}`,
    { ...defaultFetchOptions, method: 'PUT' },
    school
);
