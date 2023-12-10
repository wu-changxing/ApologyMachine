import subprocess
import tempfile

def split_into_chunks(sentence, chunk_size):
    words = sentence.split()
    for i in range(0, len(words), chunk_size):
        yield ' '.join(words[i:i + chunk_size])

def flood_wifi_AP(text_strings, chunk_size=3):
    # Split sentences into chunks and write to a temporary file
    with tempfile.NamedTemporaryFile(mode='w+', delete=False) as temp_file:
        for sentence in text_strings:
            for chunk in split_into_chunks(sentence, chunk_size):
                temp_file.write(chunk + '\n')
        temp_file_name = temp_file.name

    # Construct the command with the name of the temporary file
    cmd = f"mdk3 wlan1 b -f {temp_file_name} -a -h -c 1 -s 200"
    try:
        result = subprocess.run(cmd.split(), check=True, text=True, capture_output=True)
        output = result.stdout
    except subprocess.CalledProcessError as e:
        output = e.stderr
    finally:
        # Remove the temporary file
        subprocess.run(['rm', '-f', temp_file_name])

    return output

# Example usage
text_strings = ["This is a long sentence with several words", "Another example sentence for testing"]
output = flood_wifi_AP(text_strings, 3)  # Change chunk_size to 4 if needed
print(output)
