import { assert } from 'chai';
import nock from 'nock';

import config from '../../../config';
import { getMemberRoles, patchSchoolMember } from './memberRoles';

describe('getMemberRoles', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
        .get(/roles/)
        .reply(200, JSON.stringify([{ test: 'test' }]));

        getMemberRoles().then((response) => {
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
        .get(/roles/)
        .times(4)
        .reply(500, JSON.stringify({ message: 'Server Error' }));

        return getMemberRoles().then((response) => {
            assert.isNull(response, 'Response is null');
        }).catch((err) => {
            assert.isNotNull(err, 'Throws an error');
            assert.isOk(scope.isDone(), 'Four requests made');
            nock.cleanAll();
        });
    });
});

describe('patchSchoolMember', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
        .patch(/members/)
        .reply(202, JSON.stringify({ test: 'test' }));

        patchSchoolMember(1, 1, 1, []).then((response) => {
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
        .patch(/members/)
        .times(4)
        .reply(500, JSON.stringify({ message: 'Server Error' }));

        return patchSchoolMember(1, 1, 1, []).then((response) => {
            assert.isNull(response, 'Response is null');
        }).catch((err) => {
            assert.isNotNull(err, 'Throws an error');
            assert.isOk(scope.isDone(), 'Four requests made');
            nock.cleanAll();
        });
    });
});
