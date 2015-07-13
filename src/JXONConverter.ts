import ConverterInterface = require('ConverterInterface');
import JXONLib = require('JXON');

console.log(JXONLib);

export class Converter {

    private _result:any;

    isValid(data:string):boolean {
        try {
            //this.result = JXON.parse(data);
            return true;
        } catch(e) {
            return false;
        }
    }

    set result(res) {
        this._result = res;
    }

    get result() {
        return this._result;
    }
}