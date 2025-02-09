'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('order_products', [
      {
        orderId: '1f4d8a5e-3b89-4d9b-a6f2-8e7f3c2c5a1d',
        productId: 'e59c9c84-4a3d-490e-bb75-6f8c1e5d7a26',
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: '1f4d8a5e-3b89-4d9b-a6f2-8e7f3c2c5a1d',
        productId: 'b3f5c1d2-8a47-4a9f-932e-72a2e6a06d9b',
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: '9c2e4b71-f5d4-44d7-9a6c-7e3a1b9f8d52',
        productId: 'e59c9c84-4a3d-490e-bb75-6f8c1e5d7a26',
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: '9c2e4b71-f5d4-44d7-9a6c-7e3a1b9f8d52',
        productId: 'b3f5c1d2-8a47-4a9f-932e-72a2e6a06d9b',
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 'b7e5c9d3-12a4-487d-9c2e-6f4a1d8b7e3f',
        productId: 'e59c9c84-4a3d-490e-bb75-6f8c1e5d7a26',
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 'b7e5c9d3-12a4-487d-9c2e-6f4a1d8b7e3f',
        productId: 'b3f5c1d2-8a47-4a9f-932e-72a2e6a06d9b',
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('order_products', null, {});
  },
};
