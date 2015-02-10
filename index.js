/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-bootstrap-daterange',

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  included: function(app) {
    this._super.included(app);

    this.app.import(app.bowerDirectory + '/moment/moment.js');
    this.app.import(app.bowerDirectory + '/bootstrap-daterangepicker/daterangepicker.js');
    this.app.import(app.bowerDirectory + '/bootstrap-daterangepicker/daterangepicker-bs3.css');
  }
};
