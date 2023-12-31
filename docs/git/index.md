# git

## git脚本

当你需要执行一系列的 Git 命令来完成提交流程时，你可以将这些命令写入一个脚本文件，以便后续执行。以下是在 macOS 和 Windows 上创建可执行脚本文件的示例：

**在 macOS 上创建可执行脚本文件：**

1. 打开文本编辑器，创建一个新文件。

1. 在文件中，将需要执行的 Git 命令逐行写入。例如：

   ```bash
   #!/bin/bash

   git add .
   git commit -m "Commit message"
   git push origin master

   ```

   这个示例脚本中包含了 `git add .`、`git commit` 和 `git push` 命令，你可以根据自己的需求进行修改和扩展。

1. 将文件保存为一个没有扩展名的文件（例如 `git-commit`），并确保文件名没有空格或特殊字符。

1. 在终端中，使用 `chmod` 命令将文件设置为可执行权限。例如：

   ```bash
   chmod +x git-commit
   ```

1. 现在你可以在终端中执行该脚本文件，只需输入文件的路径并按下回车。例如：

   ```bash
   ./git-commit
   ```

**在 Windows 上创建可执行脚本文件：**

1. 打开文本编辑器，创建一个新文件。

1. 在文件中，将需要执行的 Git 命令逐行写入。例如：

   ```bash
   git add .
   git commit -m "Commit message"
   git push origin master
   ```

   这个示例脚本中包含了 `git add .`、`git commit` 和 `git push` 命令，你可以根据自己的需求进行修改和扩展。

1. 将文件保存为扩展名为 `.bat` 或 `.cmd` 的文件（例如 `git-commit.bat`）。

1. 现在你可以在命令提示符中执行该脚本文件，只需输入文件的名称并按下回车。例如：

   ```bash
   git-commit.bat
   ```


这样，你就可以通过执行这个脚本文件来自动执行一系列的 Git 命令。

请注意，无论你是在 macOS 还是 Windows 上创建脚本文件，确保 Git 已经正确安装并配置了相关的环境变量。

## git 常用命令

```bash

git fetch origin    # fetch all origin
git fetch origin release:release      # 对应 update selected
git fetch -u origin develop:develop   # --update-head-ok


git clean -nxdf（查看要删除的文件及目录，确认无误后再使用下面的命令进行删除）
git checkout . && git clean -xdf

git checkout -b release-20230114 origin/release-20230114 --  # 切分支

git branch -d feat-xxxx-hzh    # 删除
git push origin :feat-xxxx-hzh    # 删除远程

# 创建仓库后
echo "# wwwwww" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:adseng/wwwwww.git
git push -u origin main



```

## 清空本地修改

```bash

git checkout . #本地所有修改的。没有的提交的，都返回到原来的状态
git stash #把所有没有提交的修改暂存到stash里面。可用git stash pop恢复。

git reset --hard HASH #返回到某个节点，不保留修改，已有的改动会丢失。
git reset --soft HASH #返回到某个节点, 保留修改，已有的改动会保留，在未提交中，git status或git diff可看。

git clean -df #返回到某个节点，（只能删除未跟踪的文件）
git clean 参数
    -n 不实际删除，只是进行演练，展示将要进行的操作，有哪些文件将要被删除。（可先使用该命令参数，然后再决定是否执行）
    -f 删除文件
    -i 显示将要删除的文件
    -d 递归删除目录及文件（未跟踪的）
    -q 仅显示错误，成功删除的文件不显示


```

注：
git reset 删除的是*已跟踪的*文件，将已commit的回退。
git clean 删除的是未跟踪的文件

git clean -nxdf（查看要删除的文件及目录，确认无误后再使用下面的命令进行删除）
git checkout . && git clean -xdf

## 生成密钥

```bash

ssh-keygen -t rsa -C "huangzho@digitalchina.com"
ssh-keygen -t rsa -C "zhaohu.huang@cloudpense.com" -f C:/Users/19839/.ssh/id2_rsa

```

## 一个域名 配置多个密钥

```bash

Host 52.80.205.157
     HostName 52.80.205.157
     User     ubuntu
     IdentityFile        C:\Users\19839\.ssh\apiserverkey

Host 52.81.147.183
     HostName qa.clccccc.com
     User     ubuntu
     IdentityFile        C:\Users\19839\.ssh\apiserverkey

Host www.cloudpense.com
     HostName www.clccccc.com
     User     ubuntu
     IdentityFile        C:\Users\19839\.ssh\apiserverkey

Host github.com
     HostName github.com
     User onecaster
     IdentityFile C:\Users\19839\.ssh\id2_rsa

Host github.com
     HostName github.com
     User adseng
     IdentityFile C:\Users\19839\.ssh\id_rsa

```

## cherry pick

## create patch


