import { assert } from 'chai';
import nock from 'nock';

import config from '../../../config';
import { getDistrictLeaders, postDistrictLeader, patchDistrictLeader, deleteDistrictLeader } from './districtLeaders';

describe('getDistrictLeaders', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
        .get(/leaders/)
        .reply(200, JSON.stringify([{ test: 'test' }]));

        getDistrictLeaders(1).then((response) => {
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
        .get(/leaders/)
        .times(4)
        .reply(500, JSON.stringify({ message: 'Server Error' }));

        return getDistrictLeaders(1).then((response) => {
            assert.isNull(response, 'Response is null');
        }).catch((err) => {
            assert.isNotNull(err, 'Throws an error');
            assert.isOk(scope.isDone(), 'Four requests made');
            nock.cleanAll();
        });
    });
});

describe('postDistrictLeader', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
        .post(/leaders/)
        .reply(200, JSON.stringify({ test: 'test' }));

        postDistrictLeader(1, []).then((response) => {
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
        .post(/leaders/)
        .times(4)
        .reply(500, JSON.stringify({ message: 'Server Error' }));

        return postDistrictLeader(1, []).then((response) => {
            assert.isNull(response, 'Response is null');
        }).catch((err) => {
            assert.isNotNull(err, 'Throws an error');
            assert.isOk(scope.isDone(), 'Four requests made');
            nock.cleanAll();
        });
    });
});

describe('patchDistrictLeader', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
        .patch(/leaders/)
        .reply(200, JSON.stringify({ test: 'test' }));

        patchDistrictLeader(1, 1, []).then((response) => {
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
        .patch(/leaders/)
        .times(4)
        .reply(500, JSON.stringify({ message: 'Server Error' }));

        return patchDistrictLeader(1, 1, []).then((response) => {
            assert.isNull(response, 'Response is null');
        }).catch((err) => {
            assert.isNotNull(err, 'Throws an error');
            assert.isOk(scope.isDone(), 'Four requests made');
            nock.cleanAll();
        });
    });
});

describe('deleteDistrictLeader', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
        .delete(/leaders/)
        .reply(200, JSON.stringify({ test: 'test' }));

        deleteDistrictLeader(1).then((response) => {
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
        .delete(/leaders/)
        .times(4)
        .reply(500, JSON.stringify({ message: 'Server Error' }));

        return deleteDistrictLeader(1).then((response) => {
            assert.isNull(response, 'Response is null');
        }).catch((err) => {
            assert.isNotNull(err, 'Throws an error');
            assert.isOk(scope.isDone(), 'Four requests made');
            nock.cleanAll();
        });
    });
});
