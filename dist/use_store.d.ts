declare function useStore<S extends StoreType, R>(store: S | Constructor<S>, selector: (store: S) => R, initialState?: {}): R;
export default useStore;
