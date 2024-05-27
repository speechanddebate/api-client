import { assert } from 'chai';
import nock from 'nock';

import config from '../../../config';
import { getReport } from './reports';

describe('getReport', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
        .get(/reports/)
        .reply(200, JSON.stringify({ test: 'test' }));

        getReport('test', '').then((response) => {
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
        .get(/reports/)
        .reply(500, JSON.stringify({ message: 'Server Error' }));

        return getReport('test', '').then((response) => {
            assert.isNull(response, 'Response is null');
        }).catch((err) => {
            assert.isNotNull(err, 'Throws an error');
            assert.isOk(scope.isDone(), 'One request made');
            nock.cleanAll();
        });
    });
});
