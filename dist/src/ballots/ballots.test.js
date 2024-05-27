import { assert } from 'chai';
import { success, ballots, ballot, ballotResults, votes, } from '../../testData.js';
import { getBallots, getBallot, getBallotResults, getBallotVotes, postBallot, putBallot, postVote, } from './ballots.js';
describe('getBallots', () => {
    it('should fetch successfully', async () => {
        const response = await getBallots(1);
        assert.deepEqual(response, ballots, 'Response matches');
    });
});
describe('getBallot', () => {
    it('should fetch successfully', async () => {
        const response = await getBallot(1, 1);
        assert.deepEqual(response, ballot, 'Response matches');
    });
});
describe('getBallotResults', () => {
    it('should fetch successfully', async () => {
        const response = await getBallotResults(1);
        assert.deepEqual(response, ballotResults, 'Response matches');
    });
});
describe('getBallotVotes', () => {
    it('should fetch successfully', async () => {
        const response = await getBallotVotes(1);
        assert.deepEqual(response, votes, 'Response matches');
    });
});
describe('postBallot', () => {
    it('should fetch successfully', async () => {
        const response = await postBallot(ballot);
        assert.deepEqual(response, success, 'Response matches');
    });
});
describe('putBallot', () => {
    it('should fetch successfully', async () => {
        const response = await putBallot(ballot);
        assert.deepEqual(response, success, 'Response matches');
    });
});
describe('postVote', () => {
    it('should fetch successfully', async () => {
        const response = await postVote(1, votes);
        assert.deepEqual(response, success, 'Response matches');
    });
});
