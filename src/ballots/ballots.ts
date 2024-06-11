import { Ballot, Vote, BallotResult } from '@speechanddebate/types';
import { JSONResponse, fetchBase } from '../base.js';

export const getBallots = (memberId: number) => {
    const URL = memberId
        ? `ballots?status=open&member_id=${memberId.toString()}`
        : `ballots?status=all`;
    return fetchBase<Ballot[]>(URL);
};

export const getBallot = (ballotId: number, schoolId?: number) => {
    // School ID is ignored for everything except district ballots
    const URL = schoolId
        ? `ballots/${ballotId.toString()}?school_id=${schoolId.toString()}`
        : `ballots/${ballotId.toString()}`;
    return fetchBase<Ballot>(URL);
};

export const getBallotResults = (ballotId: number) =>
    fetchBase<BallotResult[]>(`ballots/${ballotId.toString()}/results`);

export const getBallotVotes = (ballotId: number) =>
    fetchBase<Vote[]>(`ballots/${ballotId.toString()}/votes`);

export const postBallot = (ballot: Ballot) =>
    fetchBase<JSONResponse, Ballot>(`ballots`, { method: 'POST' }, ballot);

export const putBallot = (ballot: Ballot) =>
    fetchBase<JSONResponse, Ballot>(
        `ballots/${ballot.id.toString()}`,
        { method: 'PUT' },
        ballot,
    );

export const postVote = (ballotId: number, votes: Vote[]) =>
    fetchBase<JSONResponse, Vote[]>(
        `ballots/${ballotId.toString()}/votes`,
        { method: 'POST' },
        votes,
    );
