// For more information see: http://emberjs.com/guides/routing/

import Ember from 'ember';

var Router = Ember.Router.extend({
  // location: 'history'
});

Router.map(function() {
  this.route("season", { path: "seasons/:season_id" }, function() {
    this.route("outing", { path: "outings/:outing_id" });
  });
  // this.resource('posts');
});

export default Router;
