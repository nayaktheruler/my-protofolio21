import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Terminal as TerminalIcon } from 'lucide-react';

const TerminalModal = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', text: 'Welcome to Somya OS v1.0' },
    { type: 'output', text: 'Type "help" to see available commands.' }
  ]);
  const endOfMessagesRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let responseText = '';

    switch (trimmedCmd) {
      case 'help':
        responseText = `Available commands:
  about      - Short bio
  skills     - View tech stack
  projects   - List top projects
  education  - Academic timeline
  github     - Open GitHub profile
  contact    - Show contact details
  resume     - Download resume
  clear      - Clear terminal`;
        break;
      case 'about':
        responseText = "Hi, I'm Somya Ranjan Nayak. I'm a 3rd year B.Tech CSE(AIML) student passionate about AI, full-stack dev, and building real-world solutions.";
        break;
      case 'skills':
        responseText = "Tech Stack:\n- Languages: JavaScript, Python, C++\n- Frontend: React, Tailwind CSS\n- Backend: Node.js, Express\n- AI/ML: Generative AI, Prompt Engineering";
        break;
      case 'projects':
        responseText = "Top Projects:\n1. AI Interview Platform\n2. Real-time Object Detection\n3. Portfolio Website\nType 'github' to see more code.";
        break;
      case 'education':
        responseText = "Education:\n- B.Tech (CSE-AIML), Driems University [2024-2028]\n- 12th (Science), N.S.M City College [2022-2024]\n- 10th, High School [2020-2022]";
        break;
      case 'github':
        window.open('https://github.com/nayaktheruler', '_blank', 'noopener,noreferrer');
        responseText = "Opening GitHub in a new tab...";
        break;
      case 'contact':
        responseText = "Contact Info:\nEmail: nayaksomyaranjan042@gmail.com\nPhone: +91 9692071177";
        break;
      case 'resume':
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'SomyaRanjan_Nayak_Resume.pdf';
        link.click();
        responseText = "Downloading resume...";
        break;
      case 'clear':
        setHistory([]);
        return;
      case '':
        return;
      default:
        responseText = `Command not found: ${trimmedCmd}. Type "help" for available commands.`;
    }

    setHistory((prev) => [
      ...prev,
      { type: 'input', text: `> ${cmd}` },
      { type: 'output', text: responseText }
    ]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-2xl h-[60vh] bg-[#0d1117] border border-border/50 rounded-xl shadow-2xl z-[101] flex flex-col overflow-hidden font-mono text-sm"
          >
            {/* Terminal Header */}
            <div className="bg-[#161b22] px-4 py-2 border-b border-border/50 flex items-center justify-between select-none">
              <div className="flex items-center gap-2 text-text-dim">
                <TerminalIcon className="w-4 h-4" />
                <span>somya-os ~ terminal</span>
              </div>
              <button onClick={onClose} className="text-text-dim hover:text-white transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Terminal Body */}
            <div className="flex-1 p-4 overflow-y-auto text-[#00ff00] cursor-text" onClick={() => inputRef.current?.focus()}>
              {history.map((line, i) => (
                <div key={i} className={`mb-1 whitespace-pre-wrap ${line.type === 'input' ? 'text-white' : 'text-[#00ff00]/80'}`}>
                  {line.text}
                </div>
              ))}
              <div className="flex items-center mt-2">
                <span className="text-primary mr-2">guest@somya:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent border-none outline-none text-white font-mono caret-[#00ff00]"
                  autoComplete="off"
                  spellCheck="false"
                />
              </div>
              <div ref={endOfMessagesRef} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default TerminalModal;
