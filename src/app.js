(() => {
  const basePath = 'emails'
  const emails = [{
    filename: 'hired.html',
    title: 'Hired',
    tags: ['feature', 'warning']
  }, {
    filename: 'yahoo-alert.html',
    title: 'Yahoo Alert',
    tags: ['alert']
  }];

  const framesContainer = document.getElementById('email-iframes');

  emails.forEach(email => {
    const href = `${basePath}/${email.filename}`;
    const link = document.createElement('div');
    link.classList.add('col');

    link.innerHTML = `
      <div class="card">
        <div class="card-body">
          <div class="responsive-embed responsive-embed-4x3">
            <iframe src="${href}" scrolling="no"></iframe>
          </div>
        </div>
        <div class="card-footer">
          <a href="${href}">
            <h2 class="card-title">${email.title}</h2>
          </a>
          <div class="card-actions">
            <div>
              ${email.tags.map(t => `<span class="tag tag-${t}">${t}</span>`).join(',').replace(/,/g, '')}
            </div>
            <span class="flex"></span>
            <a href="${href}" class="download-button" download></a>
          </div>
        </div>
      </div>
    `
    framesContainer.appendChild(link)
  });
})();
