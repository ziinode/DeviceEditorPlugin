#!!! Repository moved to [github.com/tinovi](https://github.com/tinovi)

This is demo Device Editor Plugins for [www.ziinode.io](www.ziinode.io) IoT cloud service.
You can create your own plugin for your own Device Type. For uploading you should pack your plugin in zip archive and zip archive root should contain file `type.js` with following content:
```
define([
  'angular',
  'lodash',
  './editorCtrl',   //include javascript if needed
],
function (angular) {
  'use strict';

  var module = angular.module('grafiz.services');

  module.factory('ZNATV01', function() {
    function ZNATV01() {
      this.meta = {
        type: 'ZNATV01',
        editor: '/partials/editor.html'
      };
    }

    return ZNATV01;
  });

});

```

replace `ZNATV01` with your own device type Id.
