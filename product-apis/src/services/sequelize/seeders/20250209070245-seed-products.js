'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products', [
      {
        id: 'b3f5c1d2-8a47-4a9f-932e-72a2e6a06d9b',
        name: 'Product A',
        price: 100.0,
        stock: 4000,
        description: 'Product A description',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'e59c9c84-4a3d-490e-bb75-6f8c1e5d7a26',
        name: 'Product B',
        price: 200.0,
        stock: 4000,
        description: 'Product B description',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'a1d7e3f9-5c4b-47f8-a8c2-98f5d62b9e7e',
        name: 'Product C',
        price: 150.0,
        stock: 4000,
        description: 'Product C description',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  },
};
