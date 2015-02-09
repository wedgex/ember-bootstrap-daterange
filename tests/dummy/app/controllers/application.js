import Ember from 'ember';

export default Ember.Controller.extend({
  start: '11/5/1955',
  end:   '8/26/1985',

  actions: {
    go: function() {
      this.set('start', '8/26/1985');
      this.set('end', '10/21/2015');
    },
    addRanges: function() {
      this.set('ranges', {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')]
      });
    }
  }
});
