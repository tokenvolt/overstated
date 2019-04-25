"use strict";
/* IMPORT */
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var context_1 = require("./context");
/* PROVIDER */
var Provider = function (_a) {
    var inject = _a.inject, children = _a.children;
    return (React.createElement(context_1.default.Consumer, null, function (parentMap) {
        var map = parentMap ? new Map(parentMap) : new Map();
        if (inject) {
            inject.forEach(function (instance) { return map.set(instance.constructor, instance); });
        }
        return (React.createElement(context_1.default.Provider, { value: map }, children));
    }));
};
/* EXPORT */
exports.default = Provider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvcHJvdmlkZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxZQUFZOztBQUVaLDZCQUErQjtBQUMvQixxQ0FBZ0M7QUFFaEMsY0FBYztBQUVkLElBQU0sUUFBUSxHQUFHLFVBQUUsRUFBeUU7UUFBdkUsa0JBQU0sRUFBRSxzQkFBUTtJQUE2RCxPQUFBLENBQ2hHLG9CQUFDLGlCQUFPLENBQUMsUUFBUSxRQUNkLFVBQUEsU0FBUztRQUVSLElBQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUcsU0FBUyxDQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFHLENBQUM7UUFFM0QsSUFBSyxNQUFNLEVBQUc7WUFFWixNQUFNLENBQUMsT0FBTyxDQUFHLFVBQUEsUUFBUSxJQUFJLE9BQUEsR0FBRyxDQUFDLEdBQUcsQ0FBRyxRQUFRLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBRSxFQUExQyxDQUEwQyxDQUFFLENBQUM7U0FFM0U7UUFFRCxPQUFPLENBQ0wsb0JBQUMsaUJBQU8sQ0FBQyxRQUFRLElBQUMsS0FBSyxFQUFFLEdBQUcsSUFDekIsUUFBUSxDQUNRLENBQ3BCLENBQUM7SUFFSixDQUFDLENBQ2dCLENBQ3BCO0FBcEJpRyxDQW9CakcsQ0FBQztBQUVGLFlBQVk7QUFFWixrQkFBZSxRQUFRLENBQUMifQ==