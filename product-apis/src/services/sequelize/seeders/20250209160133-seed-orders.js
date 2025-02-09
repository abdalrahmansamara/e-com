'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('orders', [
      {
        id: '1f4d8a5e-3b89-4d9b-a6f2-8e7f3c2c5a1d',
        user_id: '3f47c2a7-8d4e-4c91-b89a-0b6a6fcb4f98',
        customerName: 'James murry',
        shippingAddress: 'somewhere',
        billingAddress: 'somewhere again',
        totalAmount: 500,
        status: 'Pending',
        currency: 'USD',
        paymentMethod: 'Visa',
        paymentStatus: 'Pending',
        trackingNumber: 'jsx-123',
        deliveryStatus: 'In Transit',
        notes: 'Note A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '9c2e4b71-f5d4-44d7-9a6c-7e3a1b9f8d52',
        user_id: 'b21a5d3e-2f9b-47b6-8f44-d1f7d4a6c091',
        customerName: 'Brian Quinn',
        shippingAddress: 'somewhere',
        billingAddress: 'somewhere again',
        totalAmount: 500,
        status: 'Pending',
        currency: 'USD',
        paymentMethod: 'PayPal',
        paymentStatus: 'Pending',
        trackingNumber: 'jsx-456',
        deliveryStatus: 'In Transit',
        notes: 'Note B',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'b7e5c9d3-12a4-487d-9c2e-6f4a1d8b7e3f',
        user_id: '8e5c1dbf-4a32-42b2-87e1-8c6c8d8d75a3',
        customerName: 'Sal Volcano',
        shippingAddress: 'somewhere',
        billingAddress: 'somewhere again',
        totalAmount: 500,
        status: 'Pending',
        currency: 'USD',
        paymentMethod: 'Cash',
        paymentStatus: 'Pending',
        trackingNumber: 'jsx-789',
        deliveryStatus: 'In Transit',
        notes: 'Note C',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('orders', null, {});
  },
};
