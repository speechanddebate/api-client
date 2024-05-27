/* eslint-disable import/prefer-default-export */
import { fetchBase, defaultFetchOptions } from '../base';

export const getDistrictLeaders = (districtId) => fetchBase(`districts/${districtId}/leaders`);

export const postDistrictLeader = (districtId, leaders) => fetchBase(
    `districts/${districtId}/leaders`,
    { ...defaultFetchOptions, method: 'POST' },
    leaders
);

export const patchDistrictLeader = (districtId, personId, updates) => fetchBase(
    `districts/${districtId}/leaders?person_id=${personId}`,
    { ...defaultFetchOptions, method: 'PATCH' },
    updates
);

export const deleteDistrictLeader = (districtId, personId) => fetchBase(
    `districts/${districtId}/leaders?person_id=${personId}`,
    { ...defaultFetchOptions, method: 'DELETE' }
);
