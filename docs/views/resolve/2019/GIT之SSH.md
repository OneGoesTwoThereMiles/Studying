---
title: Git SSH解决命令
date: 2019-08-30
tags:
 - Git
categories:
 - 绊脚石
---
## 1.出现Are you sure you want to continue connecting (yes/no)?时，选择yes

```
The authenticity of host 'github.com (13.229.188.59)' can't be established.
RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
Are you sure you want to continue connecting (yes/no)? 
fatal: Could not read from remote repository.
```

## 2. ls -al ~/.ssh



## 3. ssh-keygen -t rsa -C "github用户名"，按三次回车



## 4.cat ~/.ssh/id_rsa.pub生成新的SSH

## 5.登陆github,点击头像-settings-new SSH,复制新生成的SSH

## 6.正常push
