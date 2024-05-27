/* eslint-disable import/prefer-default-export */
import { fetchBase } from '../base';

export const getSchoolNFHS = (schoolId) => fetchBase(`schools/${schoolId}/nfhs`);
