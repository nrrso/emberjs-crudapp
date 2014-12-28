EmberCrud.UsersCreateController = Em.ObjectController.extend({
  actions: {
    save: function(){
      var user = this.get('model');
      user.set('creationDate', new Date());

      user.save();

      this.transitionToRoute('user', user);
    }
  }
});
