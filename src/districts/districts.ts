import { District } from '@speechanddebate/types';
import { fetchBase, defaultFetchOptions } from '../base.js';

export const getDistrict = (districtId: number) =>
    fetchBase(`districts/${districtId.toString()}`);

export const getDistricts = (realm = 'hs', sort = 'name', full = false) =>
    fetchBase<District[]>(
        `districts?realm=${realm}&sort=${sort.toString()}&full=${full.toString()}`,
    );

export const patchDistrict = (
    districtId: number,
    updates: Record<string, unknown>[],
) =>
    fetchBase(
        `districts/${districtId.toString()}`,
        { ...defaultFetchOptions, method: 'PATCH' },
        updates,
    );
