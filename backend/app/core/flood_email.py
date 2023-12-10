import os
import smtplib
import ssl
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from dotenv import load_dotenv
import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)

led_pins = [18, 23, 24, 25]

for pin in led_pins:
    GPIO.setup(pin, GPIO.OUT)

def flicker_leds(signal):

    while True:
        if signal == True:
            GPIO.output(led_pins, GPIO.HIGH)
            time.sleep(0.01)
            GPIO.output(led_pins, GPIO.LOW)
            time.sleep(0.01)
        else:
            GPIO.output(led_pins, GPIO.LOW)

load_dotenv(dotenv_path=".env.local")

email_address = os.environ.get("EMAIL_HOST_USER")
email_password = os.environ.get("EMAIL_HOST_PASSWORD")
email_sender = os.environ.get("EMAIL_SENDER") 

if not email_address or not email_password or not email_sender:
    raise ValueError("EMAIL_ADDRESS and EMAIL_PASSWORD and EMAIL_SENDER environment variables must be set")

def send_email(receiver, subject, message, attachments=None):
    email = MIMEMultipart()
    email["From"] = email_sender
    email["To"] = receiver
    email["Subject"] = subject

    text_part = MIMEText(message, "plain")
    email.attach(text_part)

    # Add attachments if any
    if attachments:
        for attachment in attachments:
            email.attach(attachment)

    context = ssl.create_default_context()
    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 456, context=context) as server:

            print(f"Details: {email_address} {email_password} {email_sender}")
            # LOGIN FAILS
            server.login(email_address, email_password)
            print("after")

            server.sendmail(email_address, receiver, email.as_string())

            # flicker_leds(True)
    except Exception as e:
        print(f"An error occurred: {e}")
        return False

    return email

if __name__ == "__main__":
    send_email(email_sender, "apology", "sad")