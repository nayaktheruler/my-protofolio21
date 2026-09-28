import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, User, Sparkles } from 'lucide-react';

const responses = [
  {
    keywords: ['project', 'build', 'made', 'created'],
    response: "I've built several projects including an AI Interview Platform (using OpenAI for dynamic questions), a Real-time Object Detection system, and this 3D interactive portfolio website! You can check them out in my Projects section or on my GitHub."
  },
  {
    keywords: ['skill', 'tech', 'stack', 'know', 'language'],
    response: "My core stack is the MERN stack (MongoDB, Express, React, Node.js). I also program in Python and C++, and I have a strong focus on Generative AI and Prompt Engineering."
  },
  {
    keywords: ['paimana', 'paimana ai', 'tell me about paimana'],
    response: "PAIMANA AI is a specialized platform I'm exploring that leverages artificial intelligence to solve complex data challenges. It's an area I'm deeply passionate about as I continue my journey in AI/ML."
  },
  {
    keywords: ['contact', 'hire', 'email', 'phone', 'reach'],
    response: "You can reach me via email at nayaksomyaranjan042@gmail.com, or call me at +91 9692071177. I'd love to chat about new opportunities!"
  },
  {
    keywords: ['resume', 'cv', 'download'],
    response: "You can download my resume by clicking the 'Download Resume' button at the top right of the navigation bar, or by typing 'resume' in the developer terminal!"
  },
  {
    keywords: ['hi', 'hello', 'hey', 'greetings'],
    response: "Hi there! I'm Somya's AI assistant. You can ask me about his projects, skills, education, or how to contact him."
  },
  {
    keywords: ['who are you', 'what are you'],
    response: "I am 'AI Me', a specialized assistant built by Somya Ranjan Nayak to help you navigate his portfolio and answer questions about his skills and projects."
  }
];

const getAIResponse = (text) => {
  const lowerText = text.toLowerCase();
  for (const item of responses) {
    if (item.keywords.some(kw => lowerText.includes(kw))) {
      return item.response;
    }
  }
  return "I'm not quite sure about that. Try asking about Somya's 'projects', 'skills', 'PAIMANA AI', or how to 'contact' him!";
};

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'ai', text: "Hello! I'm Somya's AI assistant. Ask me anything about his projects, skills, or background!" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const endOfMessagesRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    
    setIsTyping(true);
    
    // Simulate AI thinking delay
    setTimeout(() => {
      const response = getAIResponse(userMsg);
      setMessages(prev => [...prev, { sender: 'ai', text: response }]);
      setIsTyping(false);
    }, 800 + Math.random() * 700);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-[90] w-14 h-14 rounded-full bg-gradient-to-br from-violet to-primary shadow-[0_0_20px_rgba(139,92,255,0.4)] flex items-center justify-center text-white ${isOpen ? 'hidden' : 'flex'}`}
      >
        <Sparkles className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 sm:w-96 w-[calc(100vw-3rem)] h-[500px] max-h-[80vh] bg-surface-2 border border-border/50 rounded-2xl shadow-2xl z-[99] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-violet to-primary p-4 flex items-center justify-between shadow-md relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">Ask Somya AI</h3>
                  <p className="text-white/70 text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse"></span>
                    Online
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-background/50">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.sender === 'user' 
                      ? 'bg-primary text-white rounded-tr-sm' 
                      : 'bg-surface border border-border text-text-main rounded-tl-sm shadow-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-surface border border-border p-3 rounded-2xl rounded-tl-sm flex gap-1">
                    <span className="w-2 h-2 bg-text-dim rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-text-dim rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-text-dim rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              )}
              <div ref={endOfMessagesRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-surface-2 border-t border-border/50 flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything..."
                className="flex-1 bg-surface border border-border/50 rounded-full px-4 py-2 text-sm text-text-main focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
              >
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
