import http from 'http';
import assert from 'assert';
import '../app/server.js';
import { constructUrl } from './helpers';
import { describe, it } from 'mocha';

describe('loads health check page', () => {
  it('should return 200', done => {
    http.get(constructUrl('/health-check'), res => {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});
