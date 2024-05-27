import { assert } from 'chai';
import nock from 'nock';

import config from '../../../config';
import { postMemberCerts } from './certs';

describe('postMemberCerts', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
        .post(/certs/)
        .reply(200, JSON.stringify({ test: 'test' }));

        postMemberCerts([]).then((response) => {
            assert.strictEqual(response.status, 200, 'Response matches');
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
        .post(/certs/)
        .reply(500, JSON.stringify({ message: 'Server Error' }));

        return postMemberCerts([]).then((response) => {
            assert.isNull(response, 'Response is null');
        }).catch((err) => {
            assert.isNotNull(err, 'Throws an error');
            assert.isOk(scope.isDone(), 'One request made');
            nock.cleanAll();
        });
    });
});
