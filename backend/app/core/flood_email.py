import os
import smtplib
import ssl
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from dotenv import load_dotenv
import RPi.GPIO as GPIO
import time

# Raspberry PI LED code
GPIO.setmode(GPIO.BCM)


led_pins = [18, 23, 24, 25]


display_pins = [2, 3, 4, 17, 27, 22, 10]


for pin in led_pins:
    GPIO.setup(pin, GPIO.OUT)


for pin in display_pins:
    GPIO.setup(pin, GPIO.OUT)


number_patterns = {
    0: [1, 1, 1, 1, 1, 1, 0],
    1: [0, 1, 1, 0, 0, 0, 0],
    2: [1, 1, 0, 1, 1, 0, 1],
    3: [1, 1, 1, 1, 0, 0, 1],
    4: [0, 1, 1, 0, 0, 1, 1],
    5: [1, 0, 1, 1, 0, 1, 1],
    6: [1, 0, 1, 1, 1, 1, 1],
    7: [1, 1, 1, 0, 0, 0, 0],
    8: [1, 1, 1, 1, 1, 1, 1],
    9: [1, 1, 1, 1, 0, 1, 1]
}

def flicker_leds(signal):

    counter = 0


    while True:
        if signal == True:

            GPIO.output(led_pins, GPIO.HIGH)


            display_pattern = number_patterns[counter]
            GPIO.output(display_pins, display_pattern)

            counter = (counter + 1) % 10

            time.sleep(0.5)
            GPIO.output(led_pins, GPIO.LOW)
            GPIO.output(display_pins, [0] * 7)
            time.sleep(0.5)
        else:
            GPIO.output(led_pins, GPIO.LOW)
            GPIO.output(display_pins, [0] * 7)


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

        # flicker LED each send
        flicker_leds(True)

    return True
