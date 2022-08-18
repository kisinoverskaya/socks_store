
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Favorites', [{
        title: 'Носочек Хагги Вагги',
        color: 'черный',
        src: 'Узор корявый',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Носочек Хагги Вагги',
        color: 'белый',
        src: 'Узор корявый',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Носочек Хагги Вагги',
        color: 'красный',
        src: 'Узор корявый',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      }]);
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Favorites', null, {});

  }
};
