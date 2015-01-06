EmberCrud.ApplicationRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    actions: {
        showModal: function(name){
        this.controllerFor(name).set('modalVisible', true);
      }
    }
});
