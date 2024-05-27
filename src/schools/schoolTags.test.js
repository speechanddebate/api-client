import { assert } from 'chai';
import nock from 'nock';

import config from '../../../config';
import {
    getSchoolTags,
    postSchoolTag,
    deleteSchoolTag,
} from './schoolTags';

describe('getSchoolTags', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
            .get(/tags/)
            .reply(200, JSON.stringify([{ test: 'test' }]));

        getSchoolTags(1)
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
            .get(/tags/)
            .times(4)
            .reply(500, JSON.stringify({ message: 'Server Error' }));

        return getSchoolTags(1)
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

describe('postSchoolTag', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
        .post(/tags/)
        .reply(201, JSON.stringify({ test: 'test' }));

        postSchoolTag(1, {}).then((response) => {
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
        .post(/tags/)
        .reply(500, JSON.stringify({ message: 'Server Error' }));

        return postSchoolTag(1, {}).then((response) => {
            assert.isNull(response, 'Response is null');
        }).catch((err) => {
            assert.isNotNull(err, 'Throws an error');
            assert.isOk(scope.isDone(), 'One request made');
            nock.cleanAll();
        });
    });
});

describe('deleteSchoolTag', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
        .delete(/tags/)
        .reply(200, JSON.stringify({ test: 'test' }));

        deleteSchoolTag(1, 1).then((response) => {
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
        .delete(/tags/)
        .times(4)
        .reply(500, JSON.stringify({ message: 'Server Error' }));

        return deleteSchoolTag(1, 1).then((response) => {
            assert.isNull(response, 'Response is null');
        }).catch((err) => {
            assert.isNotNull(err, 'Throws an error');
            assert.isOk(scope.isDone(), 'Four requests made');
            nock.cleanAll();
        });
    });
});
