const mkdir = require('mkdirp');
const path = require('path');
const os = require('os');
const swal = require('sweetalert2');
const fs = require('fs');
const Git = require("nodegit");

function searchToObject() {
  var pairs = window.location.search.substring(1).split("&"),
    obj = {},
    pair,
    i;
  for (i in pairs) {
    if (pairs[i] === "") continue;
    pair = pairs[i].split("=");
    obj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return obj;
}
let obj = searchToObject();
$.ajaxSetup({
  headers : {
    'Authorization' : `token ${obj.access_token}`
  }
});

$.get('https://api.github.com/user', function (data) {
  Git.Clone(`https://github.com/${data.login}/${data.login}.github.io`, `${os.homedir()}/.techfolios/${data.login}.github.io`)
    .catch(function(err) { console.log(err); });
});

if (!fs.existsSync(`${os.homedir()}/.techfolios`)) {
  swal({
    title: '~/.techfolios',
    text: "Do we have your permission to create the above directory? (You need to say yes for techfolios to work.)",
    type: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, create it!'
  }).then(function () {
    mkdir(`${os.homedir()}/.techfolios`, function (err) {
      if (err) console.error(err);
      else {
        swal(
          'Success!',
          'Your directory has been created!',
          'success'
        )
    }
  });

  }, function (dismiss) {
    if (dismiss === 'cancel') {
      swal(
        'Cancelled',
        'The directory has not been created. (???)',
        'error'
      )
    }
  });
}
