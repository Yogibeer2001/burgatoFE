import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('burger-place', params["burger-place_id"]);

    // return Ember.RSVP.hash({
    //   burgerPlace: this.store.findRecord('burger-place', params["burger-place_id"]),
    //   // reviews: this.store.findAll('review', params["burger-place_id"])
    //   // reviews: this.store.queryRecord('review', params["burger-place_id"])
    // });
  }

});
