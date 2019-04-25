"use strict";
/* IMPORT */
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("./store");
/* AUTOSUSPEND */
var Methods;
(function (Methods) {
    Methods[Methods["suspend"] = 0] = "suspend";
    Methods[Methods["unsuspend"] = 1] = "unsuspend";
})(Methods || (Methods = {}));
;
var cache = new Map();
var defaultOptions = {
    methods: /^(?!_|(?:(?:get|has|is)(?![a-z0-9])))/i,
    bubble: true,
    children: true // Whether to autosuspend children too
};
function autosuspend(store, storeOptions) {
    if (storeOptions === void 0) { storeOptions = store.autosuspendOptions; }
    if (cache.get(store))
        throw new Error('You can\'t autosuspend the same store multiple times');
    if (storeOptions === false)
        return; // Disabled for this store
    cache.set(store, true);
    var options = storeOptions ? Object.assign({}, defaultOptions, storeOptions) : defaultOptions, proto = store_1.default.prototype, targetsCache = {};
    Object.keys(store).forEach(function (key) {
        var method = store[key];
        if (method instanceof store_1.default) {
            if (!options.children || cache.get(method))
                return;
            return autosuspend(method, options);
        }
        if (typeof method !== 'function' || proto[key] || !options.methods.test(key))
            return; // Not an auto-suspendable method //TSC
        function getTargets(method) {
            if (targetsCache[method])
                return targetsCache[method];
            var targets = [store];
            var target = store;
            if (options.bubble) {
                while (target.ctx && target.ctx[method]) {
                    target = target.ctx;
                    targets.push(target);
                }
            }
            return targets;
        }
        function trigger(id) {
            var method = Methods[id], targets = getTargets(method);
            for (var i = 0, l = targets.length; i < l; i++) {
                targets[i][method]();
            }
        }
        function handleResult(result) {
            trigger(Methods.unsuspend);
            return result;
        }
        function handleError(err) {
            trigger(Methods.unsuspend);
            throw err;
        }
        function autosuspendWrapper() {
            try {
                trigger(Methods.suspend);
                var result = method.apply(this, arguments);
                if (result instanceof Promise) {
                    return result.then(handleResult).catch(handleError);
                }
                else {
                    return handleResult(result);
                }
            }
            catch (err) {
                return handleError(err);
            }
        }
        try {
            Object.defineProperty(autosuspendWrapper, 'name', { value: key + "_autosuspended" });
        }
        catch (_a) { }
        store[key] = autosuspendWrapper;
    });
}
;
/* EXPORT */
exports.default = Object.assign(autosuspend, { defaultOptions: defaultOptions });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b3N1c3BlbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvYXV0b3N1c3BlbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFlBQVk7O0FBRVosaUNBQTRCO0FBRTVCLGlCQUFpQjtBQUVqQixJQUFLLE9BR0o7QUFIRCxXQUFLLE9BQU87SUFDViwyQ0FBUyxDQUFBO0lBQ1QsK0NBQVcsQ0FBQTtBQUNiLENBQUMsRUFISSxPQUFPLEtBQVAsT0FBTyxRQUdYO0FBQUEsQ0FBQztBQUVGLElBQU0sS0FBSyxHQUFHLElBQUksR0FBRyxFQUF1QixDQUFDO0FBRTdDLElBQU0sY0FBYyxHQUF1QjtJQUN6QyxPQUFPLEVBQUUsd0NBQXdDO0lBQ2pELE1BQU0sRUFBRSxJQUFJO0lBQ1osUUFBUSxFQUFFLElBQUksQ0FBQyxzQ0FBc0M7Q0FDdEQsQ0FBQztBQUVGLFNBQVMsV0FBVyxDQUFHLEtBQWdCLEVBQUUsWUFBK0U7SUFBL0UsNkJBQUEsRUFBQSxlQUF1RCxLQUFLLENBQUMsa0JBQWtCO0lBRXRILElBQUssS0FBSyxDQUFDLEdBQUcsQ0FBRyxLQUFLLENBQUU7UUFBRyxNQUFNLElBQUksS0FBSyxDQUFHLHNEQUFzRCxDQUFFLENBQUM7SUFFdEcsSUFBSyxZQUFZLEtBQUssS0FBSztRQUFHLE9BQU8sQ0FBQywwQkFBMEI7SUFFaEUsS0FBSyxDQUFDLEdBQUcsQ0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFFLENBQUM7SUFFMUIsSUFBTSxPQUFPLEdBQXVCLFlBQVksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBRyxFQUFFLEVBQUUsY0FBYyxFQUFFLFlBQVksQ0FBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQ2hILEtBQUssR0FBRyxlQUFLLENBQUMsU0FBUyxFQUN2QixZQUFZLEdBQXFDLEVBQUUsQ0FBQztJQUUxRCxNQUFNLENBQUMsSUFBSSxDQUFHLEtBQUssQ0FBRSxDQUFDLE9BQU8sQ0FBRyxVQUFBLEdBQUc7UUFF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