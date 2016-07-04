import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  bun: attr('number'),
  patty: attr('number'),
  chips: attr('number'),
  atmosphere: attr('number'),
  comment: attr('string'),
  value: attr('number'),
  userId: attr('number'),
  burgerPlaceId: attr('number'),
  burgerPlace: belongsTo('burger-place')
});
