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
var autosuspend_1 = require("./autosuspend");
var hooks_1 = require("./hooks");
var subscriber_1 = require("./subscriber");
/* STORE */
var StoreBase = /** @class */ (function (_super) {
    __extends(StoreBase, _super);
    function StoreBase() {
        var _this = _super.call(this) || this;
        _this.middlewares = [];
        _this.__middlewaresCounter = 0;
        _this.__suspendCounter = 0;
        _this.__suspendedUpdate = false;
        _this.state = _this.state || {}; //TSC
        hooks_1.default.store.new.emit(_this);
        return _this;
    }
    StoreBase.prototype.emit = function (callback) {
        this.__suspendedUpdate = this.isSuspended();
        if (this.__suspendedUpdate || this.__middlewaresCounter) {
            if (callback)
                callback();
            return Promise.resolve();
        }
        var refresh = Promise.all(this.listeners.map(function (listener) { return listener(); }));
        return refresh.then(function () {
            if (callback)
                return callback();
        });
    };
    StoreBase.prototype.setState = function (updater, callback) {
        var _this = this;
        var nextState = (typeof updater === 'function') ? updater(this.state) : updater;
        if (nextState == null) {
            if (callback)
                callback();
            return Promise.resolve();
        }
        var prevState = this.state;
        this.state = Object.assign({}, this.state, nextState);
        if (this.middlewares.length) {
            this.__middlewaresCounter++;
            this.__suspendedUpdate = true;
            this.suspend();
            var result = Promise.resolve();
            var _loop_1 = function (i, l) {
                result.then(function () { return _this.middlewares[i].call(_this, prevState); });
            };
            for (var i = 0, l = this.middlewares.length; i < l; i++) {
                _loop_1(i, l);
            }
            var end = function () {
                _this.__middlewaresCounter--;
                return _this.unsuspend(callback);
            };
            return result.then(end).catch(end);
        }
        else {
            return this.emit(callback);
        }
    };
    StoreBase.prototype.autosuspend = function (options) {
        if (options === void 0) { options = this.autosuspendOptions; }
        autosuspend_1.default(this, options);
    };
    StoreBase.prototype.suspend = function () {
        this.__suspendCounter++;
    };
    StoreBase.prototype.unsuspend = function (callback) {
        if (!this.isSuspended()) {
            if (callback)
                callback();
            return Promise.resolve();
        }
        this.__suspendCounter--;
        if (this.__suspendedUpdate && !this.isSuspended())
            return this.emit(callback);
        if (callback)
            callback();
        return Promise.resolve();
    };
    StoreBase.prototype.isSuspended = function () {
        return !!this.__suspendCounter;
    };
    StoreBase.prototype.registerMiddleware = function (middleware) {
        var index = this.middlewares.indexOf(middleware);
        if (index >= 0)
            return;
        this.middlewares.push(middleware);
    };
    StoreBase.prototype.unregisterMiddleware = function (middleware) {
        var index = this.middlewares.indexOf(middleware);
        if (index < 0)
            return;
        this.middlewares.splice(index, 1);
    };
    return StoreBase;
}(subscriber_1.default));
exports.StoreBase = StoreBase;
var Store = StoreBase;
exports.Store = Store;
/* EXPORT */
exports.default = Store;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFlBQVk7Ozs7Ozs7Ozs7Ozs7OztBQUVaLDZDQUF3QztBQUN4QyxpQ0FBNEI7QUFDNUIsMkNBQXNDO0FBRXRDLFdBQVc7QUFFWDtJQUFzSyw2QkFBVTtJQVk5SztRQUFBLFlBRUUsaUJBQVEsU0FNVDtRQWRELGlCQUFXLEdBQXdCLEVBQUUsQ0FBQztRQUU1QiwwQkFBb0IsR0FBVyxDQUFDLENBQUM7UUFDakMsc0JBQWdCLEdBQVcsQ0FBQyxDQUFDO1FBQzdCLHVCQUFpQixHQUFZLEtBQUssQ0FBQztRQU0zQyxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxLQUFLLElBQUksRUFBVyxDQUFDLENBQUMsS0FBSztRQUU3QyxlQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUcsS0FBSSxDQUFFLENBQUM7O0lBRWhDLENBQUM7SUFFRCx3QkFBSSxHQUFKLFVBQU8sUUFBbUI7UUFFeEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUcsQ0FBQztRQUU3QyxJQUFLLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUc7WUFFekQsSUFBSyxRQUFRO2dCQUFHLFFBQVEsRUFBRyxDQUFDO1lBRTVCLE9BQU8sT0FBTyxDQUFDLE9BQU8sRUFBRyxDQUFDO1NBRTNCO1FBRUQsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBRyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsRUFBRyxFQUFYLENBQVcsQ0FBRSxDQUFFLENBQUM7UUFFL0UsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFHO1lBRXBCLElBQUssUUFBUTtnQkFBRyxPQUFPLFFBQVEsRUFBRyxDQUFDO1FBRXJDLENBQUMsQ0FBQyxDQUFD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