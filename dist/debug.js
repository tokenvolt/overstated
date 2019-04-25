"use strict";
/* IMPORT */
Object.defineProperty(exports, "__esModule", { value: true });
var deep_object_diff_1 = require("deep-object-diff");
var hooks_1 = require("./hooks");
var utils_1 = require("./utils");
/* DEBUG */
var defaultOptions = {
    collapsed: false,
    logNewStores: false,
    logStateDiffChanges: true,
    logStateFullChanges: true
};
function debug(options) {
    if (options === void 0) { options = {}; }
    options = Object.assign({}, defaultOptions, options);
    var OVERSTATED = {
        stores: {},
        get states() {
            return Object.entries(OVERSTATED.stores).reduce(function (acc, _a) {
                var name = _a[0], store = _a[1];
                acc[name] = store['state'];
                return acc;
            }, {});
        },
        log: function () {
            for (var _i = 0, _a = Object.entries(OVERSTATED.states); _i < _a.length; _i++) {
                var _b = _a[_i], name_1 = _b[0], state = _b[1];
                console.log("%c" + name_1 + "\n ", 'font-weight:bold', state);
            }
        }
    };
    hooks_1.default.store.new.subscribe(function (store) {
        var name = store.constructor.name;
        OVERSTATED.stores[name] = store;
        if (options.logNewStores) {
            console.log('New store\n ', store);
        }
        if (options.logStateFullChanges || options.logStateDiffChanges) {
            var group_1 = options.collapsed ? console.groupCollapsed.bind(console) : console.group.bind(console), groupEnd_1 = console.groupEnd.bind(console);
            var prevState_1 = store.state;
            setTimeout(function () { return prevState_1 = store.state; }); // The initial state is set after the constructor (and the hook) is behing called
            store.subscribe(function () {
                var date = new Date(), timestamp = "[" + utils_1.padLeft(date.getHours(), 2, 0) + ":" + utils_1.padLeft(date.getMinutes(), 2, 0) + ":" + utils_1.padLeft(date.getSeconds(), 2, 0) + "." + utils_1.padLeft(date.getMilliseconds(), 3, 0) + "]";
                group_1(name + " " + timestamp);
                var state = store.state;
                if (options.logStateDiffChanges) {
                    var _a = deep_object_diff_1.detailedDiff(prevState_1, state), added = _a.added, updated = _a.updated, deleted = _a.deleted; //TSC
                    if (!utils_1.isEmptyObject(added)) {
                        console.log('Added\n ', added);
                    }
                    if (!utils_1.isEmptyObject(updated)) {
                        console.log('Updated\n ', updated);
                    }
                    if (!utils_1.isEmptyObject(deleted)) {
                        console.log('Deleted\n ', deleted);
                    }
                }
                if (options.logStateFullChanges && !utils_1.isShallowEqual(state, prevState_1)) {
                    console.log('New state\n ', state);
                    console.log('Old state\n ', prevState_1);
                }
                groupEnd_1();
                prevState_1 = state;
            });
        }
    });
    if (typeof window !== 'undefined') {
        window['OVERSTATED'] = OVERSTATED;
    }
}
/* EXPORT */
exports.default = Object.assign(debug, { defaultOptions: defaultOptions });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVidWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZGVidWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFlBQVk7O0FBRVoscURBQThDO0FBQzlDLGlDQUE0QjtBQUM1QixpQ0FBK0Q7QUFFL0QsV0FBVztBQUVYLElBQU0sY0FBYyxHQUFpQjtJQUNuQyxTQUFTLEVBQUUsS0FBSztJQUNoQixZQUFZLEVBQUUsS0FBSztJQUNuQixtQkFBbUIsRUFBRSxJQUFJO0lBQ3pCLG1CQUFtQixFQUFFLElBQUk7Q0FDMUIsQ0FBQztBQUVGLFNBQVMsS0FBSyxDQUFHLE9BQTBCO0lBQTFCLHdCQUFBLEVBQUEsWUFBMEI7SUFFekMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUcsRUFBRSxFQUFFLGNBQWMsRUFBRSxPQUFPLENBQUUsQ0FBQztJQUV4RCxJQUFNLFVBQVUsR0FBRztRQUNqQixNQUFNLEVBQUUsRUFBRTtRQUNWLElBQUksTUFBTTtZQUNSLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBRyxVQUFVLENBQUMsTUFBTSxDQUFFLENBQUMsTUFBTSxDQUFHLFVBQUUsR0FBRyxFQUFFLEVBQWE7b0JBQVosWUFBSSxFQUFFLGFBQUs7Z0JBQ3RFLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzNCLE9BQU8sR0FBRyxDQUFDO1lBQ2IsQ0FBQyxFQUFFLEVBQUUsQ0FBRSxDQUFDO1FBQ1YsQ0FBQztRQUNELEdBQUc7WUFDRCxLQUE2QixVQUFvQyxFQUFwQyxLQUFBLE1BQU0sQ0FBQyxPQUFPLENBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBRSxFQUFwQyxjQUFvQyxFQUFwQyxJQUFvQyxFQUFHO2dCQUF4RCxJQUFBLFdBQWEsRUFBWixjQUFJLEVBQUUsYUFBSztnQkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBRyxPQUFLLE1BQUksUUFBSyxFQUFFLGtCQUFrQixFQUFFLEtBQUssQ0FBRSxDQUFD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