/* eslint-disable import/prefer-default-export */
import { fetchBase } from '../base';

export const getSearch = (query, type = 'all', limit) => fetchBase(`search?q=${encodeURIComponent(query)}&type=${type}&limit=${limit}`);
