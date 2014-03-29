App = Ember.Application.create();

App.Router.map(function(){
  this.resource('coffees', function(){
    this.resource('coffee', { path:'/:coffee_id' });
  });
});

App.IndexRoute = Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo('coffees');
  }
});

App.CoffeesRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('coffee');
  }
});

App.CoffeeRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('coffee', params['coffee_id']);
  }
});
