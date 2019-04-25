declare function compose<ParentStore extends StoreClass<any, any, any>>(stores: {
    [index: string]: StoreLike;
}): (ParentStore: ParentStore) => ParentStore;
export default compose;
