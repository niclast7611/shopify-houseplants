// components/ChatScript.js
import Script from "next/script";
import React from "react";

const ChatbotScript = ({ chatbotId, domain, env, islandType }) => {
  return (
    <Script id="chatbot-script" strategy="afterInteractive">
      {`
        (function() {
            var chatButton = document.createElement('client-chat-button-island');
            document.body.insertBefore(chatButton, document.body.firstChild);
            var script = document.createElement('script');
            script.async = true;
            script.src = 'https://ripe.chat/islands/client-chat-button.island.umd.js';
            script.setAttribute('chatbotId', "${chatbotId}");
            script.setAttribute('domain', "${domain}");
            script.setAttribute('env', "${env}");
            script.setAttribute('islandType', "${islandType}");
            document.head.appendChild(script);
          })();
      `}
    </Script>
  );
};

export default ChatbotScript;
