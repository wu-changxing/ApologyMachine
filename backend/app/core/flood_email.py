import os
import smtplib
import ssl
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from dotenv import load_dotenv

load_dotenv(dotenv_path=".env.local")

email_address = os.environ.get("EMAIL_HOST_USER")
email_password = os.environ.get("EMAIL_HOST_PASSWORD")
email_sender = os.environ.get("EMAIL_SENDER")
magic_number = 10

if not email_address or not email_password or not email_sender:
    raise ValueError("EMAIL_ADDRESS and EMAIL_PASSWORD and EMAIL_SENDER environment variables must be set")

def send_email(receiver, subject, message, attachments=None):
    for i in range(0, magic_number):
        email = MIMEMultipart()
        email["From"] = email_sender
        email["To"] = receiver
        email["Subject"] = subject + f" {i}"

        text_part = MIMEText(message, "plain")
        email.attach(text_part)

        # Add attachments if any
        if attachments:
            for attachment in attachments:
                email.attach(attachment)

        context = ssl.create_default_context()
        try:
            with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:

                print(f"Details: {email_address} {email_password} {email_sender}")
                # LOGIN FAILS
                server.login(email_address, email_password)
                print("after")

                server.sendmail(email_address, receiver, email.as_string())

        except Exception as e:
            print(f"An error occurred: {e}")
            return False

    return True

if __name__ == "__main__":
    send_email("leoligrcp@gmail.com", "apology", "sadness")