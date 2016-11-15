Adding A Template
---
#### If you have the html
1. Drop HTML file in the `emails` directory
3. Add your new file data to the emails array in `src/app.js`

#### If you have the raw source
1. Add raw, unparsed email source file to `emails/raw`
2. Parse file: `python parse_email.py 'path_to_file'`
3. Add your new file data to the emails array in `src/app.js`

Developing
---

- `npm install`
- `npm serve`
- Open localhost:8080

Site TODO
---

- [ ] Add search and filter
