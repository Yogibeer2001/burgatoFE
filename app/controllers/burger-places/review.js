
import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {

      createReview() {
        const bun = this.get('bun');
        const patty = this.get('patty');
        const chips = this.get('chips');
        const atmosphere = this.get('atmosphere');
        const comment = this.get('comment');
        const value = this.get('value');
        const burgerPlaceId = this.get('burgerPlaceId');
        // const userId = this.get('user_id');
        // const burgerPlaceId = this.get('burger_place_id');

        const newreview = this.store
                              .createRecord('review', {
                                bun: bun,
                                patty:patty,
                                chips:chips,
                                atmosphere:atmosphere, comment:comment,
                                value:value,
                                burgerPlaceId:burgerPlaceId });

            newreview.save().then(() => {
            // Success callback
            this.transitionToRoute('burger-places/:burger-places_id');
          }).catch((error) => {
            this.set('responseMessage', error);
          });
        }
          // });
        // deleteReview('review', reviews_id);
        }
});
