# DataToJS
A wrapper for converting whether YAML, JSON or XML strings to JS object in browsers or in nodeJS.  
See example in main.js!

Usage:

```js
import DataToJS from './DataToJS';

let dataToJS = new DataToJS();

let testJSON = dataToJS.convert('{"format": "JSON"}');
let testJXON = dataToJS.convert('<format>XML</format>');
let testYAML = dataToJS.convert('format: YAML');

console.log(testJSON, testJXON, testYAML);
```

Output:

```bash
{ format: 'JSON' } { format: 'XML' } { format: 'YAML' }
```
