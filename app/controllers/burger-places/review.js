
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
        const burgerPlaceId = this.get('model').get('id');
        // const userId = this.get('user_id');
// console.log(this.get('model').get('id'));
let burgerplace = this.get('store').peekRecord('burger-place', burgerPlaceId);
        const newreview = this.store
                              .createRecord('review', {
                                bun: bun,
                                patty:patty,
                                chips:chips,
                                atmosphere:atmosphere,
                                comment:comment,
                                value:value,
                                burgerPlace:burgerplace
                               });

            newreview.save().then(() => {
            // Success callback
            this.transitionToRoute('/:burger-places_id');
          }).catch((error) => {
            this.set('responseMessage', error);
          });
        }
          // });
        // deleteReview('review', reviews_id);
        }
});
