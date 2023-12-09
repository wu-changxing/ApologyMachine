# you can use this script to get the WiFi network list only if you have network card on your computer
import subprocess
import platform

def get_wifi_networks():
    os_type = platform.system()

    if os_type == "Windows":
        # Windows system to get the WiFi network list command
        command = ["netsh", "wlan", "show", "network"]
    elif os_type == "Darwin":
        # macOS system to get the WiFi network list command
        command = "/System/Library/PrivateFrameworks/Apple80211.framework/Versions/A/Resources/airport -s"
    elif os_type == "Linux":
        # Linux system to get the WiFi network list command
        command = "nmcli dev wifi"
    else:
        print("Unsupported Operating System:", os_type)
        return

    # execute command
    result = subprocess.check_output(command, shell=True)

    # decode the result
    networks = result.decode('utf-8', errors="backslashreplace")
    print(networks)

# detect the operating system and get the WiFi network list
get_wifi_networks()
