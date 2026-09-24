document.addEventListener('DOMContentLoaded', () => {
    const roomCodeInput = document.getElementById('room-code');
    const joinRoomButton = document.getElementById('join-room');
    const chatSection = document.getElementById('chat-section');
    const chatArea = document.getElementById('chat-area');
    const messageInput = document.getElementById('message');
    const sendMessageButton = document.getElementById('send-message');

    // Show the chat section and hide the room code section when joining a room
    joinRoomButton.addEventListener('click', () => {
        const roomCode = roomCodeInput.value;
        if (roomCode) {
            document.getElementById('room-code-section').classList.add('hidden');
            chatSection.classList.remove('hidden');
            // Here, you would typically connect to a WebSocket server
            // For this example, we'll just simulate message sending/receiving
            simulateChat();
        }
    });

    // Simulate chat functionality
    function simulateChat() {
        const messages = [
            "Welcome to the chat room!",
            "Type your message and press send.",
            "Enjoy chatting!"
        ];

        messages.forEach(msg => {
            appendMessage(msg, 'system');
        });

        // Simulate receiving a message
        setTimeout(() => {
            appendMessage("This is a simulated message from the server!", 'system');
        }, 1000);

        // Handle sending messages
        sendMessageButton.addEventListener('click', () => {
            const message = messageInput.value;
            if (message) {
                appendMessage(message, 'user');
                messageInput.value = ''; // Clear input
            }
        });
    }

    // Append a message to the chat area
    function appendMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.textContent = `${sender}: ${message}`;
        chatArea.appendChild(messageElement);
        chatArea.scrollTop = chatArea.scrollHeight; // Auto scroll to bottom
    }
});
