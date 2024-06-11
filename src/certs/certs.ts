import { MemberCert } from '@speechanddebate/types';
import { fetchBaseRaw } from '../base.js';

// eslint-disable-next-line import/prefer-default-export
export const postMemberCerts = (members: MemberCert[]) =>
    fetchBaseRaw<MemberCert[]>(`certs/membership`, { method: 'POST' }, members);
