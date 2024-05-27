import { assert } from 'chai';
import nock from 'nock';

import config from '../../../config';
import { getSchoolPoints, putSchoolPoints, postPoints } from './schoolPoints';

describe('getSchoolPoints', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
        .get(/schools/)
        .reply(200, JSON.stringify([{ test: 'test' }]));

        getSchoolPoints(1, null, false).then((response) => {
            assert.deepEqual(response, [{ test: 'test' }], 'Response matches');
            assert.isOk(scope.isDone(), 'One request made');
            nock.cleanAll();
            done();
        }).catch((err) => {
            console.log(err);
            done(err);
        });
    });

    it('should retry on failure', () => {
        const scope = nock(new RegExp(config.API_HOST))
        .get(/schools/)
        .times(4)
        .reply(500, JSON.stringify({ message: 'Server Error' }));

        return getSchoolPoints(1, null, false).then((response) => {
            assert.isNull(response, 'Response is null');
        }).catch((err) => {
            assert.isNotNull(err, 'Throws an error');
            assert.isOk(scope.isDone(), 'Four requests made');
            nock.cleanAll();
        });
    });
});

describe('putSchoolPoints', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
        .put(/schools/)
        .reply(202, JSON.stringify({ test: 'test' }));

        putSchoolPoints(1, []).then((response) => {
            assert.deepEqual(response, { test: 'test' }, 'Response matches');
            assert.isOk(scope.isDone(), 'One request made');
            nock.cleanAll();
            done();
        }).catch((err) => {
            console.log(err);
            done(err);
        });
    });

    it('should not retry on failure', () => {
        const scope = nock(new RegExp(config.API_HOST))
        .put(/schools/)
        .reply(500, JSON.stringify({ message: 'Server Error' }));

        return putSchoolPoints(1, []).then((response) => {
            assert.isNull(response, 'Response is null');
        }).catch((err) => {
            assert.isNotNull(err, 'Throws an error');
            assert.isOk(scope.isDone(), 'One request made');
            nock.cleanAll();
        });
    });
});

describe('postPoints', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
        .post(/points/)
        .reply(201, JSON.stringify({ test: 'test' }));

        postPoints(1, {}, []).then((response) => {
            assert.deepEqual(response, { test: 'test' }, 'Response matches');
            assert.isOk(scope.isDone(), 'One request made');
            nock.cleanAll();
            done();
        }).catch((err) => {
            console.log(err);
            done(err);
        });
    });

    it('should not retry on failure', () => {
        const scope = nock(new RegExp(config.API_HOST))
        .post(/points/)
        .reply(500, JSON.stringify({ message: 'Server Error' }));

        return postPoints(1, {}, []).then((response) => {
            assert.isNull(response, 'Response is null');
        }).catch((err) => {
            assert.isNotNull(err, 'Throws an error');
            assert.isOk(scope.isDone(), 'One request made');
            nock.cleanAll();
        });
    });
});
