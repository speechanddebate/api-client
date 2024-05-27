import { assert } from 'chai';
import nock from 'nock';

import config from '../../../config';
import {
    getGrants,
    getSchoolGrants,
    postSchoolGrant,
    patchSchoolGrant,
    deleteSchoolGrant,
    patchSchoolGrantProduct,
    deleteSchoolGrantProduct,
} from './schoolGrants';

describe('getGrants', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
            .get(/grants/)
            .reply(200, JSON.stringify([{ test: 'test' }]));

        getGrants().then((response) => {
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
            .get(/grants/)
            .times(4)
            .reply(500, JSON.stringify({ message: 'Server Error' }));

        return getGrants().then((response) => {
            assert.isNull(response, 'Response is null');
        })
        .catch((err) => {
            assert.isNotNull(err, 'Throws an error');
            assert.isOk(scope.isDone(), 'Four requests made');
            nock.cleanAll();
        });
    });
});

describe('getSchoolGrants', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
            .get(/grants/)
            .reply(200, JSON.stringify([{ test: 'test' }]));

        getSchoolGrants(1).then((response) => {
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
            .get(/grants/)
            .times(4)
            .reply(500, JSON.stringify({ message: 'Server Error' }));

        return getSchoolGrants(1).then((response) => {
            assert.isNull(response, 'Response is null');
        })
        .catch((err) => {
            assert.isNotNull(err, 'Throws an error');
            assert.isOk(scope.isDone(), 'Four requests made');
            nock.cleanAll();
        });
    });
});

describe('postSchoolGrant', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
        .post(/grants/)
        .reply(201, JSON.stringify({ test: 'test' }));

        postSchoolGrant(1, 1, 'test').then((response) => {
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
        .post(/grants/)
        .reply(500, JSON.stringify({ message: 'Server Error' }));

        return postSchoolGrant(1, 1, 'test').then((response) => {
            assert.isNull(response, 'Response is null');
        }).catch((err) => {
            assert.isNotNull(err, 'Throws an error');
            assert.isOk(scope.isDone(), 'One request made');
            nock.cleanAll();
        });
    });
});

describe('patchSchoolGrant', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
        .patch(/grants/)
        .reply(200, JSON.stringify({ test: 'test' }));

        patchSchoolGrant(1, 1, []).then((response) => {
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
        .patch(/grants/)
        .times(4)
        .reply(500, JSON.stringify({ message: 'Server Error' }));

        return patchSchoolGrant(1, 1, []).then((response) => {
            assert.isNull(response, 'Response is null');
        }).catch((err) => {
            assert.isNotNull(err, 'Throws an error');
            assert.isOk(scope.isDone(), 'Four requests made');
            nock.cleanAll();
        });
    });
});

describe('deleteSchoolGrant', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
        .delete(/grants/)
        .reply(200, JSON.stringify({ test: 'test' }));

        deleteSchoolGrant(1, 1).then((response) => {
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
        .delete(/grants/)
        .times(4)
        .reply(500, JSON.stringify({ message: 'Server Error' }));

        return deleteSchoolGrant(1, 1).then((response) => {
            assert.isNull(response, 'Response is null');
        }).catch((err) => {
            assert.isNotNull(err, 'Throws an error');
            assert.isOk(scope.isDone(), 'Four requests made');
            nock.cleanAll();
        });
    });
});

describe('patchSchoolGrantProduct', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
        .patch(/grants/)
        .reply(200, JSON.stringify({ test: 'test' }));

        patchSchoolGrantProduct(1, 1, []).then((response) => {
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
        .patch(/grants/)
        .times(4)
        .reply(500, JSON.stringify({ message: 'Server Error' }));

        return patchSchoolGrantProduct(1, 1, []).then((response) => {
            assert.isNull(response, 'Response is null');
        }).catch((err) => {
            assert.isNotNull(err, 'Throws an error');
            assert.isOk(scope.isDone(), 'Four requests made');
            nock.cleanAll();
        });
    });
});

describe('deleteSchoolGrantProduct', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
        .delete(/grants/)
        .reply(200, JSON.stringify({ test: 'test' }));

        deleteSchoolGrantProduct(1, 1).then((response) => {
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
        .delete(/grants/)
        .times(4)
        .reply(500, JSON.stringify({ message: 'Server Error' }));

        return deleteSchoolGrantProduct(1, 1).then((response) => {
            assert.isNull(response, 'Response is null');
        }).catch((err) => {
            assert.isNotNull(err, 'Throws an error');
            assert.isOk(scope.isDone(), 'Four requests made');
            nock.cleanAll();
        });
    });
});
