/// <reference types="react" />
declare type ExcludeProps<T> = {
    [P in keyof T]?: 'Error: You cannot use this particular property name' & number;
} & {
    [prop: string]: any;
};
declare type FunctionComponent<P = any> = React.FunctionComponent<P>;
declare type Component<P = any> = typeof React.Component | FunctionComponent<P>;
declare type StoreType<S = any, PS = any, CS = {}> = import('./store').default<S, PS, CS>;
declare type StoreClass<S = any, PS = any, CS = {}> = Constructor<StoreType<S, PS, CS>>;
declare type StoreLike = StoreType | StoreClass;
declare type SubscriberListener<ListenerArgs extends any[] = []> = (...args: ListenerArgs) => any;
declare type Middleware<State> = (prevState: Readonly<State>) => any;
declare type StateUpdater<State> = ((prevState: Readonly<State>) => Partial<State> | null | undefined) | Partial<State> | null | undefined;
declare type ConnectOptionsObj = {
    render?: Component;
    selector?: Function;
    store?: StoreLike;
    stores?: StoreLike[];
};
declare type ConnectOptions = StoreLike | ConnectOptionsObj;
declare type ConnectProps = {
    store?: StoreType;
    stores?: StoreType[];
    [index: string]: any;
};
declare type ConnectData = [ConnectProps, StoreType[]];
declare type DebugOptions = {
    collapsed?: boolean;
    logNewStores?: boolean;
    logStateDiffChanges?: boolean;
    logStateFullChanges?: boolean;
};
declare type ContextMap = Map<Function, StoreType>;
declare type Context = ContextMap | null;
declare type AutosuspendOptions = {
    methods?: RegExp;
    bubble?: boolean;
    children?: boolean;
};
interface Constructor<Type> {
    new (...args: any[]): Type;
}
