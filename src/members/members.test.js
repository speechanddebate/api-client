import { assert } from 'chai';
import nock from 'nock';

import config from '../../../config';
import { getMembers, getMember, putMember, patchMember } from './members';

describe('getMembers', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
        .get(/members/)
        .reply(200, JSON.stringify({ test: 'test' }));

        getMembers(1).then((response) => {
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
        .get(/members/)
        .times(4)
        .reply(500, JSON.stringify({ message: 'Server Error' }));

        return getMembers(1).then((response) => {
            assert.isNull(response, 'Response is null');
        }).catch((err) => {
            assert.isNotNull(err, 'Throws an error');
            assert.isOk(scope.isDone(), 'Four requests made');
            nock.cleanAll();
        });
    });
});

describe('getMember', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
        .get(/members/)
        .reply(200, JSON.stringify({ test: 'test' }));

        getMember(1).then((response) => {
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
        .get(/members/)
        .times(4)
        .reply(500, JSON.stringify({ message: 'Server Error' }));

        return getMember(1).then((response) => {
            assert.isNull(response, 'Response is null');
        }).catch((err) => {
            assert.isNotNull(err, 'Throws an error');
            assert.isOk(scope.isDone(), 'Four requests made');
            nock.cleanAll();
        });
    });
});

describe('putMember', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
        .put(/members/)
        .reply(202, JSON.stringify({ test: 'test' }));

        putMember({}).then((response) => {
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
        .put(/members/)
        .reply(500, JSON.stringify({ message: 'Server Error' }));

        return putMember({}).then((response) => {
            assert.isNull(response, 'Response is null');
        }).catch((err) => {
            assert.isNotNull(err, 'Throws an error');
            assert.isOk(scope.isDone(), 'One request made');
            nock.cleanAll();
        });
    });
});

describe('patchMember', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
        .patch(/members/)
        .reply(202, JSON.stringify({ test: 'test' }));

        patchMember(1, []).then((response) => {
            assert.deepEqual(response, { test: 'test' }, 'Response matches');
            assert.isOk(scope.isDone(), 'One request made');
            nock.cleanAll();
            done();
        }).catch((err) => {
            console.log(err);
            done(err);
        });
    });

    it('should allow auth override', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
        .patch(/members/)
        .reply(202, JSON.stringify({ test: 'test' }));

        patchMember(1, [], 'test').then((response) => {
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

        return patchMember(1, []).then((response) => {
            assert.isNull(response, 'Response is null');
        }).catch((err) => {
            assert.isNotNull(err, 'Throws an error');
            assert.isOk(scope.isDone(), 'Four requests made');
            nock.cleanAll();
        });
    });
});
