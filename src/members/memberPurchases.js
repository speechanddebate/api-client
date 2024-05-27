import { fetchBase } from '../base';
import { userId } from '../../helpers/auth';

// eslint-disable-next-line import/prefer-default-export
export const getMemberPurchases = (memberId) => fetchBase(`members/${memberId || userId}/purchases`);
