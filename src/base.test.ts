import { assert } from 'chai';
import { fetchBase, fetchBaseRaw } from './base.js';
import { status } from '../testData.js';

describe('fetch base', () => {
    it('should fetch successfully and return json', async () => {
        const response = await fetchBase<{ test: 'string ' }>('status');
        assert.deepEqual(response, status, 'Response matches');
    });

    it('should optionally return the raw fetch', async () => {
        const response = await fetchBaseRaw('status', undefined, undefined);
        assert.strictEqual(
            response.status,
            200,
            'Response contains a status code',
        );
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const body = await response.json();
        assert.deepEqual(body, status, 'Response matches');
    });
});
