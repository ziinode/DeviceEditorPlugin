define([
  'angular',
  'lodash',
  './editorCtrl',
],
function (angular) {
  'use strict';

  var module = angular.module('grafiz.services');

  module.factory('WIFITE1', function() {
    function ZNATV01() {
      this.meta = {
        type: 'WIFITE1',
        editor: '/partials/editor.html'
      };
    }

    return ZNATV01;
  });

});
