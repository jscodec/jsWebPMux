const path = require('path');
 
var jsWebPMux = {
  entry: [
    path.join(__dirname, 'src' , 'riff.js' )
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'jswebpmux.js'
  }
  
};

module.exports = jsWebPMux;