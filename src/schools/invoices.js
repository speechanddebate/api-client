import { fetchBase, defaultFetchOptions } from '../base';

export const getBillingPortal = (schoolId) => fetchBase(`schools/${schoolId}/portal`);

export const postInvoice = (schoolId, items) => fetchBase(
    `invoices`,
    { ...defaultFetchOptions, method: 'POST', maxRetries: 0 },
    { school_id: parseInt(schoolId), items }
);
