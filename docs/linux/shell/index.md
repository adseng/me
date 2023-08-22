# shell

## 答疑解惑

### `#!/usr/bin/env sh和#!/bin/bash有什么区别?`
```sh
#!/usr/bin/env sh

git add .
git commit -m "-"
git push

```

`#!/usr/bin/env sh` 和 `#!/bin/bash` 的区别在于指定的解释器。

1. `#!/usr/bin/env sh`：这个声明行告诉系统使用 `/usr/bin/env` 程序来查找并执行当前环境中的默认 shell 解释器。`/usr/bin/env` 是一个可执行程序，它会在系统的 PATH 环境变量指定的路径中查找并执行指定的命令。因此，`/usr/bin/env sh` 表示使用当前环境中的默认 shell 解释器来解释执行脚本。

   使用 `#!/usr/bin/env sh` 可以提高脚本的可移植性，因为它使用系统中的默认 shell 解释器，而不是依赖于特定的路径或固定的解释器。

1. `#!/bin/bash`：这个声明行直接指定了脚本使用 Bash 解释器来执行。Bash 是一种流行的 Unix/Linux 环境下的 shell 解释器，提供了丰富的功能和语法扩展。

   使用 `#!/bin/bash` 明确指定了脚本使用 Bash 解释器，确保脚本在不同系统中都使用相同的解释器，而不依赖于系统的默认设置。

总结来说，`#!/usr/bin/env sh` 使用当前环境中的默认 shell 解释器执行脚本，而 `#!/bin/bash` 明确指定使用 Bash 解释器执行脚本。选择使用哪个声明行取决于你的需求和偏好。如果你的脚本中使用了特定于 Bash 的功能或语法，或者你希望确保脚本在不同系统中都使用 Bash 解释器，那么使用 `#!/bin/bash` 是一个好的选择。如果你希望脚本在不同系统中都能使用默认的 shell 解释器，并且不依赖于特定的路径，那么使用 `#!/usr/bin/env sh` 是一个更通用的选项。


