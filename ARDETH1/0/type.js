define([
  'angular',
  'lodash',
  './editorCtrl',
],
function (angular) {
  'use strict';

  var module = angular.module('grafiz.services');

  module.factory('ARDETH1', function() {
    function ARDETH1() {
      this.meta = {
        type: 'ARDETH1',
        editor: 'partials/editor.html'
      };
    }

    return ARDETH1;
  });

});
