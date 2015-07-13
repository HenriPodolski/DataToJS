var DataFormat = require('../src/DataFormat.js');
var dataFormat = new DataFormat();

console.log(dataFormat.toJS('<test>1</test>'));

window.addEventListener('load', function () {
    // props to everyone who gets this reference
    console.log('THERE IS ANOTHER SYSTEM');
});

