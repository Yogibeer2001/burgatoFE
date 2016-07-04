import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.RSVP.hash({
      burgerPlace: this.store.findRecord('burger-place', params["burger-place_id"]),
      // reviews: this.store.findAll('review', params, params["burger-place_id"])
      reviews: this.store.queryRecord('review', params["burger-place_id"])
    });
  }

});
