'use strict';

(function () {
  var basePath = 'emails';
  var emails = [{
    filename: 'hired.html',
    title: 'Hired',
    tags: ['feature', 'warning']
  }, {
    filename: 'yahoo-alert.html',
    title: 'Yahoo Alert',
    tags: ['alert']
  }];

  var framesContainer = document.getElementById('email-iframes');

  emails.forEach(function (email) {
    var href = basePath + '/' + email.filename;
    var link = document.createElement('div');
    link.classList.add('col');

    link.innerHTML = '\n      <div class="card">\n        <div class="card-body">\n          <div class="responsive-embed responsive-embed-4x3">\n            <iframe src="' + href + '" scrolling="no"></iframe>\n          </div>\n        </div>\n        <div class="card-footer">\n          <a href="' + href + '">\n            <h2 class="card-title">' + email.title + '</h2>\n          </a>\n          <div class="card-actions">\n            <div>\n              ' + email.tags.map(function (t) {
      return '<span class="tag tag-' + t + '">' + t + '</span>';
    }).join(',').replace(/,/g, '') + '\n            </div>\n            <span class="flex"></span>\n            <a href="' + href + '" class="download-button" download></a>\n          </div>\n        </div>\n      </div>\n    ';
    framesContainer.appendChild(link);
  });
})();