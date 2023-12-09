import os
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import smtplib
import ssl

password = os.environ.get("EMAIL_PASSWORD")

def send_email(sender, receiver, subject, message):
    email = MIMEMultipart()
    email["From"] = sender
    email["To"] = receiver
    email["Subject"] = subject

    text_part = MIMEText(message, "plain")
    email.attach(text_part)

    context = ssl.create_default_context()

    with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
        server.login(sender, password)
        server.sendmail(sender, receiver, email.as_string())