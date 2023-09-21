import Order from "../../domain/entity/order";
import OrderRepositoryInterface from "../../domain/repository/order_repository_interface";
import OrderItemModel from "../db/sequelize/model/order_item_model";
import OrderModel from "../db/sequelize/model/order_model";

export default class OrderRepository implements OrderRepositoryInterface {
  async create(entity: Order): Promise<void> {
    await OrderModel.create(
      {
        id: entity.id,
        customer_id: entity.customerId,
        total: entity.total(),
        items: entity.items.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          product_id: item.productId,
          quantity: item.quantity,
        })),
      },
      {
        include: [{ model: OrderItemModel }],
      }
    );
  }

  async update(entity: Order): Promise<void> {
    entity.items.map((item) => {
      let orderItem = OrderItemModel.findOne({ where: { id: item.id } });

      if (orderItem) {
        OrderItemModel.update(
          {
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            productId: item.productId,
          },
          {
            where: { id: item.id },
          }
        );
      }
    });

    await OrderModel.update(
      {
        id: entity.id,
        customer_id: entity.customerId,
        total: entity.total(),
        items: entity.items.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          product_id: item.productId,
          quantity: item.quantity,
        })),
      },
      {
        where: {
          id: entity.id,
        },
      }
    );
  }

  find(id: string): Promise<Order> {
    throw new Error("Method not implemented.");
  }
  findAll(): Promise<Order[]> {
    throw new Error("Method not implemented.");
  }
}
