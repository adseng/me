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
