import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('question');
  },
  updateQuestionForm: false,
  actions: {
    save3(params){
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },
    answer(question, params) {
      var newAnswer = this.store.createRecord('answer', params);
      question.get('answer').addObject(newAnswer);
      newAnswer.save().then(function() {
        question.save();
      });
      this.transitionTo('index');
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
  }
});
