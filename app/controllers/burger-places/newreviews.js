// import Ember from 'ember';
//
// export default Ember.Controller.extend({
//   actions: {
//
//       createReview() {
//         const bun = this.get('bun');
//         const patty = this.get('patty');
//         const chips = this.get('chips');
//         const atmosphere = this.get('atmosphere');
//         const comment = this.get('comment');
//         const value = this.get('value');
//         // const userId = this.get('user_id');
//         const burgerPlaceId = this.get('burger_place_id');
//
//         const newreview = this.store
//                               .createRecord('review', {
//                                 bun: bun,
//                                 patty:patty,
//                                 chips:chips,
//                                 atmosphere:atmosphere, comment:comment,
//                                 value:value,
//                                 userId:user_id,  burgerPlaceId:burger_place_id });
//
//             newreview.save().then(() => {
//             // Success callback
//             this.transitionToRoute('burger-places/:burger-places_id');
//           }).catch((error) => {
//             this.set('responseMessage', error);
//           });
//         }
//             // Error callback
//             // this.set('responseMessage', 'Error in your form');
//           });
// // catch((error) => {
// //         this.set('responseMessage', error);
// //       }).then(function(success){
// //         this.set('responseMessage', 'Thank you! We\'ve just created a new account for you');
// //       });
//
//         // this.set('responseMessage', 'Thank you! We\'ve just created a new account for you');
//         // this.set('emailAddress', '');
// deleteReview('review', reviews_id)
//     }
// });
