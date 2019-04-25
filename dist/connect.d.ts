declare function connect(options: ConnectOptionsObj & Pick<ConnectOptionsObj, 'render'>): FunctionComponent;
declare function connect(options: StoreLike | ConnectOptionsObj): (Component: Component) => FunctionComponent;
export default connect;
