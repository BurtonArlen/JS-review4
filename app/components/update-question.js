import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm: function(){
      this.set('updateQuestionForm', true);
    },
    update(question) {
      var params = {
        ask: this.get('ask')
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    }
  }
});
