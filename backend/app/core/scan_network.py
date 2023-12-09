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
    lines = networks.strip().split("\n")

    network = []
    for line in lines[1:]:
        parts = line.split()
        network_info = {
            "SSID": parts[0],
            "BSSID": parts[1],
            "RSSI": parts[2],
            "CHANNEL": parts[3],
            "HT": parts[4],
            "CC": parts[5],
            "SECURITY": " ".join(parts[6:])
        }
        network.append(network_info)

    return network

