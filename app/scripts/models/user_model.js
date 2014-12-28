/*global Ember*/
EmberCrud.User = DS.Model.extend({
    name: DS.attr('string'),

    email: DS.attr('string'),

    bio: DS.attr('string'),

    avatarUrl: DS.attr('string'),

    creationDate: DS.attr('string')
});

// probably should be mixed-in...
EmberCrud.User.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
EmberCrud.User.FIXTURES = [{
    id: 1,
    name: 'Mark Walberg',
    email: 'marky@mark.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos perferendis, vitae? Impedit est corrupti vitae doloremque ipsa voluptatum iste, hic, officia labore quis sunt commodi aspernatur provident, unde magnam dicta.',
    avatarUrl: 'http://t0.gstatic.com/images?q=tbn:ANd9GcSRcd9cxuJdhG-N7PlHifwp7P20DBNIBpNDGipw1ZcIf3qvn2sx2hpnN05r',
    creationDate: 'Mon, 26 Aug 2014 20:23:12 GMT'
}, {
    id: 2,
    name: 'Snoop Dog',
    email: 'snoop@wizzle.org',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, nostrum. Eius quod, mollitia earum autem, dolorum necessitatibus perferendis perspiciatis, itaque eaque consequuntur pariatur sit voluptatem. Nobis tenetur nulla dignissimos deleniti!',
    avatarUrl: 'http://jkneb.github.io/ember-crud/assets/images/avatars/jk.jpg',
    creationDate: 'Tue, 28 Aug 2014 18:32:19 GMT'
}, {
    id: 3,
    name: 'Sponge Bob',
    email: 'yellow@pants.co.uk',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, nostrum. Eius quod, mollitia earum autem, dolorum necessitatibus perferendis perspiciatis, itaque eaque consequuntur pariatur sit voluptatem. Nobis tenetur nulla dignissimos deleniti!',
    avatarUrl: 'http://jkneb.github.io/ember-crud/assets/images/avatars/sb.jpg',
    creationDate: 'Wed, 28 Sep 2014 20:32:19 GMT'
}, {
    id: 4,
    name: 'Eva Lopez',
    email: 'eva@lopez.net',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, nostrum. Eius quod, mollitia earum autem, dolorum necessitatibus perferendis perspiciatis, itaque eaque consequuntur pariatur sit voluptatem. Nobis tenetur nulla dignissimos deleniti!',
    avatarUrl: 'http://jkneb.github.io/ember-crud/assets/images/avatars/jk.jpg',
    creationDate: 'Tue, 24 Dec 2014 09:32:19 GMT'
}];