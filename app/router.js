import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('burger-places', function(){
    this.route('burgerplace', {path: '/:burger-place_id/'});
    this.route('reviews', {path: '/:burger-place_id/reviews'});
  });
  this.route('about');
  this.route('contact');
  this.route('users', function() {
    this.route('new', {path: '/signup'});
  });
});

export default Router;
