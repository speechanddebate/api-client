import { assert } from 'chai';

import { campus } from '../../testData.js';
import { getCampus } from './campus.js';

describe('getCampus', () => {
    it('should fetch successfully', async () => {
        const response = await getCampus();
        assert.deepEqual(response, campus, 'Response matches');
    });
});
