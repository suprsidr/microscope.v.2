var stub = [
  {
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  },
  {
    title: 'Meteor',
    url: 'http://meteor.com'
  },
  {
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  },
  {
    title: 'The suprsidr project',
    url: 'http://suprsidr.com',
    author: 'suprsidr'
  }
];

if (Posts.find().count() === 0) {
  stub.every(function(el, i, arr){
    Posts.insert(el);
    return true;
  });

}