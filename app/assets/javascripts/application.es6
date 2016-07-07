//= require jquery
//= require jquery_ujs
//= require ./environment
//= require ember
//= require ember-data
//= require twitter/bootstrap
//= require ember-rails/application
//
//= require ./cdi-memorial-ember
//= require_self

import CdiMemorialEmber from 'cdi-memorial-ember';
// import config from 'environment'; // You can use `config` for application specific variables such as API key, etc.

const App = CdiMemorialEmber.extend({
});
App.create();
