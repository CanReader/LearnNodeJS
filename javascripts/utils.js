const path = require('path');

function getPath(pageName)
{
    return path.join(__dirname, '..', 'views', pageName + '.html');
}

function addNumbers(x, y) {
    return x + y;
  }
  
  function subtractNumbers(x, y) {
    return x - y;
  }
  
  module.exports = {
    getPath,
    addNumbers,
    subtractNumbers
  };