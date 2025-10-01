import React, { useState } from 'react';
import { MessageCircle, X, Send, Phone, Mail, User, Bot } from 'lucide-react';

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi there! 👋 How can I help you today?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    // Add user message
    const newUserMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date()
    };

    setMessages([...messages, newUserMessage]);
    setInputValue("");

    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponses = [
        "Thanks for your message! Our team will get back to you shortly.",
        "Great question! You can find more information in our Resources section.",
        "I've forwarded your query to our support team. They'll contact you soon.",
        "For immediate assistance, you can also call us at +1 (555) 123-4567.",
        "I'm here to help! Is there anything specific you'd like to know about our courses?"
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      const newBotMessage = {
        id: messages.length + 2,
        text: randomResponse,
        sender: "bot",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, newBotMessage]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl w-80 h-96 flex flex-col border border-gray-200 animate-zoom-in">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold">Elite BIM Assistant</h3>
                <p className="text-xs text-purple-200">Online now</p>
              </div>
            </div>
            <button 
              onClick={toggleChat}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.sender === 'user' 
                      ? 'bg-purple-600 text-white rounded-br-none' 
                      : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-purple-200' : 'text-gray-500'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Chat Input */}
          <form onSubmit={handleSend} className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="bg-purple-600 text-white rounded-full p-2 hover:bg-purple-700 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            
            {/* Quick Actions */}
            <div className="flex gap-2 mt-2">
              <button 
                type="button"
                onClick={() => {
                  setInputValue("Tell me about your courses");
                  setTimeout(() => {
                    const event = new Event('submit', { bubbles: true });
                    document.querySelector('form').dispatchEvent(event);
                  }, 100);
                }}
                className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded-full transition-colors"
              >
                Courses
              </button>
              <button 
                type="button"
                onClick={() => {
                  setInputValue("How can I enroll?");
                  setTimeout(() => {
                    const event = new Event('submit', { bubbles: true });
                    document.querySelector('form').dispatchEvent(event);
                  }, 100);
                }}
                className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded-full transition-colors"
              >
                Enroll
              </button>
              <button 
                type="button"
                onClick={() => {
                  setInputValue("Career counseling");
                  setTimeout(() => {
                    const event = new Event('submit', { bubbles: true });
                    document.querySelector('form').dispatchEvent(event);
                  }, 100);
                }}
                className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded-full transition-colors"
              >
                Career
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full p-4 shadow-2xl hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:scale-110 animate-pulse-glow"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
      
      {/* Alternative Contact Options (when chat is closed) */}
    
    </div>
  );
};

export default FloatingChat;