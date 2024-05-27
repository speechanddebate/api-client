import { fetchBase, defaultFetchOptions } from '../base';

export const getMemberPoints = (memberId) => fetchBase(`members/${memberId}/points`);
export const deletePoint = (pointId) => fetchBase(`points/${pointId}`, { ...defaultFetchOptions, method: 'DELETE' });
