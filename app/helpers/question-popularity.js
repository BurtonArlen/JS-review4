import Ember from 'ember';

export function questionPopularity() {
  return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span>');
}


export default Ember.Helper.helper(questionPopularity);
