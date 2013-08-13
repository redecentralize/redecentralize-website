#!/usr/bin/env node

// Simply builds the less documents into master.css
// 1. `cd tools && npm install watchr less` to get started
// 2. `node less` to start the watcher

var path = require('path');
var watchr = require('watchr');
var exec = require('child_process').exec;
var watch = path.join(__dirname, '..', 'assets', 'less');

function now() {
  return new Date().toISOString().replace('T', ' ').substr(0, 19);
}

function compile(type, path) {
  var start = Date.now();
  var sheet = path.replace(watch, '').split('/')[1].replace('.less', '');
  var filename = 'master.css';
  var input = __dirname + '/../assets/less/master.less';
  var output = __dirname + '/../assets/css/master.css';
  exec(
    '`npm bin`/lessc ' + input + ' > ' + output,
    function (err, stdout, stderr) {
      var duration = Date.now() - start;
      if (err) {
        console.log('An error occurred running the less command:');
        console.log(err.message);
      } else if (stderr || stdout) {
        console.log(stdout, stderr);
      } else {
        console.log('[%s] recompiled ' + filename + ' in %sms', now(), duration);
      }
    }
  );
}

console.log('Watching %s', watch);
watchr.watch({
  paths: watch,
  listeners: { change: compile }
});
