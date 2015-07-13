import JXON from 'JXON';
import BaseDataConverter from './BaseDataConverter';

export default class JXONConverter extends BaseDataConverter {

    isValid(data) {

        try {

            let res = JXON.stringToJs(data);

            // handle JXON HTML error output
            if(res && res.html && res.html.body) {
                throw new Error('JXONError');
            }

            this.result = res;

            return true;

        } catch(e) {

            return false;
        }
    }
}