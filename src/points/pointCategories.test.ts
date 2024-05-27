import { assert } from 'chai';
import { getPointCategories, getHonors } from './pointCategories.js';
import { pointCategories, honors } from '../../testData.js';

describe('getPointCategories', () => {
    it('should fetch successfully', async () => {
        const response = await getPointCategories('hs', true);
        assert.deepEqual(response, pointCategories, 'Response matches');
    });
});

describe('getHonors', () => {
    it('should fetch successfully', async () => {
        const response = await getHonors();
        assert.deepEqual(response, honors, 'Response matches');
    });
});
