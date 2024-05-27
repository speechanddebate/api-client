/* eslint-disable import/prefer-default-export */
import { fetchBase } from '../base';

export const getDistrictSchools = (districtId) => fetchBase(`districts/${districtId}/schools`);
