// use registerBoundHelper for dynamic Data, else helper
Ember.Handlebars.registerBoundHelper('formatDate', function(date){
  return moment(date).fromNow();
});