import ApplicationAdapter from './application';
// import Ember from 'ember';

export default ApplicationAdapter.extend({
  host: 'https://fast-basin-31464.herokuapp.com',
  headers: {
    'Content-Type': 'application/json'
  },
  // pathForType: function(modelName) {
  //   var decamelized = Ember.String.underscore(modelName);
  //   return Ember.String.pluralize(decamelized);
  // }
});
