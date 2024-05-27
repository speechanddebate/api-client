import { fetchBase, defaultFetchOptions } from '../base.js';
export const getDistrict = (districtId) => fetchBase(`districts/${districtId.toString()}`);
export const getDistricts = (realm = 'hs', sort = 'name', full = false) => fetchBase(`districts?realm=${realm}&sort=${sort.toString()}&full=${full.toString()}`);
export const patchDistrict = (districtId, updates) => fetchBase(`districts/${districtId.toString()}`, { ...defaultFetchOptions, method: 'PATCH' }, updates);
