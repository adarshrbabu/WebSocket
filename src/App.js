import React, { useEffect, useState } from "react";

const WebSocketExample = () => {
    const [message, setMessage] = useState("");
    const [receivedMessages, setReceivedMessages] = useState([]);

    useEffect(() => {
        const ws = new WebSocket("wss://socketsbay.com/wss/v2/1/demo/");

        ws.onopen = () => {
            console.log("WebSocket connection opened");
        };

        ws.onmessage = (event) => {
            console.log(`WebSocket message received: ${event.data}`);
            console.log("eventeventevent=", event);
            setReceivedMessages((prevMessages) => [
                ...prevMessages,
                event.data,
            ]);
        };

        ws.onclose = () => {
            console.log("WebSocket connection closed");
        };

        return () => {
            ws.close();
        };
    }, []);

    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        sendMessage();
    };

    const sendMessage = () => {
        const ws = new WebSocket("wss://socketsbay.com/wss/v2/1/demo/");
        ws.onopen = () => {
            console.log("WebSocket connection opened for sending message");
            ws.send(message);
            setMessage("");
        };

        ws.onclose = () => {
            console.log("WebSocket connection closed after sending message");
        };
    };

    return (
        <div>
            <h1>WebSocket Example</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={message}
                    onChange={handleInputChange}
                />
                <button type="submit">Send</button>
            </form>
            <h2>Received messages:</h2>
            <ul>
                {receivedMessages.map((message, index) => (
                    <li key={index}>{message}</li>
                ))}
            </ul>
        </div>
    );
};

export default WebSocketExample;
