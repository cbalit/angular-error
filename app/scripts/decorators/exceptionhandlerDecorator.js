'use strict';

angular.module('errorApp')
  .config(function ($provide) {
    $provide.decorator('$exceptionHandler', function (GlobalErrorHandler,$delegate) {
        return function (exception, cause) {
            GlobalErrorHandler.error(exception);
            $delegate(exception, cause);
        };
    });
  });
