import { Ballot, Vote, BallotResult } from '@speechanddebate/types';
import { JSONResponse } from '../base.js';
export declare const getBallots: (memberId: number) => Promise<Ballot[]>;
export declare const getBallot: (ballotId: number, schoolId?: number) => Promise<Ballot>;
export declare const getBallotResults: (ballotId: number) => Promise<BallotResult[]>;
export declare const getBallotVotes: (ballotId: number) => Promise<Vote[]>;
export declare const postBallot: (ballot: Ballot) => Promise<JSONResponse>;
export declare const putBallot: (ballot: Ballot) => Promise<JSONResponse>;
export declare const postVote: (ballotId: number, votes: Vote[]) => Promise<JSONResponse>;
