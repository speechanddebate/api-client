import { fetchBase, defaultFetchOptions } from '../base';

export const getSchoolMeta = (schoolId, tag) => fetchBase(`schools/${schoolId}/meta?tag=${tag || ''}`);

export const postSchoolMeta = (schoolId, meta) => fetchBase(
    `schools/${schoolId}/meta`,
    { ...defaultFetchOptions, method: 'POST', maxRetries: 0 },
    meta,
);

export const deleteSchoolMeta = (schoolId, metaId) => fetchBase(
    `schools/${schoolId}/meta/${metaId}`,
    { ...defaultFetchOptions, method: 'DELETE' }
);
