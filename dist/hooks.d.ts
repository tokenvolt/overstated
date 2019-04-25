import Subscriber from './subscriber';
declare const Hooks: {
    store: {
        new: Subscriber<[import("./store").StoreBase<any, any, {}>]>;
    };
};
export default Hooks;
