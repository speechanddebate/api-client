/* eslint-disable import/prefer-default-export */
import { fetchBase } from '../base';

export const getSchoolInvoices = (schoolId) => fetchBase(`schools/${schoolId}/invoices`);
