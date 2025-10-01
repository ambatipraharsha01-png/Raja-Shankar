import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { CloseIcon, SendIcon, UserCircleIcon } from './icons';
import { UniversityLogoIcon } from './icons';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

interface AssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AssistantModal: React.FC<AssistantModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [apiKey, setApiKey] = useState(process.env.API_KEY);


  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  useEffect(() => {
    if (isOpen && messages.length === 0) {
        setMessages([{
            sender: 'bot',
            text: !apiKey 
                ? "Hello! Please set your Gemini API key to use the VTOP Assistant."
                : "Hello! I am the VTOP Assistant. How can I help you today with questions about VIT-AP?"
        }])
    }
  }, [isOpen, apiKey]);

  const handleSend = async () => {
    if (input.trim() === '' || isLoading || !apiKey) return;

    const userMessage: Message = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `You are VTOP Assistant, an expert AI helper for students at VIT-AP university. Your goal is to provide accurate, concise, and helpful information related to the university. A student has asked: "${userMessage.text}"`,
        config: {
          systemInstruction: 'You are a helpful and friendly AI assistant for VIT-AP University students named VTOP Assistant. Answer questions concisely and professionally.'
        }
      });
      
      const botMessage: Message = { text: response.text, sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Gemini API error:", error);
      const errorMessage: Message = { text: 'Sorry, I am having trouble connecting. Please try again later.', sender: 'bot' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end justify-end p-0 sm:p-8" onClick={onClose}>
      <div 
        className="bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl w-full max-w-lg h-[90vh] sm:h-[70vh] flex flex-col transform transition-all"
        onClick={e => e.stopPropagation()}
      >
        <header className="flex items-center justify-between p-4 border-b border-gray-200 bg-blue-600 text-white rounded-t-2xl sm:rounded-t-xl">
          <h2 className="text-xl font-bold">VTOP Assistant</h2>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-white/20 transition-colors">
            <CloseIcon className="w-6 h-6" />
          </button>
        </header>

        <main className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
              {msg.sender === 'bot' && (
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                    <UniversityLogoIcon className="w-5 h-5"/>
                </div>
              )}
              <div className={`max-w-xs md:max-w-md px-4 py-2 rounded-2xl ${msg.sender === 'user' ? 'bg-blue-500 text-white rounded-br-none' : 'bg-gray-200 text-gray-800 rounded-bl-none'}`}>
                <p className="text-sm">{msg.text}</p>
              </div>
               {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                    <UserCircleIcon className="w-6 h-6 text-gray-600"/>
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-3">
               <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                    <UniversityLogoIcon className="w-5 h-5"/>
                </div>
              <div className="max-w-xs md:max-w-md px-4 py-2 rounded-2xl bg-gray-200 text-gray-800 rounded-bl-none">
                <div className="flex items-center space-x-1">
                    <span className="h-2 w-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="h-2 w-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="h-2 w-2 bg-blue-500 rounded-full animate-bounce"></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </main>

        <footer className="p-4 border-t border-gray-200 bg-white sm:rounded-b-xl">
          <div className="flex items-center bg-gray-100 rounded-full p-1">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={!apiKey ? "API Key not set" : "Ask me anything..."}
              className="w-full bg-transparent border-none focus:ring-0 px-4 py-2 text-sm"
              disabled={isLoading || !apiKey}
            />
            <button
              onClick={handleSend}
              disabled={isLoading || input.trim() === '' || !apiKey}
              className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors"
            >
              <SendIcon className="w-5 h-5" />
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AssistantModal;
