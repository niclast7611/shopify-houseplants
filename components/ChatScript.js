import { useEffect } from "react";

const ChatbotScript = ({ chatbotId, domain, env, islandType }) => {
  console.log("ChatbotScript", chatbotId, domain, env, islandType);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://ripe.chat/islands/client-chat-button.island.umd.js";
    script.async = true;
    script.setAttribute("chatbotId", chatbotId);
    script.setAttribute("domain", domain);
    script.setAttribute("env", env);
    script.setAttribute("islandType", islandType);
    document.head.appendChild(script);

    const chatButtonElement = document.createElement(
      "client-chat-button-island"
    );
    document.body.appendChild(chatButtonElement);

    return () => {
      // Cleanup if necessary
      document.head.removeChild(script);
      document.body.removeChild(chatButtonElement);
    };
  }, [chatbotId, domain, islandType, env]);

  return null;
};

export default ChatbotScript;
