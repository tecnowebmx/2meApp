angular.module('starter.services', [])

.factory('Categories', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var categories = [{
    id: 0,
    name: 'Todo para tu Viaje',
    bussinessName: 'ADOC',
    lastText: 'Nuestros Servicios: Vuelos, Hoteles, Autobuses, Renta de Autos, Paquetes, Charter, Parques, Disney, Las Vegas, Europa, Graduaciones, Bodas, Lunas de Miel, etc.',
    face: 'img/ADOC.jpg',
    web: 'www.adocagency.com',
    mail: 'escobedo@adocagency.com.mx',
    tel: '1521 - 0583'
  }, {
    id: 1,
    name: 'Educativo',
    bussinessName: 'Tecno Web Centro de Capacitación',
    lastText: 'Aprender HTML 5, CSS 3, Javascript, PHP desde cero con el método de trabajo creado por nuestros profesores expertos en el diseño web, la codificación, los negocios y mucho más. Nuestros métodos se actualizan continuamente con lo último en tecnología web para estar constantemente actualizados.',
    face: 'img/tecnoweb.jpg',
    web: 'www.tecnologiasdeinternet.com',
    mail: 'cursos@tecnologiasdeinternet.com',
    tel: '2261 - 8117'
  }, {
    id: 4,
    name: 'Muebles, Ropa',
    bussinessName: 'Glamsi',
    lastText: 'En Glamsi encuentras de todo para toda la familia. Ropa, Accesorios, Moda, Belleza, Decoración para el hogar, Zapatos, etc.',
    face: 'img/glamsi.jpg',
    web: 'N/A',
    mail: 'glamsi@gmail.com',
    tel: '811 - 008 - 8578'
  }, {
    id: 7,
    name: 'Todo para tu Evento',
    bussinessName: 'Rockolas y Karaoke',
    lastText: 'Lo mejor en karaoke, sonido y videos. Más de 70 mil canciones en todos sus géneros para que cantes y bailes. Completamente actualizadas.',
    face: 'img/rockola.jpg',
    web: 'N/A',
    mail: 'rockolas_escobedo@gmail.com',
    tel: '811 - 008 - 8578'
  }, {
    id: 8,
    name: 'Bebés',
    bussinessName: 'Bebé a la Moda',
    lastText: '10% de descuento en todas tus compras. *Aplican restricciones!',
    face: 'img/bebeModa.jpg',
    web: 'N/A',
    mail: 'bebealamoda@gmail.com',
    tel: '1952 - 4988'
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
