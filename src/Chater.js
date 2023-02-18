import useWebSocket, { ReadyState } from "react-use-websocket";

// In functional React component

// This can also be an async getter function. See notes below on Async Urls.
const socketUrl = "wss://echo.websocket.org";

const {
    sendMessage,
    sendJsonMessage,
    lastMessage,
    lastJsonMessage,
    readyState,
    getWebSocket,
} = useWebSocket(socketUrl, {
    onOpen: () => console.log("opened"),
    //Will attempt to reconnect on all close events, such as server shutting down
    shouldReconnect: (closeEvent) => true,
});
