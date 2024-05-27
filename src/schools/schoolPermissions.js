import { fetchBase, defaultFetchOptions } from '../base';

export const getSchoolPermissions = (schoolId) => fetchBase(`schools/${schoolId}/permissions`);

export const postSchoolPermission = (schoolId, personId, tag) => fetchBase(
    `schools/${schoolId}/permissions`,
    { ...defaultFetchOptions, method: 'POST', maxRetries: 0 },
    { person_id: personId, tag }
);

export const deleteSchoolPermission = (schoolId, permissionId) => fetchBase(
    `schools/${schoolId}/permissions/${permissionId}`,
    { ...defaultFetchOptions, method: 'DELETE' }
);

export const patchSchoolPermissions = (schoolId, updates) => fetchBase(
    `schools/${schoolId}/permissions`,
    { ...defaultFetchOptions, method: 'PATCH' },
    updates
);
