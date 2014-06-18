'use strict';

angular.module('errorApp')
  .config(function ($provide) {
    $provide.decorator('$window', function ($delegate,GlobalErrorHandler) {
        $delegate.onerror = function (errorMsg, url, lineNumber) {
            var error = new Error(errorMsg, url, lineNumber);
            GlobalErrorHandler.error(error);
        };
      return $delegate;
    });
  });
