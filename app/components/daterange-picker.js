import Ember from 'ember';
var forwardableAttributes = [
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
    forwardableAttributes.forEach(function(attr) {
      options[attr] = self.get(attr);
    });
    return options;
  }.property(forwardableAttributes),

  didInsertElement: function() {
    this.$().daterangepicker(this.get('jQueryOptions'));
  }
});
