var remote = require('remote');
var shell = remote.require('shell');

function notificationTest() {
  var n = new Notification('Electron!!', {
    body: 'Electronのドキュメントを開きます'
  });
    console.log(n);
  n.onclick = function () {
    shell.openExternal('http://electron.atom.io/docs/v0.29.0/');
  };
}
document.getElementById('js-notification').addEventListener('click', notificationTest, false);
