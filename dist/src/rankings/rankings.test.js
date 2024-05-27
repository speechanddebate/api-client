import { assert } from 'chai';
import { getRankings } from './rankings.js';
import { studentRankings, schoolRankings } from '../../testData.js';
describe('getRankings', () => {
    it('should fetch successfully', async () => {
        let response = await getRankings('student', 1);
        assert.deepEqual(response, studentRankings, 'Response matches');
        response = await getRankings('school', 1);
        assert.deepEqual(response, schoolRankings, 'Response matches');
    });
});
