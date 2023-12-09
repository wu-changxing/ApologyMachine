import requests

# chat gpt token
api_key = "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"

url = "https://api.openai.com/v1/engines/davinci/completions"

headers = {
    "Authorization": f"Bearer {api_key}"
}

massage = "do you know 100+100?"
data = {
    "prompt": massage,
    "max_tokens": 60,
}

response = requests.post(url, headers=headers, json=data)

if response.status_code == 200:
    response = response.json()
    print(response)
    
    print('--------------------')
    print('--------------------')
    for id, ms in response.items():
        if id == "choices":
            for i, j in ms[0].items():
                print(i, '-->', j)
        else:
            print(id ,'-->', ms)
    massage = response["choices"][0]["text"]
    massage = massage.split(" ")
    cnt = 0
    
    print('--------------------')
    print('--------------------')
    for i in range(len(massage)):
        cnt+= 1
        if cnt == 5:
            print('\n')
        print(massage[i], end=' ')
else:
    print("Error:", response.status_code, response.text)
