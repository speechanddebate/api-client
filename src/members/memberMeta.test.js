import { assert } from 'chai';
import nock from 'nock';

import config from '../../../config';
import { postMemberMeta, deleteMemberMeta } from './memberMeta';

describe('postMemberMeta', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
        .post(/meta/)
        .reply(201, JSON.stringify({ test: 'test' }));

        postMemberMeta(1, {}).then((response) => {
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

        return postMemberMeta(1, {}).then((response) => {
            assert.isNull(response, 'Response is null');
        }).catch((err) => {
            assert.isNotNull(err, 'Throws an error');
            assert.isOk(scope.isDone(), 'One request made');
            nock.cleanAll();
        });
    });
});

describe('deleteMemberMeta', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
        .delete(/meta/)
        .reply(200, JSON.stringify({ test: 'test' }));

        deleteMemberMeta(1, 'test').then((response) => {
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

        return deleteMemberMeta(1, 'test').then((response) => {
            assert.isNull(response, 'Response is null');
        }).catch((err) => {
            assert.isNotNull(err, 'Throws an error');
            assert.isOk(scope.isDone(), 'Four requests made');
            nock.cleanAll();
        });
    });
});
