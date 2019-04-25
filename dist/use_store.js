"use strict";
/* IMPORT */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var context_1 = require("./context");
var use_previous_1 = require("./use_previous");
var utils_1 = require("./utils");
/* USE STORE */
function useStore(store, selector, initialState) {
    if (initialState === void 0) { initialState = {}; }
    var context = react_1.useContext(context_1.default);
    if (!context)
        throw new Error('You probably forgot to wrap your app with <Provider>');
    var instance = utils_1.getStoreInstance(context, store), _a = react_1.useState(function () {
        var state = selector(instance);
        return __assign({}, state, initialState);
    }), data = _a[0], setData = _a[1], prevData = use_previous_1.default(data);
    react_1.useEffect(function () {
        function update() {
            var nextData = selector(instance), shouldUpdate = !utils_1.isShallowEqual(prevData, nextData);
            if (!shouldUpdate)
                return;
            setData(nextData);
        }
        instance.subscribe(update);
        return function () { return instance.unsubscribe(update); };
    }, [instance, selector]);
    return data;
}
/* EXPORT */
exports.default = useStore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlX3N0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3VzZV9zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsWUFBWTs7Ozs7Ozs7Ozs7OztBQUVaLCtCQUFzRDtBQUN0RCxxQ0FBZ0M7QUFDaEMsK0NBQXlDO0FBQ3pDLGlDQUF5RDtBQUV6RCxlQUFlO0FBRWYsU0FBUyxRQUFRLENBQTJCLEtBQXlCLEVBQUUsUUFBMkIsRUFBRSxZQUFpQjtJQUFqQiw2QkFBQSxFQUFBLGlCQUFpQjtJQUVuSCxJQUFNLE9BQU8sR0FBRyxrQkFBVSxDQUFHLGlCQUFPLENBQUUsQ0FBQztJQUV2QyxJQUFLLENBQUMsT0FBTztRQUFHLE1BQU0sSUFBSSxLQUFLLENBQUcsc0RBQXNELENBQUUsQ0FBQztJQUUzRixJQUFNLFFBQVEsR0FBRyx3QkFBZ0IsQ0FBRyxPQUFPLEVBQUUsS0FBSyxDQUFFLEVBQzlDOzs7TUFPRSxFQVBELFlBQUksRUFBRSxlQUFPLEVBUWQsUUFBUSxHQUFHLHNCQUFXLENBQUcsSUFBSSxDQUFFLENBQUM7SUFFdEMsaUJBQVMsQ0FBRztRQUVWLFNBQVMsTUFBTTtZQUViLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBRyxRQUFRLENBQUUsRUFDaEMsWUFBWSxHQUFHLENBQUMsc0JBQWMsQ0FBRyxRQUFRLEVBQUUsUUFBUSxDQUFFLENBQUM7WUFFNUQsSUFBSyxDQUFDLFlBQVk7Z0JBQUcsT0FBTztZQUU1QixPQUFPLENBQUcsUUFBUSxDQUFFLENBQUM7UUFFdkIsQ0FBQztRQUVELFFBQVEsQ0FBQyxTQUFTLENBQUcsTUFBTSxDQUFFLENBQUM7UUFFOUIsT0FBTyxjQUFNLE9BQUEsUUFBUSxDQUFDLFdBQVcsQ0FBRyxNQUFNLENBQUUsRUFBL0IsQ0FBK0IsQ0FBQztJQUUvQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUUsQ0FBQztJQUUxQixPQUFPLElBQUksQ0FBQztBQUVkLENBQUM7QUFFRCxZQUFZO0FBRVosa0JBQWUsUUFBUSxDQUFDIn0=