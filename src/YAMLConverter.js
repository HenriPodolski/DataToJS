import YAML from 'yamljs';
import BaseDataConverter from './BaseDataConverter';

export default class YAMLConverter extends BaseDataConverter {

    isValid(data) {
        try {
            this.result = YAML.parse(data);
            return true;
        } catch(e) {
            console.error(e);
            return false;
        }
    }
}