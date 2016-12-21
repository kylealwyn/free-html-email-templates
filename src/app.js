const basePath = 'templates'
const templates = [{
  filename: 'mapbox.html',
  title: 'Mapbox',
  tags: ['password']
}, {
  filename: 'wealthfront.html',
  title: 'Wealthfront',
  tags: ['thank you', 'update', 'holidays']
}, {
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
}, {
  filename: 'code-school.html',
  title: 'Code School',
  tags: ['achievement']
}];

const templatesContainer = document.getElementById('templates');

templates.forEach(template => {
  const href = `${basePath}/${template.filename}`;
  const link = document.createElement('div');
  link.classList.add('col');

  link.innerHTML = `
    <div class="card">
      <div class="card-body">
        <div class="responsive-embed responsive-embed-4x3">
          <a href="${href}" class="cover"></a>
          <iframe src="${href}" scrolling="no"></iframe>
        </div>
      </div>
      <div class="card-footer">
        <a href="${href}">
          <h2 class="card-title">${template.title}</h2>
        </a>
        <div class="card-actions">
          <div>
            ${template.tags.map(t => `<span class="tag tag-${t}">${t}</span>`).join(',').replace(/,/g, '')}
          </div>
          <span class="flex"></span>
          <a href="${href}" class="download-button" download></a>
        </div>
      </div>
    </div>
  `
  templatesContainer.appendChild(link)
});
