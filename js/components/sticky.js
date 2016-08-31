(function(exports) {
  'use strict';

  var stickyfill = require('stickyfill')();

  [].forEach.call(
    document.querySelectorAll('.sticky'),
    stickyfill.add
  );

  exports.stickyfill = stickyfill;

})(this);
