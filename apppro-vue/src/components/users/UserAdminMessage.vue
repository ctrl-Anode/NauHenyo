<template>
  <div class="page-container">
    <div class="chat-container">
      <!-- Chat Header -->
      <div class="chat-header">
        <h2>User-Admin Communication</h2>
      </div>

      <!-- Chat Box with Messages -->
      <div class="chat-box">
        <div
          v-for="(msg, index) in messages"
          :key="index"
          class="message"
          :class="{ 'admin': msg.isAdmin, 'user': !msg.isAdmin }"
        >
          <span class="sender">{{ msg.isAdmin ? 'Admin' : 'You' }}</span>
          <div class="text-bubble">
            <span class="text">{{ msg.text }}</span>
          </div>
        </div>
      </div>

      <!-- Input Field for New Messages -->
      <form @submit.prevent="sendMessage" class="chat-input">
        <input v-model="userMessage" type="text" placeholder="Type your message..." />
        <button type="submit">Send</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserAdminMessage",
  data() {
    return {
      userMessage: "",
      messages: [
        { text: "Welcome! How can I assist you?", isAdmin: true }
      ]
    };
  },
  methods: {
    sendMessage() {
      if (this.userMessage.trim()) {
        this.messages.push({ text: this.userMessage, isAdmin: false });
        this.userMessage = "";
        this.simulateAdminResponse();
      }
    },
    simulateAdminResponse() {
      setTimeout(() => {
        this.messages.push({
          text: "Thank you for your message. An admin will review it and respond shortly.",
          isAdmin: true
        });
        this.scrollToBottom();
      }, 1000);
    },
    scrollToBottom() {
      const chatBox = this.$el.querySelector(".chat-box");
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  },
  mounted() {
    this.scrollToBottom();
  }
};
</script>

<style scoped>
.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f2f5;
}

.chat-container {
  width: 100%;
  max-width: 450px;
  height: 600px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  background-color: #ffffff;
  font-family: Arial, sans-serif;
}

.chat-header {
  background-color: #0078d4;
  color: white;
  text-align: center;
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid #006bb3;
}

.chat-box {
  flex: 1;
  padding: 15px;
  overflow-y: auto;
  background-color: #f8f9fa;
}

.message {
  display: flex;
  flex-direction: column;
  max-width: 80%; /* Limit message bubble width */
  margin: 8px 0;
  position: relative;
  word-wrap: break-word;
}

.message.user {
  align-self: flex-end;
  margin-left: auto; /* Aligns user messages to the right */
  margin-right: 10px;
}

.message.admin {
  align-self: flex-start;
  margin-left: 10px;
}

.sender {
  font-size: 12px;
  color: #555;
  margin-bottom: 3px;
  font-weight: bold;
}

.text-bubble {
  padding: 10px 15px;
  border-radius: 20px;
  font-size: 14px;
  line-height: 1.4;
  position: relative;
  display: inline-block;
}

.message.user .text-bubble {
  background-color: #0078d4;
  color: white;
  border-bottom-right-radius: 0;
}

.message.admin .text-bubble {
  background-color: #f1f0f0;
  color: #333;
  border-bottom-left-radius: 0;
}

.message.user .text-bubble::after {
  content: "";
  position: absolute;
  right: -8px;
  bottom: 0;
  width: 0;
  height: 0;
  border-left: 8px solid #0078d4;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
}

.message.admin .text-bubble::after {
  content: "";
  position: absolute;
  left: -8px;
  bottom: 0;
  width: 0;
  height: 0;
  border-right: 8px solid #f1f0f0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
}

.chat-input {
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #ddd;
  background-color: white;
}

.chat-input input {
  flex: 1;
  padding: 12px;
  font-size: 15px;
  border: 1px solid #ddd;
  border-radius: 20px;
  margin-right: 10px;
  outline: none;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: border 0.3s;
}

.chat-input input:focus {
  border-color: #0078d4;
}

.chat-input button {
  background-color: #0078d4;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.chat-input button:hover {
  background-color: #005bb5;
}
</style>
