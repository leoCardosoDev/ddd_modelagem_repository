import Address from "../value_object/address";

export default class Customer {
  private _id: string;
  private _name: string;
  private _address!: Address;
  private _active: boolean = false;
  private _rewardPoints: number = 0;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
    this.validate();
  }

  get name(): string {
    return this._name;
  }

  get address(): Address {
    return this._address;
  }

  get id():string {
    return this._id;
  }

  get rewardPoints(): number {
    return this._rewardPoints;
  }

  validate(){
    if (this._id.length === 0) { 
      throw new Error("ID is required!");
    }

    if (this._name.length === 0) { 
      throw new Error("Name is required!");
    }
  }

  changeName(name: string) {
    this._name = name;
    this.validate();
  }
  
  changeAddress(address: Address) {
    this._address = address;
    this.validate();
  }
  

  isActive() {
    return this._active;
  }

  activate(){
    if(this._address === undefined) {
      throw new Error("Address is mandatory to activate as customer");
    }
    this._active = true;
  }

  set Address(address: Address) {
    this._address = address;
  }
  
  deactivate(){
    this._active = false;
  }

  addRewardPoints(points:number) {
    this._rewardPoints += points;
  }
}
