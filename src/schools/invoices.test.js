import { assert } from 'chai';
import nock from 'nock';

import config from '../../../config';
import { getBillingPortal, postInvoice } from './invoices';

describe('getBillingPortal', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
        .get(/portal/)
        .reply(200, JSON.stringify({ test: 'test' }));

        getBillingPortal(1).then((invoice) => {
            assert.deepEqual(invoice, { test: 'test' }, 'Response matches');
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
        .get(/portal/)
        .times(4)
        .reply(500, JSON.stringify({ message: 'Server Error' }));

        return getBillingPortal(1).then((invoice) => {
            assert.isNull(invoice, 'Response is null');
        }).catch((err) => {
            assert.isNotNull(err, 'Throws an error');
            assert.isOk(scope.isDone(), 'Four requests made');
            nock.cleanAll();
        });
    });
});

describe('postInvoice', () => {
    it('should fetch successfully', (done) => {
        const scope = nock(new RegExp(config.API_HOST))
        .post(/invoices/)
        .reply(201, JSON.stringify({ test: 'test' }));

        postInvoice(1, []).then((invoice) => {
            assert.deepEqual(invoice, { test: 'test' }, 'Response matches');
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
        .post(/invoices/)
        .reply(500, JSON.stringify({ message: 'Server Error' }));

        return postInvoice(1, []).then((invoice) => {
            assert.isNull(invoice, 'Response is null');
        }).catch((err) => {
            assert.isNotNull(err, 'Throws an error');
            assert.isOk(scope.isDone(), 'One request made');
            nock.cleanAll();
        });
    });
});
