import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  // id: attr('number'),
  name: attr('string'), 
  address: attr('string'),
  phoneNo: attr('string'),
  reviewScore: attr('number'),
  postCode: attr('number'),
  suburb: attr('string'),
  city: attr('string'),
  webAddress: attr('string')
});
