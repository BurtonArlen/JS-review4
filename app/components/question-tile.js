import Ember from 'ember';
var trebec = "What is, ";

export default Ember.Component.extend({

  isAnswerShow: false,
  trebecSays: Ember.computed('question.author','question.ask',function(){
      return this.get('question.author')+" asks, "+this.get('question.ask');
  }),
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
        }
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
