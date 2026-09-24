document.addEventListener('DOMContentLoaded', () => {
  const createRoomButton = document.getElementById('create-room');
  const joinRoomButton = document.getElementById('join-room');
  const chatSection = document.getElementById('chat-section');
  const chatArea = document.getElementById('chat-area');
  const messageInput = document.getElementById('message');
  const sendMessageButton = document.getElementById('send-message');
  const sidebar = document.getElementById('sidebar');
  const leaveRoomButton = document.getElementById('leave-room');

  // Show the chat section and hide the room code section when joining a room
  joinRoomButton.addEventListener('click', () => {
    document.getElementById('room-code-section').classList.add('hidden');
    chatSection.classList.remove('hidden');
    sidebar.classList.remove('hidden');
    // Here, you would typically connect to a WebSocket server
    // For this example, we'll just simulate message sending/receiving
    simulateChat();
  });

  createRoomButton.addEventListener('click', () => {
    // Here, you would typically create a room and get a room code
    // For this example, we'll just simulate joining a room
    document.getElementById('room-code-section').classList.add('hidden');
    chatSection.classList.remove('hidden');
    sidebar.classList.remove('hidden');
    simulateChat();
  });

  leaveRoomButton.addEventListener('click', () => {
    chatSection.classList.add('hidden');
    sidebar.classList.add('hidden');
    document.getElementById('room-code-section').classList.remove('hidden');
  });

  function simulateChat() {
    const messages = [
      "Welcome to the chat room!",
      "Type your message and press send.",
      "Enjoy chatting!"
    ];

    messages.forEach(msg => {
      appendMessage(msg,'system');
    });

    // Simulate receiving a message
    setTimeout(() => {
      appendMessage("This is a simulated message from the server!",'system');
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
    chatArea.scrollTop = chatArea.scrollHeight;
  }
});
