import { fetchBase, defaultFetchOptions } from '../base';
import { userId } from '../../helpers/auth';

export const getMembers = (personId, first, last, stateCode) => fetchBase(
    personId ? `members?id=${personId}` : `members?first=${first}&last=${last}&state=${stateCode}`
);

export const getMember = (personId) => fetchBase(`members/${personId}`);

export const putMember = (userProfile) => fetchBase(
    `members/${userProfile.person_id || userId}`,
    { ...defaultFetchOptions, method: 'PUT' },
    userProfile
);

export const patchMember = (personId, updates, auth) => {
    let options = defaultFetchOptions;

    // auth parameter allows impersonating a user
    if (auth) {
        options = {
            ...defaultFetchOptions,
            method: 'PATCH',
            headers: {
                Authorization: `basic ${auth}`,
                'Content-Type': 'application/json',
            },
        };
    }
    return fetchBase(`members/${personId}`, { ...options, method: 'PATCH' }, updates);
};
