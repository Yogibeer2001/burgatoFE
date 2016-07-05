import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('burger-places', {path: '/'}, function(){
    this.route('burgerplace', {path: '/burger-places/:burger-place_id/'});
    this.route('review', {path: '/:burger-place_id/new-review'});
    // this.route('newreview', {path: '/:burger-place_id/new-review'});

  });
  this.route('about');
  this.route('contact');
  this.route('users', {path: '/signup'}, function() {
    this.route('new', {path: '/signup'});
  });
});

export default Router;
