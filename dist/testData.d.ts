export declare const status: {
    test: string;
};
export declare const success: {
    message: string;
};
export declare const districts: {
    id: number;
    name: string;
}[];
export declare const pointCategories: {
    id: number;
    description: string;
    type: string;
    hs: boolean;
    ms: boolean;
    ranked: boolean;
}[];
export declare const honors: {
    honor_id: number;
    tag: string;
    description: string;
    type: string;
}[];
export declare const studentRankings: {
    name: string;
    state: string;
    points: number;
}[];
export declare const schoolRankings: {
    school: string;
    state: string;
    strength: number;
}[];
export declare const ballot: {
    id: number;
    type: string;
    description: string;
    instructions: string;
    realm: string;
    start: string;
    end: string;
};
export declare const ballots: {
    id: number;
    type: string;
    description: string;
    instructions: string;
    realm: string;
    start: string;
    end: string;
}[];
export declare const vote: {
    ballot_option_id: number;
    vote: number;
};
export declare const votes: {
    ballot_option_id: number;
    vote: number;
}[];
export declare const ballotResults: {
    ballot_option_id: number;
    votes: number;
}[];
declare const _default: null;
export default _default;
