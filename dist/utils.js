"use strict";
/* IMPORT */
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("./store");
var _isShallowEqual = require("is-shallow-equal");
/* UTILS */
// Using dummy objects in order to avoid allocating useless new objects
var DUMMY_OBJ = {};
exports.DUMMY_OBJ = DUMMY_OBJ;
var DUMMY_ARR = [];
exports.DUMMY_ARR = DUMMY_ARR;
function getStoreInstance(map, store) {
    if (store instanceof store_1.default) {
        var instance = map.get(store.constructor);
        if (instance)
            return instance;
        map.set(store.constructor, store);
        return store;
    }
    else {
        var instance = map.get(store);
        if (instance)
            return instance;
        instance = new store();
        map.set(store, instance);
        return instance;
    }
}
exports.getStoreInstance = getStoreInstance;
function isEmptyObject(x) {
    return _isShallowEqual(x, DUMMY_OBJ);
}
exports.isEmptyObject = isEmptyObject;
function isPrimitive(x) {
    if (typeof x === 'object')
        return x === null;
    return typeof x !== 'function';
}
exports.isPrimitive = isPrimitive;
function isShallowEqual(a, b) {
    return isPrimitive(a) || isPrimitive(b) ? a === b : _isShallowEqual(a, b);
}
exports.isShallowEqual = isShallowEqual;
function padLeft(str, length, padding) {
    for (var i = 0, l = length - String(str).length; i < l; i++) {
        str = "" + padding + str;
    }
    return str;
}
exports.padLeft = padLeft;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFlBQVk7O0FBRVosaUNBQTRCO0FBQzVCLGtEQUFvRDtBQUVwRCxXQUFXO0FBRVgsdUVBQXVFO0FBRXZFLElBQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQztBQWdFYiw4QkFBUztBQTlEakIsSUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBOERGLDhCQUFTO0FBNUQ1QixTQUFTLGdCQUFnQixDQUF3QixHQUFlLEVBQUUsS0FBeUI7SUFFekYsSUFBSyxLQUFLLFlBQVksZUFBSyxFQUFHO1FBRTVCLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBbUIsQ0FBQztRQUU5RCxJQUFLLFFBQVE7WUFBRyxPQUFPLFFBQVEsQ0FBQztRQUVoQyxHQUFHLENBQUMsR0FBRyxDQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFFLENBQUM7UUFFckMsT0FBTyxLQUFLLENBQUM7S0FFZDtTQUFNO1FBRUwsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBRyxLQUFLLENBQW1CLENBQUM7UUFFbEQsSUFBSyxRQUFRO1lBQUcsT0FBTyxRQUFRLENBQUM7UUFFaEMsUUFBUSxHQUFHLElBQUksS0FBSyxFQUFHLENBQUM7UUFFeEIsR0FBRyxDQUFDLEdBQUcsQ0FBRyxLQUFLLEVBQUUsUUFBUSxDQUFFLENBQUM7UUFFNUIsT0FBTyxRQUFRLENBQUM7S0FFakI7QUFFSCxDQUFDO0FBa0M2Qiw0Q0FBZ0I7QUFoQzlDLFNBQVMsYUFBYSxDQUFHLENBQUM7SUFFeEIsT0FBTyxlQUFlLENBQUcsQ0FBQyxFQUFFLFNBQVMsQ0FBRSxDQUFDO0FBRTFDLENBQUM7QUE0QitDLHNDQUFhO0FBMUI3RCxTQUFTLFdBQVcsQ0FBRyxDQUFDO0lBRXRCLElBQUssT0FBTyxDQUFDLEtBQUssUUFBUTtRQUFHLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQztJQUUvQyxPQUFPLE9BQU8sQ0FBQyxLQUFLLFVBQVUsQ0FBQztBQUVqQyxDQUFDO0FBb0I4RCxrQ0FBVztBQWxCMUUsU0FBUyxjQUFjLENBQUcsQ0FBQyxFQUFFLENBQUM7SUFFNUIsT0FBTyxXQUFXLENBQUcsQ0FBQyxDQUFFLElBQUksV0FBVyxDQUFHLENBQUMsQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFDO0FBRXJGLENBQUM7QUFjMkUsd0NBQWM7QUFaMUYsU0FBUyxPQUFPLENBQUcsR0FBb0IsRUFBRSxNQUFjLEVBQUUsT0FBd0I7SUFFL0UsS0FBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUcsR0FBRyxDQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUc7UUFDaEUsR0FBRyxHQUFHLEtBQUcsT0FBTyxHQUFHLEdBQUssQ0FBQztLQUMxQjtJQUVELE9BQU8sR0FBRyxDQUFDO0FBRWIsQ0FBQztBQUkyRiwwQkFBTyJ9