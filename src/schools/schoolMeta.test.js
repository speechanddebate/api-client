import { assert } from 'chai';
import nock from 'nock';

import config from '../../../config';
import {
    getSchoolMeta,
    postSchoolMeta,
    deleteSchoolMeta,
} from './schoolMeta';

describe('getSchoolMeta', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
            .get(/meta/)
            .reply(200, JSON.stringify([{ test: 'test' }]));

        getSchoolMeta(1)
            .then((response) => {
                assert.deepEqual(response, [{ test: 'test' }], 'Response matches');
                assert.isOk(scope.isDone(), 'One request made');
                nock.cleanAll();
                done();
            })
            .catch((err) => {
                console.log(err);
                done(err);
            });
    });

    it('should retry on failure', () => {
        const scope = nock(new RegExp(config.API_HOST))
            .get(/meta/)
            .times(4)
            .reply(500, JSON.stringify({ message: 'Server Error' }));

        return getSchoolMeta(1)
            .then((response) => {
                assert.isNull(response, 'Response is null');
            })
            .catch((err) => {
                assert.isNotNull(err, 'Throws an error');
                assert.isOk(scope.isDone(), 'Four requests made');
                nock.cleanAll();
            });
    });
});

describe('postSchoolMeta', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
        .post(/meta/)
        .reply(201, JSON.stringify({ test: 'test' }));

        postSchoolMeta(1, { tag: 'test', value: 'test' }).then((response) => {
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
        .post(/meta/)
        .reply(500, JSON.stringify({ message: 'Server Error' }));

        return postSchoolMeta(1, { tag: 'test', value: 'test' }).then((response) => {
            assert.isNull(response, 'Response is null');
        }).catch((err) => {
            assert.isNotNull(err, 'Throws an error');
            assert.isOk(scope.isDone(), 'One request made');
            nock.cleanAll();
        });
    });
});

describe('deleteSchoolMeta', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
        .delete(/meta/)
        .reply(200, JSON.stringify({ test: 'test' }));

        deleteSchoolMeta(1, 1).then((response) => {
            assert.deepEqual(response, { test: 'test' }, 'Response matches');
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
        .delete(/meta/)
        .times(4)
        .reply(500, JSON.stringify({ message: 'Server Error' }));

        return deleteSchoolMeta(1, 1).then((response) => {
            assert.isNull(response, 'Response is null');
        }).catch((err) => {
            assert.isNotNull(err, 'Throws an error');
            assert.isOk(scope.isDone(), 'Four requests made');
            nock.cleanAll();
        });
    });
});
