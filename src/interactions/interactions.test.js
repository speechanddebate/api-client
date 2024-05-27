import { assert } from 'chai';
import nock from 'nock';

import config from '../../../config';
import { getMemberInteractions, postMemberInteraction, deleteMemberInteraction } from './interactions';

describe('getMemberInteractions', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
            .get(/interactions/)
            .reply(200, JSON.stringify([{ test: 'test' }]));

        getMemberInteractions(1)
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
            .get(/interactions/)
            .times(4)
            .reply(500, JSON.stringify({ message: 'Server Error' }));

        return getMemberInteractions(1)
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

describe('postMemberInteraction', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
        .post(/interactions/)
        .reply(201, JSON.stringify({ test: 'test' }));

        postMemberInteraction(1, { tag: 'test', value: 'test', start: 'test' }).then((response) => {
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
        .post(/interactions/)
        .reply(500, JSON.stringify({ message: 'Server Error' }));

        return postMemberInteraction(1, { tag: 'test', value: 'test', start: 'test' }).then((response) => {
            assert.isNull(response, 'Response is null');
        }).catch((err) => {
            assert.isNotNull(err, 'Throws an error');
            assert.isOk(scope.isDone(), 'One request made');
            nock.cleanAll();
        });
    });
});

describe('deleteMemberInteraction', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
        .delete(/interactions/)
        .reply(200, JSON.stringify({ test: 'test' }));

        deleteMemberInteraction(1, 1).then((response) => {
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
        .delete(/interactions/)
        .times(4)
        .reply(500, JSON.stringify({ message: 'Server Error' }));

        return deleteMemberInteraction(1, 1).then((response) => {
            assert.isNull(response, 'Response is null');
        }).catch((err) => {
            assert.isNotNull(err, 'Throws an error');
            assert.isOk(scope.isDone(), 'Four requests made');
            nock.cleanAll();
        });
    });
});
