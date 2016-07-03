import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {

      createUser() {
        const email = this.get('emailAddress');
        const password = this.get('password');
        const newUser = this.store.createRecord('user', { email: email, password:password });



            newUser.save().then(() => {
            // Success callback
            this.transitionToRoute('burger-places');
          }).catch((error) => {
            this.set('responseMessage', error);
          });
        }
            // Error callback
            // this.set('responseMessage', 'Error in your form');
          // });
// catch((error) => {
//         this.set('responseMessage', error);
//       }).then(function(success){
//         this.set('responseMessage', 'Thank you! We\'ve just created a new account for you');
//       });

        // this.set('responseMessage', 'Thank you! We\'ve just created a new account for you');
        // this.set('emailAddress', '');

    }
});
