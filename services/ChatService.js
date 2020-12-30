import getEnvVars from "../environment";
const { apiUrl } = getEnvVars();

const ChatService = {
  getConversationMessages: (payload) => {
    return fetch(`${apiUrl}/getConversationMessages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  },

  addMessage: (payload) => {
    return fetch(`${apiUrl}/addMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  },
};

export default ChatService;
