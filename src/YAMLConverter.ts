import ConverterInterface = require('ConverterInterface');

export class Converter {

    private _result:any;

    isValid(data:string):boolean {
        return false;
    }

    set result(res) {
        this._result = res;
    }

    get result() {
        return this._result;
    }
}