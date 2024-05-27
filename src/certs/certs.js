import { fetchBase, defaultFetchOptions } from '../base';

// eslint-disable-next-line import/prefer-default-export
export const postMemberCerts = (members) => fetchBase(
    `certs/membership`,
    { ...defaultFetchOptions, method: 'POST', maxRetries: 0 },
    members,
    true,
);
