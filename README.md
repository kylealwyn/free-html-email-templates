Adding A Template
---
#### If you have the html
1. Drop HTML file in the `templates` directory
3. Add your entry to the `templates` array in `src/app.js`

#### If you have the raw source
1. Add raw, unparsed email source file to `templates/raw`
2. Parse file: `python scripts/parse.py 'path_to_file_raw'`
3. Add your entry to the `templates` array in `src/app.js`

Developing
---

- `npm install`
- `npm start`
- Open `localhost:8080`

Site TODO
---

- [ ] Add search and filter
