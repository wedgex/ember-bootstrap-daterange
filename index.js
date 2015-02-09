/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-bootstrap-daterange',
  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/moment/moment.js');
    app.import(app.bowerDirectory + '/bootstrap-daterangepicker/daterangepicker.js');
    app.import(app.bowerDirectory + '/bootstrap-daterangepicker/daterangepicker-bs3.css');
  }
};
