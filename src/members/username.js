import { fetchBase, defaultFetchOptions, anonymousFetchOptions, userId } from '../base';

export const getUsername = (username, raw) => fetchBase(
    `username?username=${encodeURIComponent(username)}`,
    { ...anonymousFetchOptions, method: 'GET', maxRetries: 0 },
    undefined,
    raw
);

export const postUsername = (personId, body) => fetchBase(
    `members/${personId}/username`,
    { ...defaultFetchOptions, method: 'POST', maxRetries: 0 },
    body
);

export const putUsername = (funcUserId = userId, body) => fetchBase(
    `members/${funcUserId}/username`,
    { ...defaultFetchOptions, method: 'PUT' },
    body
);

export const deleteUsername = (personId, username) => fetchBase(
    `members/${personId}/username?username=${encodeURIComponent(username)}`,
    { ...defaultFetchOptions, method: 'DELETE', maxRetries: 0 },
);

export const putPassword = (personId, body) => fetchBase(
    `members/${personId}/password`,
    { ...defaultFetchOptions, method: 'PUT' },
    body
);
