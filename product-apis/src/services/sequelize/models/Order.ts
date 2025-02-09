import { Sequelize, DataTypes, Model } from "sequelize";

export default (sequelize: Sequelize) => {
  class Order extends Model {
    static associate(models: any) {
      Order.belongsToMany(models.Product, {
        through: models.OrderProduct,
        foreignKey: "orderId",
      });
    }
  }

  Order.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.STRING,
        allowNull: true, // In case of guest checkout
      },
      customerName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      shippingAddress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      billingAddress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      totalAmount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: "Pending",
        allowNull: false,
      },
      currency: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "USD",
      },
      paymentMethod: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Visa",
      },
      paymentStatus: {
        type: DataTypes.STRING,
        defaultValue: "Pending",
        allowNull: false,
      },
      trackingNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      deliveryStatus: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      notes: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Order",
      tableName: "orders",
      timestamps: true,
    }
  );

  return Order;
};
