//register babel to transpile brefore out tests run

require('babel-register')();

//Disable webpack features that Mocha doesnt understand

require.extensions['.css'] = function(){};

