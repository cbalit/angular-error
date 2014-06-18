'use strict';

function globalClick(){
    throw new Error("JAVSCRIPT RUN TIME ERROR");
}

angular.module('errorApp')
    .controller('MainCtrl', function ($scope, $http, GlobalErrorHandler,$log) {



        GlobalErrorHandler.onError=function (error) {
            $log.error("AN ERROR OCCURED:"+error.message);
            $log.info("STACK:"+error.stack);
            $scope.error = error;
        };

        GlobalErrorHandler.onAjaxError = function (error) {
            $log.error("AN ERROR OCCURED:"+error.message);
            $log.info("STACK:"+error.stack);
            $scope.error = error;
        };



        $scope.loadUser = function () {
            $http.get('mocks/data.json').then(function (response) {
                $scope.users = response.data;
            });
        };

        $scope.ajaxError = function () {
            $http.get('mocks/noexisting.json').then(function (response) {
                $scope.users = response.data;
            });
        };

        $scope.controllerError = function () {
            throw new Error("ANGULAR RUN TIME ERROR");
        };

        $scope.reset = function () {
            $scope.users=null;
            $scope.error=null;
        }

    });
