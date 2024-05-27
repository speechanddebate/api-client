import { fetchBase } from '../base';
import { userId } from '../../helpers/auth';

// eslint-disable-next-line import/prefer-default-export
export const getMemberDistrictLeadership = (memberId) => fetchBase(`members/${memberId || userId}/leadership`);
