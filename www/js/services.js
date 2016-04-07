angular.module('starter.services', [])

.factory('Categories', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var categories = [{
    id: 0,
    name: 'Todo para tu Viaje',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Educativo',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Hogar',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Foto y Video',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Muebles, Ropa',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }, {
    id: 6,
    name: 'Salud & Belleza',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 7,
    name: 'Todo para tu Evento',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 8,
    name: 'Bebés',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 9,
    name: 'Moda',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }];

  return {
    all: function() {
      return categories;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(categoryId) {
      for (var i = 0; i < categories.length; i++) {
        if (categories[i].id === parseInt(categoryId)) {
          return categories[i];
        }
      }
      return null;
    }
  };
});
