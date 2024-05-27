/* eslint-disable import/prefer-default-export */
import { fetchBase, defaultFetchOptions } from '../base';

export const getReport = (name, query) => {
    const URL = query ? `reports/${name}?${query}` : `reports/${name}`;
    return fetchBase(URL, { ...defaultFetchOptions, maxRetries: 0 });
};
