import { fetchBase, defaultFetchOptions } from '../base';

export const getSchoolTags = (schoolId) => fetchBase(`schools/${schoolId}/tags`);

export const postSchoolTag = (schoolId, tag) => fetchBase(
    `schools/${schoolId}/tags`,
    { ...defaultFetchOptions, method: 'POST', maxRetries: 0 },
    tag
);

export const deleteSchoolTag = (schoolId, tagId) => fetchBase(
    `schools/${schoolId}/tags/${tagId}`,
    { ...defaultFetchOptions, method: 'DELETE' }
);
