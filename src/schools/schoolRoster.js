import { fetchBase, defaultFetchOptions } from '../base';

export const getSchoolRoster = (schoolId, current = false) => fetchBase(
    `schools/${schoolId}/members?current=${current}`
);

export const postSchoolMember = (schoolId, memberId, role, gradYear, transfer) => fetchBase(
    `schools/${schoolId}/members`,
    { ...defaultFetchOptions, method: 'POST', maxRetries: 0 },
    {
        school_id: schoolId,
        person_id: memberId,
        role: role || null,
        grad_year: gradYear || null,
        transfer,
    }
);

export const postMember = (member) => fetchBase(
    `members`,
    { ...defaultFetchOptions, method: 'POST', maxRetries: 0 },
    member
);

export const deleteSchoolMember = (schoolId, memberId, roleId) => fetchBase(
    `schools/${schoolId}/members/${memberId}/roles/${roleId}`,
    { ...defaultFetchOptions, method: 'DELETE', maxRetries: 0 },
);
