import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('burger-places', function(){
    this.route('burgerplace', {path: '/:burger-place_id/'}),
    this.route('review', {path: '/:burger-place_id/new-review'}),
    this.route('reviews');
  });
  this.route('about');
  this.route('contact');
  this.route('users', {path: '/'}, function() {
    this.route('new', {path: '/'});
  });
});

export default Router;
