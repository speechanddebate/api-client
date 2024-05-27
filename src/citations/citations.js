import { fetchBase, defaultFetchOptions, anonymousFetchOptions } from '../base';

export const getCitations = (status) => fetchBase(`citations?status=${status}`);

export const postCitation = (memberId, categoryId, description, date) => fetchBase(
    `members/${memberId}/citations`,
    { ...defaultFetchOptions, method: 'POST', maxRetries: 0 },
    { category_id: categoryId, description, date }
);

export const putCitations = (citations) => fetchBase(
    `citations`,
    { ...defaultFetchOptions, method: 'PUT' },
    citations
);

export const patchCitation = (citationId, updates) => fetchBase(
    `citations/${citationId}`,
    { ...defaultFetchOptions, method: 'PATCH' },
    updates
);

export const deleteCitation = (memberId, citationId) => fetchBase(
    `members/${memberId}/citations/${citationId}`,
    { ...defaultFetchOptions, method: 'DELETE' }
);

export const getCitationCategories = () => fetchBase(`citations/categories`, anonymousFetchOptions);
