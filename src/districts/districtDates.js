/* eslint-disable import/prefer-default-export */
import { fetchBase } from '../base';

export const getDistrictDates = (districtId) => fetchBase(`districts/dates?district_id=${districtId}`);
