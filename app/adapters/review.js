import JSONAPIAdapter from 'ember-data/adapters/json-api';
import Ember from 'ember';

export default JSONAPIAdapter.extend({
  host: 'https://fast-basin-31464.herokuapp.com',
  namespace: 'burger_places',
  headers: {
    Authorization: 'Token token=7d2eff90ab6a4f599f7be38c1ada1a7c'
  },
  // pathForType: function(modelName) {
  //   var decamelized = Ember.String.underscore(modelName);
  //   return Ember.String.pluralize(decamelized);
  // },
  urlForQueryRecord(query, modelName) {
    console.log(query);
    // let burgerID = query.ID;
    var prefix = this.urlPrefix();
    return prefix+'/'+query+'/reviews';
},
  // urlForFindAll(query, modelName) {
  //   // return '$(this.host)';
  //   // var host = this.host;
  //   var prefix = this.urlPrefix();
  //   // var id = encodeURIComponent(id);
  //   console.log(query);
  //   // console.log(snapshot);
  //   return prefix+'/'+query+'/reviews';
  // // },
  // },
 //  buildURL(modelName, id, snapshot, requestType, query) {
 //   switch (requestType) {
 //     case 'findRecord':
 //       return this.urlForFindRecord(id, modelName, snapshot);
 //     case 'findAll':
 //       return this.urlForFindAll(id, modelName, snapshot);
 //     case 'query':
 //       return this.urlForQuery(query, modelName);
 //     case 'queryRecord':
 //       return this.urlForQueryRecord(query, modelName);
 //     case 'findMany':
 //       return this.urlForFindMany(id, modelName, snapshot);
 //     case 'findHasMany':
 //       return this.urlForFindHasMany(id, modelName, snapshot);
 //     case 'findBelongsTo':
 //       return this.urlForFindBelongsTo(id, modelName, snapshot);
 //     case 'createRecord':
 //       return this.urlForCreateRecord(modelName, snapshot);
 //     case 'updateRecord':
 //       return this.urlForUpdateRecord(id, modelName, snapshot);
 //     case 'deleteRecord':
 //       return this.urlForDeleteRecord(id, modelName, snapshot);
 //     default:
 //       return this._buildURL(id, modelName);
 //   }
 // },
});
