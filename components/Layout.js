import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import ChatbotScript from "./ChatScript";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Nav />
      <main>{children}</main>
      <Footer />
      <ChatbotScript
        chatbotId="112"
        domain="https://shopify-houseplants.vercel.app/"
        env="dev"
        islandType="button"
      />
    </div>
  );
}
