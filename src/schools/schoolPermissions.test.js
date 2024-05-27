import { assert } from 'chai';
import nock from 'nock';

import config from '../../../config';
import {
    getSchoolPermissions,
    postSchoolPermission,
    patchSchoolPermissions,
    deleteSchoolPermission,
} from './schoolPermissions';

describe('getSchoolPermissions', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
        .get(/schools/)
        .reply(200, JSON.stringify([{ test: 'test' }]));

        getSchoolPermissions(1).then((response) => {
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

        return getSchoolPermissions(1).then((response) => {
            assert.isNull(response, 'Response is null');
        }).catch((err) => {
            assert.isNotNull(err, 'Throws an error');
            assert.isOk(scope.isDone(), 'Four requests made');
            nock.cleanAll();
        });
    });
});

describe('postSchoolPermission', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
        .post(/permissions/)
        .reply(201, JSON.stringify({ test: 'test' }));

        postSchoolPermission(1, 1, 'test').then((response) => {
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
        .post(/permissions/)
        .reply(500, JSON.stringify({ message: 'Server Error' }));

        return postSchoolPermission(1, 1, 'test').then((response) => {
            assert.isNull(response, 'Response is null');
        }).catch((err) => {
            assert.isNotNull(err, 'Throws an error');
            assert.isOk(scope.isDone(), 'One request made');
            nock.cleanAll();
        });
    });
});

describe('patchSchoolPermissions', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
        .patch(/permissions/)
        .reply(200, JSON.stringify({ test: 'test' }));

        patchSchoolPermissions(1, []).then((response) => {
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
        .patch(/permissions/)
        .times(4)
        .reply(500, JSON.stringify({ message: 'Server Error' }));

        return patchSchoolPermissions(1, []).then((response) => {
            assert.isNull(response, 'Response is null');
        }).catch((err) => {
            assert.isNotNull(err, 'Throws an error');
            assert.isOk(scope.isDone(), 'Four requests made');
            nock.cleanAll();
        });
    });
});

describe('deleteSchoolPermission', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
        .delete(/permissions/)
        .reply(200, JSON.stringify({ test: 'test' }));

        deleteSchoolPermission(1, 1).then((response) => {
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
        .delete(/permissions/)
        .times(4)
        .reply(500, JSON.stringify({ message: 'Server Error' }));

        return deleteSchoolPermission(1, 1).then((response) => {
            assert.isNull(response, 'Response is null');
        }).catch((err) => {
            assert.isNotNull(err, 'Throws an error');
            assert.isOk(scope.isDone(), 'Four requests made');
            nock.cleanAll();
        });
    });
});
