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
var store_1 = require("./store");
var utils_1 = require("./utils");
/* COMPOSE */
function compose(stores) {
    return function (ParentStore) {
        var ComposedStore = /** @class */ (function (_super) {
            __extends(ComposedStore, _super);
            function ComposedStore() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _this = _super.apply(this, args) || this;
                var _loop_1 = function (name_1) {
                    var store = stores[name_1], instance = store instanceof store_1.default ? store : new store(); //FIXME: Use `getStoreInstance` instead, how can we do it while supporting nested `<Provider>`?
                    instance.ctx = this_1;
                    this_1[name_1] = instance;
                    var self_1 = this_1, _setState = instance.setState;
                    instance.setState = function setState() {
                        return _setState.apply(instance, arguments).then(function () { return self_1.setState(utils_1.DUMMY_OBJ); });
                    };
                };
                var this_1 = this;
                for (var name_1 in stores) {
                    _loop_1(name_1);
                }
                return _this;
            }
            return ComposedStore;
        }(ParentStore));
        ;
        try {
            Object.defineProperty(ComposedStore, 'name', { value: ParentStore.name });
        }
        catch (_a) { }
        return ComposedStore; //TSC
    };
}
/* EXPORT */
exports.default = compose;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21wb3NlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7QUFFWixpQ0FBNEI7QUFDNUIsaUNBQWtDO0FBRWxDLGFBQWE7QUFFYixTQUFTLE9BQU8sQ0FBa0QsTUFBc0M7SUFFdEcsT0FBTyxVQUFXLFdBQXdCO1FBRXhDO1lBQTRCLGlDQUFXO1lBRXJDO2dCQUFjLGNBQU87cUJBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztvQkFBUCx5QkFBTzs7Z0JBQXJCLCtCQUVhLElBQUksVUFxQmhCO3dDQW5CVyxNQUFJO29CQUVaLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFJLENBQUMsRUFDcEIsUUFBUSxHQUFHLEtBQUssWUFBWSxlQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLEVBQUcsQ0FBQyxDQUFDLCtGQUErRjtvQkFFL0osUUFBUSxDQUFDLEdBQUcsU0FBTyxDQUFDO29CQUNwQixPQUFLLE1BQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQztvQkFFdEIsSUFBTSxNQUFJLFNBQU8sRUFDWCxTQUFTLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztvQkFFcEMsUUFBUSxDQUFDLFFBQVEsR0FBRyxTQUFTLFFBQVE7d0JBRW5DLE9BQU8sU0FBUyxDQUFDLEtBQUssQ0FBRyxRQUFRLEVBQUUsU0FBUyxDQUFFLENBQUMsSUFBSSxDQUFHLGNBQU0sT0FBQSxNQUFJLENBQUMsUUFBUSxDQUFHLGlCQUFTLENBQUUsRUFBM0IsQ0FBMkIsQ0FBRSxDQUFDO29CQUU1RixDQUFDLENBQUM7OztnQkFmSixLQUFNLElBQUksTUFBSSxJQUFJLE1BQU07NEJBQWQsTUFBSTtpQkFpQmI7O1lBRUgsQ0FBQztZQUVILG9CQUFDO1FBQUQsQ0FBQyxBQTNCRCxDQUE0QixXQUFXLEdBMkJ0QztRQUFBLENBQUM7UUFFRixJQUFJO1lBRUYsTUFBTSxDQUFDLGNBQWMsQ0FBRyxhQUFhLEVBQUUsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBRSxDQUFDO1NBRTlFO1FBQUMsV0FBTSxHQUFFO1FBRVYsT0FBTyxhQUE0QixDQUFDLENBQUMsS0FBSztJQUU1QyxDQUFDLENBQUM7QUFFSixDQUFDO0FBRUQsWUFBWTtBQUVaLGtCQUFlLE9BQU8sQ0FBQyJ9