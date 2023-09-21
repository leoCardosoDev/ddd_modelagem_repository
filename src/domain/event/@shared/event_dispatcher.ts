import EventDispatcherInterface from "./event_dispatcher_interface";
import EventHandlerInterface from "./event_handler_interface";
import EventInterface from "./event_interface";

export default class EventDispatcher implements EventDispatcherInterface {
  private eventHandlers: { [eventName: string]: EventHandlerInterface[] } = {};

  get getEventHandlers(): { [eventName: string]: EventHandlerInterface[] } {
    return this.eventHandlers;
  }

  register(eventName: string, eventHadler: EventHandlerInterface<EventInterface>): void {
    if(!this.eventHandlers[eventName]){
      this.eventHandlers[eventName] = [];
    }
    this.eventHandlers[eventName].push(eventHadler);
  }

  unregister(eventName: string, eventHadler: EventHandlerInterface<EventInterface>): void {
    throw new Error("Method not implemented.");
  }

  unregisterAll(): void {
    throw new Error("Method not implemented.");
  }

  notify(event: EventInterface): void {
    throw new Error("Method not implemented.");
  }
}