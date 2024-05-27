import { assert } from 'chai';
import nock from 'nock';

import config from '../../../config';
import { getTournaments } from './tournaments';

describe('getTournaments', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
        .get(/tournaments/)
        .reply(200, JSON.stringify([{ test: 'test' }]));

        getTournaments('IA', '2020-01-01 00:00:00').then((response) => {
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
        .get(/tournaments/)
        .times(4)
        .reply(500, JSON.stringify({ message: 'Server Error' }));

        return getTournaments('IA', '2020-01-01 00:00:00').then((response) => {
            assert.isNull(response, 'Response is null');
        }).catch((err) => {
            assert.isNotNull(err, 'Throws an error');
            assert.isOk(scope.isDone(), 'Four requests made');
            nock.cleanAll();
        });
    });
});
