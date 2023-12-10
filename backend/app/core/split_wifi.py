
with open('message.txt', 'r') as f:
    text = f.read()
    text = text.replace(',', ' ')
    text = text.replace('.', ' ')
    text = text.replace('"', ' ')
    text = text.split('\n')
    text_a = []
    for i in text:
        text_a.append(i.split(' '))
    print(text_a)

# text_a = text_a*10
with open('wifi.txt', 'w') as f:
    for i in text_a:
        for j in i:
            if j != '':
                f.write(j + '\n')


import subprocess

# 假设您的脚本名为 script.sh 并且位于当前目录
script_path = "./create_wifi.sh"

# 运行脚本
result = subprocess.run([script_path], shell=True)

# 检查脚本是否成功执行
if result.returncode == 0:
    print("脚本执行成功")
else:
    print("脚本执行失败")
