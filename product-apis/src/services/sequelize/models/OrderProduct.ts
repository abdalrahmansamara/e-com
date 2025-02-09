import { Sequelize, DataTypes, Model } from "sequelize";

export default (sequelize: Sequelize) => {
  class OrderProduct extends Model {
    static associate(models: any) {}

    static config(sequelize: Sequelize) {
      return {
        sequelize,
        modelName: "OrderProduct",
        tableName: "order_products",
        timestamps: false,
      };
    }
  }

  OrderProduct.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      orderId: {
        type: DataTypes.UUID,
        references: {
          model: "orders",
          key: "id",
        },
        primaryKey: true,
      },
      productId: {
        type: DataTypes.UUID,
        references: {
          model: "products",
          key: "id",
        },
        primaryKey: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
    },
    OrderProduct.config(sequelize)
  );

  return OrderProduct;
};
