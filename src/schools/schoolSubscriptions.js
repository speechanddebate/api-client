import { fetchBase, defaultFetchOptions } from '../base';

export const getSchoolSubscriptions = (schoolId) => fetchBase(`schools/${schoolId}/subscriptions`);

export const postSchoolSubscription = (schoolId, subscription) => fetchBase(
    `schools/${schoolId}/subscriptions`,
    { ...defaultFetchOptions, method: 'POST', maxRetries: 0 },
    subscription
);

export const deleteSchoolSubscription = (schoolId, schoolSubscriptionId) => fetchBase(
    `schools/${schoolId}/subscriptions/${schoolSubscriptionId}`,
    { ...defaultFetchOptions, method: 'DELETE' }
);
