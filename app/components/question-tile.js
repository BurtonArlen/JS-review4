import Ember from 'ember';

export default Ember.Component.extend({
  isAnswerShow: false,
  updateQuestionForm: false,
  actions: {
    answerShow: function(){
      this.set('isAnswerShow', true);
    },
    answerHide: function(){
      this.set('isAnswerShow', false);
    },
    updateQuestionForm: function(){
      this.set('updateQuestionForm', true);
    },
    update(question, params){
      console.log("question ",question.ask);
      console.log("params ", params);
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key,params[key]);
        }s
      });
      question.save();
      this.transitionTo('index');
      this.set('updateQuestionForm',false);
    },
    answer(question, params) {
      this.sendAction('answer', question, params);
    }
  }
});
