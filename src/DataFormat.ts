import JSON = require('JSONConverter');
import YAML = require('YAMLConverter');
import JXON = require('JXONConverter');

var jsonConverter = new JSON.Converter();
var yamlConverter = new YAML.Converter();
var jxonConverter = new JXON.Converter();

export = DataFormat;

class DataFormat {

    private _data:string = '';

    private _obj = null;

    public toJS(data:string):any {

        this.obj = null;

        this.data = data;

        return this.convertDataType();
    }

    public convertDataType():any {

        var convertedData:any;

        if(!convertedData && jsonConverter.isValid(this.data)) {
            convertedData = jsonConverter.result;
        }

        if(!convertedData && jxonConverter.isValid(this.data)) {
            convertedData = jxonConverter.result;
        }

        if(!convertedData && yamlConverter.isValid(this.data)) {
            convertedData = yamlConverter.result;
        }

        if(!convertedData) {
            throw new Error('Error: Unexpected data type.');
        }

        this.obj = convertedData;

        return this.obj;
    }

    public set data(data:string) {

        this._data = data;
    }

    public get data():string {

        return this._data;
    }

    public set obj(obj:any) {

        this._obj = obj;
    }

    public get obj():any {

        return this._obj;
    }
}