'use strict';

angular.module('errorApp')
  .factory('GlobalErrorHandler', function () {

        var service = {
            error: function (error) {
                this.onError(error);
            },
            ajaxError: function (rejection) {
                var error=new Error(rejection.data);
                this.onAjaxError(error);
            },
            onError: function (error) {
            },
            onAjaxError: function () {
            }
        };
        return service;
    });
