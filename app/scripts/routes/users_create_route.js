EmberCrud.UsersCreateRoute = Ember.Route.extend({
  model: function(){
    return this.store.createRecord('user');
  },

  renderTemplate: function(){
    this.render('user.edit', {
      controller: 'usersCreate'
    });
  }
});