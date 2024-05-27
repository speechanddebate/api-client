import { assert } from 'chai';
import nock from 'nock';

import config from '../../../config';
import { getPermissions } from './permissions';

describe('getPermissions', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
        .get(/permissions/)
        .reply(200, JSON.stringify({ test: 'test' }));

        getPermissions().then((response) => {
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
        .get(/permissions/)
        .times(4)
        .reply(500, JSON.stringify({ message: 'Server Error' }));

        return getPermissions().then((response) => {
            assert.isNull(response, 'Response is null');
        }).catch((err) => {
            assert.isNotNull(err, 'Throws an error');
            assert.isOk(scope.isDone(), 'Four requests made');
            nock.cleanAll();
        });
    });
});
