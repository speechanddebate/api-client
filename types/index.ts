export interface District {
    id: number;
    name: string;
}

export interface Category {
    id: number;
    description: string;
    type: string;
    hs: boolean;
    ms: boolean;
    ranked: boolean;
}

export interface Honor {
    honor_id: number;
    tag: string;
    description: string;
    type: string;
}

export interface Ranking {
    name?: string;
    school?: string;
    state?: string;
    strength?: number;
    points?: number;
}

export interface FetchOptions extends RequestInit {
    maxRetries?: number;
    retryDelay?: number;
    // method?: string;
    // credentials?: string;
    // headers?: Record<string, string>;
    // body?: string | Record<string, unknown> | Record<string, unknown>[];
}

export interface ResponseError extends Error {
    statusCode?: number;
}

export interface Ballot {
    id: number;
    type: string;
    description: string;
    instructions: string;
    realm: string;
    start: string;
    end: string;
    created_at?: string;
    created_by_id?: number;
    votes?: number;
    voters_person?: number;
    voters_school?: number;
}

export interface Vote {
    ballot_option_id: number;
    vote: number;
    school_id?: number;
}

export interface BallotResult {
    ballot_option_id: number;
    votes: number;
}

export default null;
