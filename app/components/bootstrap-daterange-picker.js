import Ember from 'ember';
var jqueryAttrs = [
  'startDate',
  'endDate',
  'minDate',
  'maxDate',
  'dateLimit',
  'timeZone',
  'showDropdowns',
  'showWeekNumbers',
  'timePicker',
  'timePickerIncrement',
  'timePicker12Hour',
  'timePickerSeconds',
  'ranges',
  'opens',
  'buttonClasses',
  'applyClass',
  'cancelClass',
  'format',
  'seperator',
  'locale',
  'singleDatePicker',
  'parentEl'
];

export default Ember.Component.extend({
  tagName: 'input',

  jQueryOptions: function() {
    var options = {};
    var self = this;

    jqueryAttrs.forEach(function(attr) {
      options[attr] = self.get(attr);
    });

    return options;
  }.property(
    'startDate',
    'endDate',
    'minDate',
    'maxDate',
    'dateLimit',
    'timeZone',
    'showDropdowns',
    'showWeekNumbers',
    'timePicker',
    'timePickerIncrement',
    'timePicker12Hour',
    'timePickerSeconds',
    'ranges',
    'opens',
    'buttonClasses',
    'applyClass',
    'cancelClass',
    'format',
    'seperator',
    'locale',
    'singleDatePicker',
    'parentEl'
  ),

  didInsertElement: function() {
    var self = this;

    this.$().daterangepicker(this.get('jQueryOptions'),
      function(start, end, label) {
        self.set('startDate', start);
        self.set('endDate', end);
    });

    this._setStart();
    this._setEnd();
  },

  _setStart: function() {
    this.$().data('daterangepicker').setStartDate(this.get('startDate'));
  },

  _setEnd: function() {
    this.$().data('daterangepicker').setEndDate(this.get('endDate'));
  },

  startDateChanged: function() {
    this._setStart();
  }.observes('startDate'),

  endDateChanged: function() {
    this._setEnd();
  }.observes('endDate')
});
