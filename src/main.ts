import Address from "./aggregate/address";
import CustomerAggregate from "./aggregate/customer";
import Order from "./aggregate/order";
import OrderItem from "./aggregate/order_item";

let customer = new CustomerAggregate("123", "Leonardo");
const address = new Address("Rua 2", 2, "12345-678", "Barueri");
customer.Address = address;
customer.activate();

const item1 = new OrderItem("1", "Item 1", 10);
const item2 = new OrderItem("2", "Item 2", 15);
const order = new Order("1", "123", [item1, item2]);
