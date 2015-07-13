export default class BaseDataConverter {

    constructor() {

        this._result;
    }

    isValid(data) {
        return false;
    }

    set result(res) {
        this._result = res;
    }

    get result() {
        return this._result;
    }
}