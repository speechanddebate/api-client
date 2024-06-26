/* istanbul disable file */
import { afterAll, afterEach, beforeAll } from 'vitest';
import { setupServer } from 'msw/node';
import { HttpResponse, http, RequestHandler } from 'msw';
import { initializeAPIClient } from './src/base.js';
import {
    status,
    success,
    districts,
    pointCategories,
    honors,
    studentRankings,
    schoolRankings,
    ballot,
    ballotResults,
    campus,
    citation,
    citationCategory,
    vote,
} from './testData.js';

const url = 'http://localhost:10010/v2';

initializeAPIClient({ API_URL: url, RETRY_DELAY: 10 });

export const handlers: RequestHandler[] = [
    http.get(`${url}/status`, () => HttpResponse.json(status)),
    http.get(`${url}/districts`, () => HttpResponse.json(districts)),
    http.get(`${url}/points/categories`, () =>
        HttpResponse.json(pointCategories),
    ),
    http.get(`${url}/rankings/student`, () =>
        HttpResponse.json(studentRankings),
    ),
    http.get(`${url}/rankings/school`, () => HttpResponse.json(schoolRankings)),
    http.get(`${url}/honors`, () => HttpResponse.json(honors)),

    http.get(`${url}/ballots`, () => HttpResponse.json([ballot])),
    http.post(`${url}/ballots`, () => HttpResponse.json(success)),
    http.get(`${url}/ballots/:ballotId`, () => HttpResponse.json(ballot)),
    http.put(`${url}/ballots/:ballotId`, () => HttpResponse.json(success)),
    http.get(`${url}/ballots/:ballotId/results`, () =>
        HttpResponse.json(ballotResults),
    ),
    http.get(`${url}/ballots/:ballotId/votes`, () => HttpResponse.json([vote])),
    http.post(`${url}/ballots/:ballotId/votes`, () =>
        HttpResponse.json(success),
    ),
    http.get(`${url}/campus`, () => HttpResponse.json(campus)),
    http.post(`${url}/certs/membership`, () => HttpResponse.text('Success')),

    http.get(`${url}/citations`, () => HttpResponse.json([citation])),
    http.post(`${url}/members/:memberId/citations`, () =>
        HttpResponse.json(success),
    ),
    http.put(`${url}/citations`, () => HttpResponse.json(success)),
    http.patch(`${url}/citations/:citationId`, () =>
        HttpResponse.json(success),
    ),
    http.delete(`${url}/members/:memberId/citations/:citationId`, () =>
        HttpResponse.json(success),
    ),
    http.get(`${url}/citations/categories`, () =>
        HttpResponse.json([citationCategory]),
    ),
];

export const server = setupServer(...handlers);

// Start server before all tests
beforeAll(() => {
    server.listen({ onUnhandledRequest: 'error' });
});

//  Close server after all tests
afterAll(() => {
    server.close();
});

// Reset handlers after each test `important for test isolation`
afterEach(() => {
    server.resetHandlers();
});
