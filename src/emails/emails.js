/* eslint-disable import/prefer-default-export */
import { fetchBase, defaultFetchOptions } from '../base';

export const getEmmaGroups = () => fetchBase(`emma/groups`);

export const postEmmaGroup = (body) => fetchBase(
    `emma/groups`,
    { ...defaultFetchOptions, method: 'POST', maxRetries: 0 },
    body
);
