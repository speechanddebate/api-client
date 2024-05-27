/* eslint-disable import/prefer-default-export */
import { fetchBase } from '../base';

export const getDistrictWinners = (districtId) => fetchBase(`districts/${districtId}/winners`);
