import { assert } from 'chai';
import nock from 'nock';

import config from '../../../config';
import { getMemberTags, postMemberTag, deleteMemberTag } from './memberTags';

describe('getMemberTags', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
            .get(/tags/)
            .reply(200, JSON.stringify([{ test: 'test' }]));

        getMemberTags(1)
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

        return getMemberTags(1)
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

describe('postMemberTag', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
        .post(/tags/)
        .reply(201, JSON.stringify({ test: 'test' }));

        postMemberTag(1, { tag: 'test', value: 'test', start: 'test' }).then((response) => {
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

        return postMemberTag(1, { tag: 'test', value: 'test', start: 'test' }).then((response) => {
            assert.isNull(response, 'Response is null');
        }).catch((err) => {
            assert.isNotNull(err, 'Throws an error');
            assert.isOk(scope.isDone(), 'One request made');
            nock.cleanAll();
        });
    });
});

describe('deleteMemberTag', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
        .delete(/tags/)
        .reply(200, JSON.stringify({ test: 'test' }));

        deleteMemberTag(1, 1).then((response) => {
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

        return deleteMemberTag(1, 1).then((response) => {
            assert.isNull(response, 'Response is null');
        }).catch((err) => {
            assert.isNotNull(err, 'Throws an error');
            assert.isOk(scope.isDone(), 'Four requests made');
            nock.cleanAll();
        });
    });
});
