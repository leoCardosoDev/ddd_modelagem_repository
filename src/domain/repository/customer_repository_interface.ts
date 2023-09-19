import Customer  from "../entity/customer"
import {RepositoryInterface} from "./repository_interface";

export default interface ProductRepositoryInterface extends RepositoryInterface<Customer> {
  
}
