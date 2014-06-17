'use strict';

angular.module('errorApp')
    .factory('errorHttpInterceptor', function ($q, GlobalErrorHandler) {
        return {
            responseError: function responseError(rejection) {
                GlobalErrorHandler.ajaxError(rejection);
                return $q.reject(rejection);
            }
        };
    })
    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push('errorHttpInterceptor');
    }])
