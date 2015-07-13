
var JXONLib = 'JXON';

console.log(JXONLib);

var Converter = (function () {
    function Converter() {
    }
    Converter.prototype.isValid = function (data) {
        try  {
            return true;
        } catch (e) {
            return false;
        }
    };


    Object.defineProperty(Converter.prototype, "result", {
        get: function () {
            return this._result;
        },
        set: function (res) {
            this._result = res;
        },
        enumerable: true,
        configurable: true
    });
    return Converter;
})();
exports.Converter = Converter;

//# sourceMappingURL=JXONConverter.js.map
