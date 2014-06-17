'use strict';

describe('Service: errorHttpInterceptor', function () {

  // load the service's module
  beforeEach(module('errorApp'));

  // instantiate service
  var errorHttpInterceptor;
  beforeEach(inject(function (_errorHttpInterceptor_) {
    errorHttpInterceptor = _errorHttpInterceptor_;
  }));

  it('should do something', function () {
    expect(!!errorHttpInterceptor).toBe(true);
  });

});
