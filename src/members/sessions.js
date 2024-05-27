/* eslint-disable import/prefer-default-export */
import { fetchBase, defaultFetchOptions } from '../base';

export const postSession = (username, password) => fetchBase(
    `sessions`,
    { ...defaultFetchOptions, method: 'POST', maxRetries: 0 },
    { username, password }
);
