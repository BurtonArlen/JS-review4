import Ember from 'ember';

export default Ember.Component.extend({
  answerQuestion: false,
  actions: {
    answerQuestion() {
      this.set('answerQuestion', true);
    },
    answer(question) {
      var params = {
        answer: this.get('answer')
      };
      this.set('answerQuestion', false);
      this.sendAction('answer', question, params);
    }
  }
});
