// Fixture data
if (Posts.find().count() === 0) {
  var now = new Date().getTime();

  // create two users
  var tomId = Meteor.users.insert({
    profile: { name: 'Tom Coleman' }
  });
  var tom = Meteor.users.findOne(tomId);
  var sachaId = Meteor.users.insert({
    profile: { name: 'Sacha Greif' }
  });
  var sacha = Meteor.users.findOne(sachaId);

  var telescopeId = Posts.insert({
    title: 'Introducing Telescope',
    userId: sacha._id,
    author: sacha.profile.name,
    url: 'http://sachagreif.com/introducing-telescope/',
    body: 'Bacon ipsum dolor amet ham beef hamburger short loin beef ribs landjaeger doner shoulder strip steak porchetta. Brisket chicken pig kielbasa porchetta leberkas, meatball shank hamburger doner pancetta pastrami venison beef. Rump chicken shoulder fatback, pastrami meatball short ribs. Doner pork loin beef ribs ground round meatloaf. T-bone drumstick kielbasa, tenderloin short loin capicola doner chuck boudin. Andouille swine sirloin turkey pastrami meatball sausage. Pork chop turkey beef jerky drumstick, filet mignon strip steak beef ribs tenderloin.',
    submitted: new Date(now - 7 * 3600 * 1000),
    commentsCount: 2,
    upvoters: [],
    votes: 0
  });

  Comments.insert({
    postId: telescopeId,
    userId: tom._id,
    author: tom.profile.name,
    submitted: new Date(now - 5 * 3600 * 1000),
    body: 'Interesting project Sacha, can I get involved?'
  });

  Comments.insert({
    postId: telescopeId,
    userId: sacha._id,
    author: sacha.profile.name,
    submitted: new Date(now - 3 * 3600 * 1000),
    body: 'You sure can Tom!'
  });

  Posts.insert({
    title: 'Meteor',
    userId: tom._id,
    author: tom.profile.name,
    url: 'http://meteor.com',
    body: 'Bacon ipsum dolor amet ham beef hamburger short loin beef ribs landjaeger doner shoulder strip steak porchetta. Brisket chicken pig kielbasa porchetta leberkas, meatball shank hamburger doner pancetta pastrami venison beef. Rump chicken shoulder fatback, pastrami meatball short ribs. Doner pork loin beef ribs ground round meatloaf. T-bone drumstick kielbasa, tenderloin short loin capicola doner chuck boudin. Andouille swine sirloin turkey pastrami meatball sausage. Pork chop turkey beef jerky drumstick, filet mignon strip steak beef ribs tenderloin.',
    submitted: new Date(now - 10 * 3600 * 1000),
    commentsCount: 0,
    upvoters: [],
    votes: 0
  });

  Posts.insert({
    title: 'The Meteor Book',
    userId: tom._id,
    author: tom.profile.name,
    url: 'http://themeteorbook.com',
    body: 'Bacon ipsum dolor amet ham beef hamburger short loin beef ribs landjaeger doner shoulder strip steak porchetta. Brisket chicken pig kielbasa porchetta leberkas, meatball shank hamburger doner pancetta pastrami venison beef. Rump chicken shoulder fatback, pastrami meatball short ribs. Doner pork loin beef ribs ground round meatloaf. T-bone drumstick kielbasa, tenderloin short loin capicola doner chuck boudin. Andouille swine sirloin turkey pastrami meatball sausage. Pork chop turkey beef jerky drumstick, filet mignon strip steak beef ribs tenderloin.',
    submitted: new Date(now - 12 * 3600 * 1000),
    commentsCount: 0,
    upvoters: [],
    votes: 0
  });

  for (var i = 0; i < 10; i++) {
    Posts.insert({
      title: 'Test post #' + i,
      author: sacha.profile.name,
      userId: sacha._id,
      url: 'http://google.com/?q=test-' + i,
      body: 'Bacon ipsum dolor amet ham beef hamburger short loin beef ribs landjaeger doner shoulder strip steak porchetta. Brisket chicken pig kielbasa porchetta leberkas, meatball shank hamburger doner pancetta pastrami venison beef. Rump chicken shoulder fatback, pastrami meatball short ribs. Doner pork loin beef ribs ground round meatloaf. T-bone drumstick kielbasa, tenderloin short loin capicola doner chuck boudin. Andouille swine sirloin turkey pastrami meatball sausage. Pork chop turkey beef jerky drumstick, filet mignon strip steak beef ribs tenderloin.',
      submitted: new Date(now - i * 3600 * 1000 + 1),
      commentsCount: 0,
      upvoters: [],
      votes: 0
    });
  }
}// Fixture data
if (Posts.find().count() === 0) {
  var now = new Date().getTime();

  // create two users
  var tomId = Meteor.users.insert({
    profile: { name: 'Tom Coleman' }
  });
  var tom = Meteor.users.findOne(tomId);
  var sachaId = Meteor.users.insert({
    profile: { name: 'Sacha Greif' }
  });
  var sacha = Meteor.users.findOne(sachaId);

  var telescopeId = Posts.insert({
    title: 'Introducing Telescope',
    userId: sacha._id,
    author: sacha.profile.name,
    url: 'http://sachagreif.com/introducing-telescope/',
    body: 'Bacon ipsum dolor amet ham beef hamburger short loin beef ribs landjaeger doner shoulder strip steak porchetta. Brisket chicken pig kielbasa porchetta leberkas, meatball shank hamburger doner pancetta pastrami venison beef. Rump chicken shoulder fatback, pastrami meatball short ribs. Doner pork loin beef ribs ground round meatloaf. T-bone drumstick kielbasa, tenderloin short loin capicola doner chuck boudin. Andouille swine sirloin turkey pastrami meatball sausage. Pork chop turkey beef jerky drumstick, filet mignon strip steak beef ribs tenderloin.',
    submitted: new Date(now - 7 * 3600 * 1000),
    commentsCount: 2,
    upvoters: [],
    votes: 0
  });

  Comments.insert({
    postId: telescopeId,
    userId: tom._id,
    author: tom.profile.name,
    submitted: new Date(now - 5 * 3600 * 1000),
    body: 'Interesting project Sacha, can I get involved?'
  });

  Comments.insert({
    postId: telescopeId,
    userId: sacha._id,
    author: sacha.profile.name,
    submitted: new Date(now - 3 * 3600 * 1000),
    body: 'You sure can Tom!'
  });

  Posts.insert({
    title: 'Meteor',
    userId: tom._id,
    author: tom.profile.name,
    url: 'http://meteor.com',
    body: 'Bacon ipsum dolor amet ham beef hamburger short loin beef ribs landjaeger doner shoulder strip steak porchetta. Brisket chicken pig kielbasa porchetta leberkas, meatball shank hamburger doner pancetta pastrami venison beef. Rump chicken shoulder fatback, pastrami meatball short ribs. Doner pork loin beef ribs ground round meatloaf. T-bone drumstick kielbasa, tenderloin short loin capicola doner chuck boudin. Andouille swine sirloin turkey pastrami meatball sausage. Pork chop turkey beef jerky drumstick, filet mignon strip steak beef ribs tenderloin.',
    submitted: new Date(now - 10 * 3600 * 1000),
    commentsCount: 0,
    upvoters: [],
    votes: 0
  });

  Posts.insert({
    title: 'The Meteor Book',
    userId: tom._id,
    author: tom.profile.name,
    url: 'http://themeteorbook.com',
    body: 'Bacon ipsum dolor amet ham beef hamburger short loin beef ribs landjaeger doner shoulder strip steak porchetta. Brisket chicken pig kielbasa porchetta leberkas, meatball shank hamburger doner pancetta pastrami venison beef. Rump chicken shoulder fatback, pastrami meatball short ribs. Doner pork loin beef ribs ground round meatloaf. T-bone drumstick kielbasa, tenderloin short loin capicola doner chuck boudin. Andouille swine sirloin turkey pastrami meatball sausage. Pork chop turkey beef jerky drumstick, filet mignon strip steak beef ribs tenderloin.',
    submitted: new Date(now - 12 * 3600 * 1000),
    commentsCount: 0,
    upvoters: [],
    votes: 0
  });

  for (var i = 0; i < 50; i++) {
    Posts.insert({
      title: 'Test post #' + i,
      author: sacha.profile.name,
      userId: sacha._id,
      url: 'http://google.com/?q=test-' + i,
      body: 'Bacon ipsum dolor amet ham beef hamburger short loin beef ribs landjaeger doner shoulder strip steak porchetta. Brisket chicken pig kielbasa porchetta leberkas, meatball shank hamburger doner pancetta pastrami venison beef. Rump chicken shoulder fatback, pastrami meatball short ribs. Doner pork loin beef ribs ground round meatloaf. T-bone drumstick kielbasa, tenderloin short loin capicola doner chuck boudin. Andouille swine sirloin turkey pastrami meatball sausage. Pork chop turkey beef jerky drumstick, filet mignon strip steak beef ribs tenderloin.',
      submitted: new Date(now - i * 3600 * 1000 + 1),
      commentsCount: 0,
      upvoters: [],
      votes: 0
    });
  }
}