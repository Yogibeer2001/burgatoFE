import JSONAPIAdapter from 'ember-data/adapters/json-api';
import Ember from 'ember';

export default JSONAPIAdapter.extend({
  host: 'https://fast-basin-31464.herokuapp.com',
  headers: {
    Authorization: 'Token token=7d2eff90ab6a4f599f7be38c1ada1a7c'
  },
  pathForType: function(modelName) {
    var decamelized = Ember.String.underscore(modelName);
    return Ember.String.pluralize(decamelized);
  }
});
