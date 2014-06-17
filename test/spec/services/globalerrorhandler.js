'use strict';

describe('Service: GlobalErrorHandler', function () {

  // load the service's module
  beforeEach(module('errorApp'));

  // instantiate service
  var GlobalErrorHandler;
  beforeEach(inject(function (_GlobalErrorHandler_) {
    GlobalErrorHandler = _GlobalErrorHandler_;
  }));

  it('should do something', function () {
    expect(!!GlobalErrorHandler).toBe(true);
  });

});
