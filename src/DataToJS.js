import JSONConverter from './JSONConverter';
import JXONConverter from './JXONConverter';
import YAMLConverter from './YAMLConverter';

let jsonConverter = new JSONConverter();
let jxonConverter = new JXONConverter();
let yamlConverter = new YAMLConverter();

export default class DataToJS {

    constructor() {

        this._data = '';

        this._obj = null;
    }

    convert(data) {

        this.obj = null;

        this.data = data;

        return this.convertDataType();
    }

    convertDataType() {

        var convertedData;

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

    set data(data) {

        this._data = data;
    }

    get data() {

        return this._data;
    }

    set obj(obj) {

        this._obj = obj;
    }

    get obj() {

        return this._obj;
    }
}