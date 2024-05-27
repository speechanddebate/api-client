import { fetchBase } from '../base';
import { userId } from '../../helpers/auth';

// eslint-disable-next-line import/prefer-default-export
export const getMemberAnalytics = (memberId) => fetchBase(`members/${memberId || userId}/analytics`);
