import { fetchBase, defaultFetchOptions } from '../base';

export const getMemberTags = (personId) => fetchBase(`members/${personId}/tags`);

export const postMemberTag = (personId, tag) => {
    return fetchBase(
        `members/${personId}/tags`,
        { ...defaultFetchOptions, method: 'POST', maxRetries: 0 },
        tag,
    );
};

export const deleteMemberTag = (personId, tagId) => {
    return fetchBase(
        `members/${personId}/tags/${tagId}`,
        { ...defaultFetchOptions, method: 'DELETE' }
    );
};
