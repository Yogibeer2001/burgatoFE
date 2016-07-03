import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('burger-places');
  this.route('about');
  this.route('contact');
  this.route('users', function() {
    this.route('new', {path: '/signup'});
  });
});

export default Router;
