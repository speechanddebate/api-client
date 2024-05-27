import { fetchBase, defaultFetchOptions } from '../base';

export const postMemberHonor = (personId, honor) => {
    return fetchBase(
        `members/${personId}/honors`,
        { ...defaultFetchOptions, method: 'POST', maxRetries: 0 },
        honor
    );
};

export const deleteMemberHonor = (personId, memberHonorId) => {
    return fetchBase(
        `members/${personId}/honors/${memberHonorId}`,
        { ...defaultFetchOptions, method: 'DELETE' }
    );
};
