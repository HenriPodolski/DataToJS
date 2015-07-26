/**
 * Created by henri.podolski on 13.07.2015.
 */

import DataToJS from './DataToJS';

let dataToJS = new DataToJS();

let testJSON = dataToJS.convert('{"format": "JSON"}');
let testJXON = dataToJS.convert('<format>XML</format>');
let testYAML = dataToJS.convert('format: YAML');
let testJXON2 = dataToJS.convert('<format default="true">XML</format>');


console.log(testJSON, testJXON, testYAML, testJXON2);