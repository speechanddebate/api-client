/* eslint-disable import/prefer-default-export */
import { fetchBase } from '../base';
import { userId } from '../../helpers/auth';

export const getPermissions = () => fetchBase(`members/${userId}/permissions`);
