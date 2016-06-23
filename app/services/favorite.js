import Ember from 'ember';

export default Ember.Service.extend({
  questions: [],

  favorite(question) {
    console.log("log2: ",question);
    this.get('questions').pushObject(question);
  }
});
