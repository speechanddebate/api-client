import { fetchBase, defaultFetchOptions } from '../base';

export const getMemberInteractions = (personId) => fetchBase(`members/${personId}/interactions`);

export const postMemberInteraction = (personId, interaction) => {
    return fetchBase(
        `members/${personId}/interactions`,
        { ...defaultFetchOptions, method: 'POST', maxRetries: 0 },
        interaction,
    );
};

export const deleteMemberInteraction = (personId, interactionId) => {
    return fetchBase(
        `members/${personId}/interactions/${interactionId}`,
        { ...defaultFetchOptions, method: 'DELETE' }
    );
};
