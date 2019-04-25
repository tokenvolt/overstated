import Subscriber from './subscriber';
declare class StoreBase<State extends {} = {}, ParentStore extends (StoreType | undefined) = undefined, ChildrenStores extends {
    [index: string]: StoreType;
} = {}> extends Subscriber {
    state: State;
    ctx: ParentStore;
    autosuspendOptions?: AutosuspendOptions | false;
    middlewares: Middleware<State>[];
    protected __middlewaresCounter: number;
    protected __suspendCounter: number;
    protected __suspendedUpdate: boolean;
    constructor();
    emit(callback?: Function): Promise<void>;
    setState(updater: StateUpdater<State>, callback?: Function): Promise<void>;
    autosuspend(options?: AutosuspendOptions | false | undefined): void;
    suspend(): void;
    unsuspend(callback?: Function): Promise<void>;
    isSuspended(): boolean;
    registerMiddleware(middleware: Middleware<State>): void;
    unregisterMiddleware(middleware: Middleware<State>): void;
}
declare type Store<State extends {} = {}, ParentStore extends (StoreType | undefined) = undefined, ChildrenStores extends ExcludeProps<Store> = {}> = StoreBase<State, ParentStore, ChildrenStores> & ChildrenStores;
declare const Store: {
    prototype: Store<any, any, {}>;
    new <State extends {} = {}, ParentStore extends (StoreType | undefined) = undefined, ChildrenStores extends ExcludeProps<Store> = {}>(): Store<State, ParentStore, ChildrenStores>;
};
export default Store;
export { StoreBase, Store };
