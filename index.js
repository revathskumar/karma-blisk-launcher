var which = require('which');
var fs    = require('fs');
var path  = require('path');

var BliskBrowser = function (baseBrowserDecorator, args) {
  baseBrowserDecorator(this);

};

function getBlisk(appPath) {
  if(process.platform !== 'darwin') {
    return null;
  }

  try {
    return appPath;
  } catch (err) {}
}

BliskBrowser.prototype = {
  name: 'Blisk',
  DEFAULT_CMD: {
    darwin: getBlisk('/Applications/Blisk.app/Contents/MacOS/Blisk')
  },
  ENV_CMD: 'BLISK'
}

BliskBrowser.$inject = ['baseBrowserDecorator', 'args'];

module.exports = {
  'launcher:Blisk': ['type', BliskBrowser]
}
