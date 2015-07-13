

var Converter = (function () {
    function Converter() {
    }
    Converter.prototype.isValid = function (data) {
        try  {
            this.result = JSON.parse(data);
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

//# sourceMappingURL=JSONConverter.js.map
