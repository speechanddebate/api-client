import { assert } from 'chai';
import { memberCert } from '../../testData.js';
import { postMemberCerts } from './certs.js';

describe('postMemberCerts', () => {
    it('should fetch successfully', async () => {
        const response = await postMemberCerts([memberCert]);
        const body = await response.text();
        assert.deepEqual(body, 'Success', 'Response matches');
    });
});
