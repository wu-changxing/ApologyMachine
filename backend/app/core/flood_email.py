import os
import smtplib
import ssl
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

email_address = os.environ.get("EMAIL_HOST_USER")
email_password = os.environ.get("EMAIL_HOST_PASSWORD")


if not email_address or not email_password:
    raise ValueError("EMAIL_ADDRESS and EMAIL_PASSWORD environment variables must be set")

def send_email(receiver, subject, message, attachments=None):
    email = MIMEMultipart()
    email["From"] = "me@aaron404.com"
    email["To"] = receiver
    email["Subject"] = subject

    text_part = MIMEText(message, "plain")
    email.attach(text_part)

    # Add attachments if any
    if attachments:
        for attachment in attachments:
            email.attach(attachment)

<<<<<<< HEAD
    context = ssl.create_default_context()
    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
            server.login(email_address, email_password)
            server.sendmail(email_address, receiver, email.as_string())
    except Exception as e:
        print(f"An error occurred: {e}")
        return False

    return True
=======
    with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
        server.login(sender, password)
        server.sendmail(sender, receiver, email.as_string())
>>>>>>> 52c057999c24127d961c02032d0fdf11a100bdbe
