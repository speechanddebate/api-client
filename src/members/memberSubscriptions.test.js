import { assert } from 'chai';
import nock from 'nock';

import config from '../../../config';
import { getMemberSubscriptions, postMemberSubscription, deleteMemberSubscription } from './memberSubscriptions';

describe('getMemberSubscriptions', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
            .get(/subscriptions/)
            .reply(200, JSON.stringify([{ test: 'test' }]));

        getMemberSubscriptions(1)
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
            .get(/subscriptions/)
            .times(4)
            .reply(500, JSON.stringify({ message: 'Server Error' }));

        return getMemberSubscriptions(1)
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

describe('postMemberSubscription', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
        .post(/subscriptions/)
        .reply(201, JSON.stringify({ test: 'test' }));

        postMemberSubscription(1, {}).then((response) => {
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
        .post(/subscriptions/)
        .reply(500, JSON.stringify({ message: 'Server Error' }));

        return postMemberSubscription(1, {}).then((response) => {
            assert.isNull(response, 'Response is null');
        }).catch((err) => {
            assert.isNotNull(err, 'Throws an error');
            assert.isOk(scope.isDone(), 'One request made');
            nock.cleanAll();
        });
    });
});

describe('deleteMemberSubscription', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
        .delete(/subscriptions/)
        .reply(200, JSON.stringify({ test: 'test' }));

        deleteMemberSubscription(1, 1).then((response) => {
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
        .delete(/subscriptions/)
        .times(4)
        .reply(500, JSON.stringify({ message: 'Server Error' }));

        return deleteMemberSubscription(1, 1).then((response) => {
            assert.isNull(response, 'Response is null');
        }).catch((err) => {
            assert.isNotNull(err, 'Throws an error');
            assert.isOk(scope.isDone(), 'Four requests made');
            nock.cleanAll();
        });
    });
});
