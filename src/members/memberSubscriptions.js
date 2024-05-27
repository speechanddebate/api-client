import { fetchBase, defaultFetchOptions } from '../base';

export const getMemberSubscriptions = (personId) => fetchBase(`members/${personId}/subscriptions`);

export const postMemberSubscription = (personId, subscription) => {
    return fetchBase(
        `members/${personId}/subscriptions`,
        { ...defaultFetchOptions, method: 'POST', maxRetries: 0 },
        subscription
    );
};

export const deleteMemberSubscription = (personId, memberSubscriptionId) => {
    return fetchBase(
        `members/${personId}/subscriptions/${memberSubscriptionId}`,
        { ...defaultFetchOptions, method: 'DELETE' }
    );
};
