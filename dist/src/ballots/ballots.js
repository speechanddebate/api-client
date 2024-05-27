import { fetchBase } from '../base.js';
export const getBallots = (memberId) => {
    const URL = memberId
        ? `ballots?status=open&member_id=${memberId.toString()}`
        : `ballots?status=all`;
    return fetchBase(URL);
};
export const getBallot = (ballotId, schoolId) => {
    // School ID is ignored for everything except district ballots
    const URL = schoolId
        ? `ballots/${ballotId.toString()}?school_id=${schoolId.toString()}`
        : `ballots/${ballotId.toString()}`;
    return fetchBase(URL);
};
export const getBallotResults = (ballotId) => fetchBase(`ballots/${ballotId.toString()}/results`);
export const getBallotVotes = (ballotId) => fetchBase(`ballots/${ballotId.toString()}/votes`);
export const postBallot = (ballot) => fetchBase(`ballots`, { method: 'POST' }, ballot);
export const putBallot = (ballot) => fetchBase(`ballots/${ballot.id.toString()}`, { method: 'PUT' }, ballot);
export const postVote = (ballotId, votes) => fetchBase(`ballots/${ballotId.toString()}/votes`, { method: 'POST' }, votes);
