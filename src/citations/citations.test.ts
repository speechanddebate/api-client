import { assert } from 'chai';
import { citation, citationCategory, success } from '../../testData.js';
import {
    getCitations,
    postCitation,
    putCitations,
    patchCitation,
    deleteCitation,
    getCitationCategories,
} from './citations.js';

describe('getCitations', () => {
    it('should fetch successfully', async () => {
        const response = await getCitations('test');
        assert.deepEqual(response, [citation], 'Response matches');
    });
});

describe('postCitation', () => {
    it('should fetch successfully', async () => {
        const response = await postCitation(1, 1, 'Test', '2017-08-01');
        assert.deepEqual(response, success, 'Response matches');
    });
});

describe('putCitations', () => {
    it('should fetch successfully', async () => {
        const response = await putCitations([citation]);
        assert.deepEqual(response, success, 'Response matches');
    });
});

describe('patchCitation', () => {
    it('should fetch successfully', async () => {
        const response = await patchCitation(1, [{ status: 'test' }]);
        assert.deepEqual(response, success, 'Response matches');
    });
});

describe('deleteCitation', () => {
    it('should fetch successfully', async () => {
        const response = await deleteCitation(1, 1);
        assert.deepEqual(response, success, 'Response matches');
    });
});

describe('getCitationCategories', () => {
    it('should fetch successfully', async () => {
        const response = await getCitationCategories();
        assert.deepEqual(response, [citationCategory], 'Response matches');
    });
});
