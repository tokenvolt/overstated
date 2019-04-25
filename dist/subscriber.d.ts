declare class Subscriber<ListenerArgs extends any[] = []> {
    listeners: SubscriberListener<ListenerArgs>[];
    subscribe(listener: SubscriberListener<ListenerArgs>): void;
    unsubscribe(listener: SubscriberListener<ListenerArgs>): void;
    emit(...args: ListenerArgs): void;
}
export default Subscriber;
