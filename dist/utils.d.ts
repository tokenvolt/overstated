declare const DUMMY_OBJ: {};
declare const DUMMY_ARR: never[];
declare function getStoreInstance<S extends StoreType>(map: ContextMap, store: S | Constructor<S>): S;
declare function isEmptyObject(x: any): any;
declare function isPrimitive(x: any): boolean;
declare function isShallowEqual(a: any, b: any): any;
declare function padLeft(str: string | number, length: number, padding: string | number): string | number;
export { DUMMY_OBJ, DUMMY_ARR, getStoreInstance, isEmptyObject, isPrimitive, isShallowEqual, padLeft };
