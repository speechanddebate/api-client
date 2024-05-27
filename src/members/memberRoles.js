import { fetchBase, defaultFetchOptions } from '../base';
import { userId } from '../../helpers/auth';

export const getMemberRoles = (memberId) => fetchBase(`members/${memberId || userId}/roles`);

export const patchSchoolMember = (schoolId, memberId, roleId, updates) => {
    return fetchBase(
        `schools/${schoolId}/members/${memberId}/roles/${roleId}`,
        { ...defaultFetchOptions, method: 'PATCH' },
        updates
    );
};
