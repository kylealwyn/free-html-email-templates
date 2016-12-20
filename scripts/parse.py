import sys
import email
import os
from bs4 import BeautifulSoup

# https://gist.github.com/miohtama/5389146
def get_decoded_email_body(message_body):
    """ Decode email body.
    Detect character set if the header is not set.
    We try to get text/plain, but if there is not one then fallback to text/html.
    :param message_body: Raw 7-bit message body input e.g. from imaplib. Double encoded in quoted-printable and latin-1
    :return: Message body as unicode string
    """

    msg = email.message_from_string(message_body)

    text = ""
    if msg.is_multipart():
        html = None
        for part in msg.get_payload():

            print "%s, %s" % (part.get_content_type(), part.get_content_charset())

            if part.get_content_charset() is None:
                # We cannot know the character set, so return decoded "something"
                text = part.get_payload(decode=True)
                continue

            charset = part.get_content_charset()

            if part.get_content_type() == 'text/plain':
                text = unicode(part.get_payload(decode=True), str(charset), "ignore").encode('utf8', 'replace')

            if part.get_content_type() == 'text/html':
                html = unicode(part.get_payload(decode=True), str(charset), "ignore").encode('utf8', 'replace')

        if text is not None:
            return text.strip()
        else:
            return html.strip()
    else:
        text = unicode(msg.get_payload(decode=True), msg.get_content_charset(), 'ignore').encode('utf8', 'replace')
        return text.strip()

file_path = sys.argv[-1]

with open(file_path, 'r') as raw_email:
    # convert raw text email to html
    extension = os.path.splitext(file_path)[1][1:]
    contents = raw_email.read()
    if extension != 'html':
        contents = get_decoded_email_body(contents)

    # remove all href tags to remove any personally identifiable links
    soup = BeautifulSoup(contents, "html.parser");
    for a in soup.findAll('a'):
        del a['href']

    # extract base file name without extension
    base_file_name = os.path.basename(file_path)
    file_name = base_file_name[:base_file_name.rindex('.')]

    # write to our new html file
    with open("./templates/%s.html" % (file_name), 'w+') as f:
        html = soup.prettify('utf-8')
        f.write(html)
