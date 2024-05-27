import { fetchBase, defaultFetchOptions } from '../base';

export const getSchoolHonors = (schoolId) => fetchBase(`schools/${schoolId}/honors`);

export const postSchoolHonor = (schoolId, honor) => fetchBase(
    `schools/${schoolId}/honors`,
    { ...defaultFetchOptions, method: 'POST', maxRetries: 0 },
    honor
);

export const deleteSchoolHonor = (schoolId, schoolHonorId) => fetchBase(
    `schools/${schoolId}/honors/${schoolHonorId}`,
    { ...defaultFetchOptions, method: 'DELETE' }
);
