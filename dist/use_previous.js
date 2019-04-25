"use strict";
/* IMPORT */
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
/* USE PREVIOUS */
function usePrevious(value) {
    var ref = react_1.useRef();
    react_1.useEffect(function () {
        ref.current = value;
    }, [value]);
    return ref.current;
}
/* EXPORT */
exports.default = usePrevious;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlX3ByZXZpb3VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3VzZV9wcmV2aW91cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsWUFBWTs7QUFFWiwrQkFBd0M7QUFFeEMsa0JBQWtCO0FBRWxCLFNBQVMsV0FBVyxDQUFHLEtBQUs7SUFFMUIsSUFBTSxHQUFHLEdBQUcsY0FBTSxFQUFHLENBQUM7SUFFdEIsaUJBQVMsQ0FBRztRQUNWLEdBQUcsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFFLENBQUM7SUFFYixPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUM7QUFFckIsQ0FBQztBQUVELFlBQVk7QUFFWixrQkFBZSxXQUFXLENBQUMifQ==