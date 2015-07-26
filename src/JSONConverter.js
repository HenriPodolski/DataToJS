import BaseDataConverter from './BaseDataConverter';

export default class JSONConverter extends BaseDataConverter {

    isValid(data) {
        try {
            this.result = JSON.parse(data);
            return true;
        } catch(e) {

            return false;
        }
    }
}