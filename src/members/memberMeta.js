import { fetchBase, defaultFetchOptions } from '../base';

export const postMemberMeta = (personId, meta) => {
    return fetchBase(
        `members/${personId}/meta`,
        { ...defaultFetchOptions, method: 'POST', maxRetries: 0 },
        meta
    );
};

export const deleteMemberMeta = (personId, tag) => {
    return fetchBase(
        `members/${personId}/meta/${tag}`,
        { ...defaultFetchOptions, method: 'DELETE' }
    );
};
