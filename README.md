# DataToJS
A wrapper for converting YAML, JSON or XML strings to JS object 


Usage:
´´´
import DataToJS from './DataToJS';

let dataToJS = new DataToJS();

let testJSON = dataToJS.convert('{"format": "JSON"}');
let testJXON = dataToJS.convert('<format>XML</format>');
let testYAML = dataToJS.convert('format: YAML');
´´´
