import os
import sys
from bs4 import BeautifulSoup
import decode

file_path = sys.argv[-1]

with open(os.path.join(os.getcwd(), file_path), 'r') as raw:
    # convert raw text email to html
    extension = os.path.splitext(file_path)[1][1:]
    contents = raw.read()
    if extension != 'html':
        contents = decode.decode_email(contents)

    # remove all href tags to remove any personally identifiable links
    soup = BeautifulSoup(contents, "html.parser");
    for a in soup.findAll('a'):
        del a['href']

    # extract base file name without extension
    base_file_name = os.path.basename(file_path)
    file_name = base_file_name[:base_file_name.rindex('.')]

    # write to our new html file
    with open(os.path.join(os.getcwd(), "templates/%s.html" % (file_name)), 'w+') as f:
        html = soup.prettify('utf-8')
        f.write(html)
