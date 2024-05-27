/* eslint-disable import/prefer-default-export */
import { fetchBase, anonymousFetchOptions } from '../base';

export const getTournaments = (state, start) => {
    return fetchBase(`tournaments?state=${state}&start=${start}`, anonymousFetchOptions);
};
