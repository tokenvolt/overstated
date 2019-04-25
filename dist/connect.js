"use strict";
/* IMPORT */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var context_1 = require("./context");
var store_1 = require("./store");
var utils_1 = require("./utils");
/* CONNECT COMPONENT */
var Connect = /** @class */ (function (_super) {
    __extends(Connect, _super);
    function Connect() {
        /* VARIABLES */
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mounted = false;
        _this.data = [{}, []];
        _this.dataInited = false;
        /* EVENTS */
        _this.onUpdate = function () {
            return new Promise(function (res) {
                if (!_this.mounted)
                    return res();
                _this.setState(utils_1.DUMMY_OBJ, res);
            });
        };
        return _this;
    }
    /* LIFECYCLE */
    Connect.prototype.componentDidMount = function () {
        this.mounted = true;
    };
    Connect.prototype.componentWillUnmount = function () {
        this.mounted = false;
        this.unsubscribe();
    };
    Connect.prototype.shouldComponentUpdate = function (nextProps) {
        var nextData = this.getData(nextProps), shouldUpdate = !this.props.options.selector || !utils_1.isShallowEqual(this.data[0], nextData[0]);
        this.updateData(nextData);
        return shouldUpdate;
    };
    /* API */
    Connect.prototype.unsubscribe = function () {
        this.updateSubscriptions(this.data[1], utils_1.DUMMY_ARR);
    };
    Connect.prototype.updateSubscriptions = function (unsubscribe, subscribe) {
        if (unsubscribe.length === subscribe.length && unsubscribe.every(function (store, index) { return store === subscribe[index]; }))
            return; // The most common scenario after the first render: nothing changes
        for (var i = 0, l = unsubscribe.length; i < l; i++) {
            var store = unsubscribe[i];
            if (subscribe.indexOf(store) >= 0)
                continue; // It will be re-subscribed-to later on
            store.unsubscribe(this.onUpdate);
        }
        for (var i = 0, l = subscribe.length; i < l; i++) {
            subscribe[i].subscribe(this.onUpdate);
        }
    };
    Connect.prototype.initData = function () {
        if (this.dataInited)
            return;
        this.updateData(this.getData());
        this.dataInited = true;
    };
    Connect.prototype.updateData = function (data) {
        this.updateSubscriptions(this.data[1], data[1]);
        this.data = data;
    };
    Connect.prototype.getData = function (_a) {
        var _this = this;
        var _b = _a === void 0 ? this.props : _a, options = _b.options, componentProps = _b.componentProps;
        var selector = options.selector, store = options.store, stores = options.stores;
        var props = componentProps, instances = [];
        if (store) {
            props.store = utils_1.getStoreInstance(this.props.context, store);
            instances.push(props.store);
        }
        if (stores) {
            props.stores = stores.map(function (store) { return utils_1.getStoreInstance(_this.props.context, store); });
            instances = instances.concat(props.stores);
        }
        if (selector) {
            props = selector(props);
        }
        return [props, instances];
    };
    /* RENDER */
    Connect.prototype.render = function () {
        if (!this.dataInited)
            this.initData();
        return React.createElement(this.props.component, this.data[0]); //TSC
    };
    return Connect;
}(React.Component));
function connect(options) {
    if (options === void 0) { options = {}; }
    if (typeof options === 'function' || options instanceof store_1.default)
        options = { store: options };
    function wrapper(Component) {
        return function (props) { return (React.createElement(context_1.default.Consumer, null, function (context) {
            if (!context)
                throw new Error('You probably forgot to wrap your app with <Provider>');
            return React.createElement(Connect, { options: options, context: context, component: Component, componentProps: Object.assign({}, props) });
        })); };
    }
    return options.render ? wrapper(options.render) : wrapper;
}
/* EXPORT */
exports.default = connect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25uZWN0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsWUFBWTs7Ozs7Ozs7Ozs7Ozs7O0FBRVosNkJBQStCO0FBQy9CLHFDQUFnQztBQUNoQyxpQ0FBNEI7QUFDNUIsaUNBQStFO0FBRS9FLHVCQUF1QjtBQUV2QjtJQUFzQiwyQkFBa0g7SUFBeEk7UUFFRSxlQUFlO1FBRmpCLHFFQXlJQztRQXJJQyxhQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLFVBQUksR0FBZ0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDN0IsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUE2QjVCLFlBQVk7UUFFWixjQUFRLEdBQUc7WUFFVCxPQUFPLElBQUksT0FBTyxDQUFHLFVBQUEsR0FBRztnQkFDdEIsSUFBSyxDQUFDLEtBQUksQ0FBQyxPQUFPO29CQUFHLE9BQU8sR0FBRyxFQUFHLENBQUM7Z0JBQ25DLEtBQUksQ0FBQyxRQUFRLENBQUcsaUJBQVMsRUFBRSxHQUFHLENBQUUsQ0FBQztZQUNuQyxDQUFDLENBQUMsQ0FBQztRQUVMLENBQUMsQ0FBQTs7SUE2RkgsQ0FBQztJQWpJQyxlQUFlO0lBRWYsbUNBQWlCLEdBQWpCO1FBRUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFFdEIsQ0FBQztJQUVELHNDQUFvQixHQUFwQjtRQUVFLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBRXJCLElBQUksQ0FBQyxXQUFXLEVBQUcsQ0FBQztJQUV0QixDQUFDO0lBRUQsdUNBQXFCLEdBQXJCLFVBQXdCLFNBQVM7UUFFL0IsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBRyxTQUFTLENBQUUsRUFDckMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLENBQUMsc0JBQWMsQ0FBRyxJQUFJLENBQUMs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