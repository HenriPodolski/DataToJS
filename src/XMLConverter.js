import XML2JS from 'xml2js';
import BaseDataConverter from './BaseDataConverter';

export default class XMLConverter extends BaseDataConverter {

    isValid(data) {

        try {

            var res;

            XML2JS.parseString(data, {trim: true, ignoreAttrs: true}, function(err, result) {
                 res = result;
            });

            this.result = res;

            return true;

        } catch(e) {
            console.error(e);
            return false;
        }
    }
}