import { fetchBase, defaultFetchOptions } from '../base';

export const getGrants = () => fetchBase(`grants`);

export const getSchoolGrants = (schoolId) => fetchBase(`schools/${schoolId}/grants`);

export const postSchoolGrant = (schoolId, grantId, note) => fetchBase(
    `schools/${schoolId}/grants`,
    { ...defaultFetchOptions, method: 'POST', maxRetries: 0 },
    { id: grantId, note }
);

export const patchSchoolGrant = (schoolId, schoolGrantId, updates) => fetchBase(
    `schools/${schoolId}/grants/${schoolGrantId}`,
    { ...defaultFetchOptions, method: 'PATCH' },
    updates
);

export const deleteSchoolGrant = (schoolId, schoolGrantId) => fetchBase(
    `schools/${schoolId}/grants/${schoolGrantId}`,
    { ...defaultFetchOptions, method: 'DELETE' }
);

export const patchSchoolGrantProduct = (schoolId, schoolGrantProductId, updates) => fetchBase(
    `schools/${schoolId}/grants/products/${schoolGrantProductId}`,
    { ...defaultFetchOptions, method: 'PATCH' },
    updates
);

export const deleteSchoolGrantProduct = (schoolId, schoolGrantProductId) => fetchBase(
    `schools/${schoolId}/grants/products/${schoolGrantProductId}`,
    { ...defaultFetchOptions, method: 'DELETE' }
);
