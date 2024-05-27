/* eslint-disable import/prefer-default-export */
import { fetchBase, defaultFetchOptions } from '../base';

export const postError = (body) => fetchBase(
    `errors`,
    { ...defaultFetchOptions, method: 'POST', maxRetries: 0 },
    body
);
