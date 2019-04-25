"use strict";
/* SUBSCRIBER */
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber = /** @class */ (function () {
    function Subscriber() {
        this.listeners = [];
    }
    Subscriber.prototype.subscribe = function (listener) {
        var index = this.listeners.indexOf(listener);
        if (index >= 0)
            return;
        this.listeners.push(listener);
    };
    Subscriber.prototype.unsubscribe = function (listener) {
        var index = this.listeners.indexOf(listener);
        if (index < 0)
            return;
        this.listeners.splice(index, 1);
    };
    Subscriber.prototype.emit = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        for (var i = 0, l = this.listeners.length; i < l; i++) {
            this.listeners[i].apply(undefined, arguments);
        }
    };
    return Subscriber;
}());
/* EXPORT */
exports.default = Subscriber;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Vic2NyaWJlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9zdWJzY3JpYmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnQkFBZ0I7O0FBRWhCO0lBQUE7UUFFRSxjQUFTLEdBQXVDLEVBQUUsQ0FBQztJQWdDckQsQ0FBQztJQTlCQyw4QkFBUyxHQUFULFVBQVksUUFBMEM7UUFFcEQsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUcsUUFBUSxDQUFFLENBQUM7UUFFbEQsSUFBSyxLQUFLLElBQUksQ0FBQztZQUFHLE9BQU87UUFFekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUcsUUFBUSxDQUFFLENBQUM7SUFFbkMsQ0FBQztJQUVELGdDQUFXLEdBQVgsVUFBYyxRQUEwQztRQUV0RCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBRyxRQUFRLENBQUUsQ0FBQztRQUVsRCxJQUFLLEtBQUssR0FBRyxDQUFDO1lBQUcsT0FBTztRQUV4QixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFFLENBQUM7SUFFckMsQ0FBQztJQUVELHlCQUFJLEdBQUo7UUFBTyxjQUFxQjthQUFyQixVQUFxQixFQUFyQixxQkFBcUIsRUFBckIsSUFBcUI7WUFBckIseUJBQXFCOztRQUUxQixLQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRztZQUV2RCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBRyxTQUFTLEVBQUUsU0FBUyxDQUFFLENBQUM7U0FFbEQ7SUFFSCxDQUFDO0lBRUgsaUJBQUM7QUFBRCxDQUFDLEFBbENELElBa0NDO0FBRUQsWUFBWTtBQUVaLGtCQUFlLFVBQVUsQ0FBQyJ9