EmberCrud.ModalView = Ember.View.extend({
  layoutName: 'modal_layout',
  tagName: 'div',
  classNames: ['modal', 'whatever'],
  classNameBindings: ['controller.modalVisible:shown:hidden'],

  actions: {
    hideModal: function(){
      this.get('controller').set('modalVisible', false);
    }
  }
});