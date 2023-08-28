# websocket

## WebSocket 连接失败状态码
在 WebSocket 连接过程中，可能会遇到不同的状态码来表示连接失败的原因。以下是一些常见的 WebSocket 连接失败状态码及其含义：

1000：正常关闭。表示 WebSocket 连接被成功关闭。

1006：无法连接。表示连接尝试失败，原因可能是服务器无法访问、网络故障或其他未知错误。

1001：终端离开。表示连接由于某种原因被客户端终止，例如用户关闭了网页或离开了当前页面。

1011：服务器错误。表示服务器在处理 WebSocket 连接时发生了内部错误。

1005：无状态码。表示连接关闭时没有提供具体的状态码。

这些状态码是 WebSocket 协议定义的一部分，不同的状态码表示不同的连接状态和错误原因。需要注意的是，这些状态码是协议规定的，但实际上服务器和客户端的实现可能会有所不同，可能会返回其他自定义的状态码。

在实际应用中，你可以通过监听 WebSocket 连接的 onclose 事件来获取连接关闭时的状态码，并根据状态码进行相应的错误处理和重连操作。

需要特别注意的是，以上状态码仅涵盖了一部分常见的情况，实际应用中可能还会遇到其他状态码。因此，在处理 WebSocket 连接时，建议综合考虑各种状态码，并通过测试和日志记录来获取更准确的错误信息和状态码。


## 连接超时 重连

如果你只想针对连接超时的情况进行重连，可以使用以下代码作为参考：

```javascript

let socket;
const maxReconnectAttempts = 5;
const reconnectInterval = 3000; // 重连间隔，单位：毫秒

function connectWebSocket() {
  socket = new WebSocket('wss://example.com'); // 替换为你的 WebSocket 服务器地址

  socket.onopen = () => {
    console.log('WebSocket 连接已建立');
  };

  socket.onclose = (event) => {
    if (event.code === 1000) {
      console.log('WebSocket 连接已关闭');
    } else {
      console.log('WebSocket 连接已断开，尝试重新连接...');
      reconnect();
    }
  };

  socket.onerror = (error) => {
    console.error('WebSocket 错误:', error);
  };
}

function reconnect() {
  let reconnectAttempts = 0;

  const reconnectTimer = setInterval(() => {
    if (reconnectAttempts < maxReconnectAttempts && socket.readyState !== WebSocket.OPEN) {
      console.log('尝试重新连接...');
      connectWebSocket();
      reconnectAttempts++;
    } else {
      console.log('已达到最大重连次数或连接已恢复');
      clearInterval(reconnectTimer);
    }
  }, reconnectInterval);
}

connectWebSocket();
```

在这个示例代码中，我们使用 `setInterval` 定时器来进行重连尝试。在每次定时器触发时，判断当前重连次数是否小于最大重连次数，并且 WebSocket 的状态不是已经打开。如果满足条件，则尝试重新连接，增加重连次数。如果达到最大重连次数或连接已恢复，清除定时器停止重连。

请注意，这个示例代码仅仅针对连接超时的情况进行重连，其他断开连接的情况不会触发重连操作。如果你需要处理其他连接错误或断开的情况，可以根据实际需求进行修改和扩展。



## 心跳检测和网络中断自动重连

当你使用 JavaScript 来实现 WebSocket 连接时，你可以编写一个具有心跳检测和网络中断自动重连功能的 WebSocket 客户端。下面是一个示例代码，演示了如何实现这样的 WebSocket 客户端：

```javascript
const WebSocketUrl = 'wss://example.com'; // 替换为你的 WebSocket URL
const heartbeatInterval = 5000; // 心跳检测间隔时间（单位：毫秒）
const reconnectInterval = 10000; // 重连间隔时间（单位：毫秒）

let socket: WebSocket | null = null;
let heartbeatTimer: NodeJS.Timeout | null = null;
let reconnectTimer: NodeJS.Timeout | null = null;
let isConnected = false;

// 创建 WebSocket 连接
function createWebSocket() {
  socket = new WebSocket(WebSocketUrl);

  // 监听 WebSocket 事件
  socket.onopen = onSocketOpen;
  socket.onclose = onSocketClose;
  socket.onerror = onSocketError;
  socket.onmessage = onSocketMessage;
}

// 处理 WebSocket 打开事件
function onSocketOpen() {
  console.log('WebSocket 连接已打开');
  isConnected = true;

  // 开启心跳检测定时器
  startHeartbeat();
}

// 处理 WebSocket 关闭事件
function onSocketClose() {
  console.log('WebSocket 连接已关闭');
  isConnected = false;

  // 停止心跳检测定时器
  stopHeartbeat();

  // 开启重连定时器
  startReconnect();
}

// 处理 WebSocket 错误事件
function onSocketError(error: Event) {
  console.error('WebSocket 错误:', error);
}

// 处理 WebSocket 消息事件
function onSocketMessage(event: MessageEvent) {
  const message = event.data;
  console.log('收到消息:', message);

  // 在这里处理收到的消息逻辑
}

// 发送心跳检测消息
function sendHeartbeat() {
  if (socket && socket.readyState === WebSocket.OPEN) {
    // 在这里定义你的心跳消息格式
    const heartbeatMessage = 'heartbeat';

    socket.send(heartbeatMessage);
  }
}

// 开启心跳检测定时器
function startHeartbeat() {
  heartbeatTimer = setInterval(sendHeartbeat, heartbeatInterval);
}

// 停止心跳检测定时器
function stopHeartbeat() {
  if (heartbeatTimer) {
    clearInterval(heartbeatTimer);
    heartbeatTimer = null;
  }
}

// 开启重连定时器
function startReconnect() {
  if (!reconnectTimer) {
    reconnectTimer = setInterval(reconnect, reconnectInterval);
  }
}

// 停止重连定时器
function stopReconnect() {
  if (reconnectTimer) {
    clearInterval(reconnectTimer);
    reconnectTimer = null;
  }
}

// 重连 WebSocket
function reconnect() {
  if (!isConnected) {
    console.log('正在尝试重新连接 WebSocket...');
    createWebSocket();
  } else {
    stopReconnect();
  }
}

// 初始化 WebSocket 连接
function initWebSocket() {
  createWebSocket();
}

// 启动 WebSocket 客户端
initWebSocket();

```

在上述代码中，我们首先定义了 WebSocket 的 URL、心跳检测间隔时间和重连间隔时间。然后，我们创建了一个 WebSocket 对象，并在相应的事件处理函数中处理连接的打开、关闭、错误和消息事件。

在连接打开时，我们启动心跳检测定时器，并在每个固定的时间间隔内发送心跳消息给服务器。如果连接关闭或发生错误，我们停止心跳检测定时器，并启动重连定时器，在一定的时间间隔后尝试重新连接 WebSocket。

你可以根据实际情况修改 `WebSocketUrl`、`heartbeatInterval` 和 `reconnectInterval` 的值，以及在消息事件处理函数中处理收到的消息。

请注意，上述代码仅提供了基本的实现框架，你可能需要根据你的具体需求进行进一步的定制和完善。


## 刷新页面重连


```js

const WebSocketUrl = 'wss://example.com'; // 替换为你的 WebSocket URL

let socket = null;

// 创建 WebSocket 连接
function createWebSocket() {
socket = new WebSocket(WebSocketUrl);

// 监听 WebSocket 事件
socket.onopen = onSocketOpen;
socket.onclose = onSocketClose;
socket.onerror = onSocketError;
socket.onmessage = onSocketMessage;
}

// 处理 WebSocket 打开事件
function onSocketOpen() {
console.log('WebSocket 连接已打开');

// 在这里可以执行一些连接成功后的逻辑
}

// 处理 WebSocket 关闭事件
function onSocketClose() {
console.log('WebSocket 连接已关闭');

// 在这里可以执行一些连接关闭后的逻辑

// 清除 sessionStorage 中的连接状态
sessionStorage.removeItem('websocketConnected');
}

// 处理 WebSocket 错误事件
function onSocketError(error) {
console.error('WebSocket 错误:', error);
}

// 处理 WebSocket 消息事件
function onSocketMessage(event) {
const message = event.data;
console.log('收到消息:', message);

// 在这里处理收到的消息逻辑
}

// 初始化 WebSocket 连接
function initWebSocket() {
const isConnected = sessionStorage.getItem('websocketConnected');

if (isConnected === 'true') {
createWebSocket();
}

// 监听页面关闭事件
window.addEventListener('beforeunload', saveWebSocketState);

// 监听页面加载事件
window.addEventListener('load', loadWebSocketState);
}

// 保存 WebSocket 连接状态到 sessionStorage
function saveWebSocketState() {
sessionStorage.setItem('websocketConnected', socket && socket.readyState === WebSocket.OPEN);
}

// 加载 WebSocket 连接状态
function loadWebSocketState() {
const isConnected = sessionStorage.getItem('websocketConnected');

if (isConnected === 'true') {
createWebSocket();
}
}

// 关闭 WebSocket 连接
function closeWebSocket() {
if (socket) {
socket.close();
}
}

// 启动 WebSocket 客户端
initWebSocket();


```

在上述代码中，我们通过 sessionStorage 来存储 WebSocket 的连接状态。在页面关闭时，我们使用 saveWebSocketState 函数将连接状态保存到 sessionStorage 中。在页面加载时，我们使用 loadWebSocketState 函数来读取连接状态并根据需要重新建立 WebSocket 连接。

另外，我们在 beforeunload 事件和 load 事件的监听器中分别调用了 saveWebSocketState 和 loadWebSocketState 函数，以便在页面关闭和重新加载时处理 WebSocket 连接状态。

请注意，sessionStorage 中的数据是针对每个浏览器标签页的，即在同一个浏览器的不同标签页中使用 WebSocket 时，它们将是独立的。如果你需要在多个标签页之间保持 WebSocket 连接，你需要使用其他的通信机制来进行同步。
