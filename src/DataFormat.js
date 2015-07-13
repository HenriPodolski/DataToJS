var JSON = require("./JSONConverter");
var YAML = require("./YAMLConverter");
var JXON = require("./JXONConverter");

var jsonConverter = new JSON.Converter();
var yamlConverter = new YAML.Converter();
var jxonConverter = new JXON.Converter();



var DataFormat = (function () {
    function DataFormat() {
        this._data = '';
        this._obj = null;
    }
    DataFormat.prototype.toJS = function (data) {
        this.obj = null;

        this.data = data;

        return this.convertDataType();
    };

    DataFormat.prototype.convertDataType = function () {
        var convertedData;

        if (!convertedData && jsonConverter.isValid(this.data)) {
            convertedData = jsonConverter.result;
        }

        if (!convertedData && jxonConverter.isValid(this.data)) {
            convertedData = jxonConverter.result;
        }

        if (!convertedData && yamlConverter.isValid(this.data)) {
            convertedData = yamlConverter.result;
        }

        if (!convertedData) {
            throw new Error('Error: Unexpected data type.');
        }

        this.obj = convertedData;

        return this.obj;
    };


    Object.defineProperty(DataFormat.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (data) {
            this._data = data;
        },
        enumerable: true,
        configurable: true
    });


    Object.defineProperty(DataFormat.prototype, "obj", {
        get: function () {
            return this._obj;
        },
        set: function (obj) {
            this._obj = obj;
        },
        enumerable: true,
        configurable: true
    });
    return DataFormat;
})();
module.exports = DataFormat;

//# sourceMappingURL=DataFormat.js.map
