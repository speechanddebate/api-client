export const status = { test: 'test' };
export const success = { message: 'Success' };
export const districts = [{ id: 3, name: 'Test District' }];
export const pointCategories = [
    {
        id: 102,
        description: 'LD',
        type: 'debate',
        hs: true,
        ms: true,
        ranked: true,
    },
];
export const honors = [
    {
        honor_id: 101,
        tag: 'merit',
        description: 'Merit',
        type: 'degree',
    },
];
export const studentRankings = [
    { name: 'Test Student', state: 'IA', points: 1 },
];
export const schoolRankings = [
    { school: 'Test School', state: 'IA', strength: 1 },
];

export const ballot = {
    id: 1,
    type: 'test',
    description: 'Test Ballot',
    instructions: 'Test Instructions',
    realm: 'test',
    start: '2021-01-01',
    end: '2021-01-01',
};
export const vote = { ballot_option_id: 1, vote: 1 };
export const ballotResults = [{ ballot_option_id: 1, votes: 1 }];

export const campus = {
    school_id: 1,
    school_name: 'Test School',
    rooms: [
        {
            roomName: 'Test Room',
            json: '{}',
        },
    ],
};

export const memberCert = {
    degree_id: 1,
    name: 'Test Member',
    school: 'Test School',
    date: '2021-01-01',
};

export const citation = {
    id: 1,
    person_id: 1,
    category_id: 1,
    description: 'Test Citation',
    date: '2021-01-01',
    points: 1,
    status: 'test',
};

export const citationCategory = {
    id: 1,
    description: 'Test Category',
    inactive: false,
    min: 1,
    max: 1,
};

export default null;
