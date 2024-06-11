/* eslint-disable import/prefer-default-export */
import { Campus } from '@speechanddebate/types';
import { fetchBase } from '../base.js';

export const getCampus = () => fetchBase<Campus>(`campus`);
