import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  question: DS.belongsTo('question', {async: true}),
  answer: DS.attr()
});
