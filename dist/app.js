'use strict';

var basePath = 'templates';
var templates = [{
  filename: 'hired.html',
  title: 'Hired',
  tags: ['update', 'feature']
}, {
  filename: 'yahoo.html',
  title: 'Yahoo',
  tags: ['security', 'alert']
}, {
  filename: 'dollar-shave-club.html',
  title: 'Dollar Shave Club',
  tags: ['ecommerce', 'gift']
}, {
  filename: 'patagonia.html',
  title: 'Patagonia',
  tags: ['ecommerce', 'deals']
}, {
  filename: 'npm.html',
  title: 'NPM',
  tags: ['newsletter']
}, {
  filename: 'albert.html',
  title: 'Albert',
  tags: ['update', 'feature']
}];

var templatesContainer = document.getElementById('templates');

templates.forEach(function (template) {
  var href = basePath + '/' + template.filename;
  var link = document.createElement('div');
  link.classList.add('col');

  link.innerHTML = '\n    <div class="card">\n      <div class="card-body">\n        <div class="responsive-embed responsive-embed-4x3">\n          <a href="' + href + '" class="cover"></a>\n          <iframe src="' + href + '" scrolling="no"></iframe>\n        </div>\n      </div>\n      <div class="card-footer">\n        <a href="' + href + '">\n          <h2 class="card-title">' + template.title + '</h2>\n        </a>\n        <div class="card-actions">\n          <div>\n            ' + template.tags.map(function (t) {
    return '<span class="tag tag-' + t + '">' + t + '</span>';
  }).join(',').replace(/,/g, '') + '\n          </div>\n          <span class="flex"></span>\n          <a href="' + href + '" class="download-button" download></a>\n        </div>\n      </div>\n    </div>\n  ';
  templatesContainer.appendChild(link);
});