import React, { useState, useEffect, useRef } from "react";

const SUGGESTIONS = [
  "What is your tech stack?",
  "Tell me about your FYP.",
  "Are you available for hire?",
  "Where are you located?"
];

const BOT_KNOWLEDGE = [
  {
    keywords: ["hello", "hi", "hey", "greetings", "yo"],
    response: "Hello there! 👋 Nice to meet you. I'm Shakir's AI Assistant. Ask me anything about his programming skills, projects, education, or availability!"
  },
  {
    keywords: ["skills", "tech", "languages", "stack", "react", "node", "mongodb", "express", "javascript", "typescript"],
    response: "Shakir is a skilled **MERN Stack Developer**. His core skills include:\n\n• **Frontend**: React, Tailwind CSS, JavaScript (ES6+), TypeScript, HTML5/CSS3\n• **Backend**: Node.js, Express.js, REST APIs\n• **Database**: MongoDB, Mongoose\n• **Tools**: Git & GitHub, VS Code, Linux\n\nHe specializes in building clean, responsive, and high-performance web applications!"
  },
  {
    keywords: ["fyp", "pdf-based", "pdf", "learning assistant", "ai learning", "final year", "pdf assistant"],
    response: "Shakir's Final Year Project is the **AI Learning Assistant (PDF-Based)**. It is a full-stack MERN application that lets users upload PDFs and interact with an AI to learn from the content, ask questions, and get summaries.\n\nCheck out the live demo here: [AI Learning Assistant](https://ai-learning-frontend-navy.vercel.app/login)!"
  },
  {
    keywords: ["projects", "things built", "what did you build", "portfolio projects", "e-commerce", "stripe", "chat app", "dashboard"],
    response: "Shakir has built several impressive projects:\n\n1. **AI Learning Assistant (PDF-Based)**: Upload and learn from PDFs using AI.\n2. **E-Commerce Platform**: Complete shop with Stripe payments, JWT auth, and admin panel.\n3. **MERN E-Commerce API**: Secure REST API backend with JWT user auth.\n4. **Blog API**: Express & MongoDB backend supporting CRUD operations.\n5. **Task Management App**: Collaborative board with drag-and-drop & Socket.io.\n\nAll details are listed in the **Projects** section of this site!"
  },
  {
    keywords: ["location", "contact", "email", "address", "phone", "linkedin", "github", "hire", "job", "work", "available"],
    response: "Shakir is based in **Peshawar, Pakistan** and is **available for hire** or freelance opportunities! \n\nYou can reach him via:\n• **Email**: shakirullahaup@gmail.com\n• **LinkedIn**: [LinkedIn Profile](https://www.linkedin.com/in/shakir-ullah-203ab4271/)\n• **GitHub**: [GitHub Profile](https://github.com/ShakirUllah12)\n\nFeel free to fill out the **Contact Form** at the bottom of the page to message him directly!"
  },
  {
    keywords: ["education", "degree", "university", "graduate", "college", "study"],
    response: "Shakir is a **Computer Science graduate** from Peshawar, Pakistan. He has a strong foundation in software engineering principles, databases, data structures, and web development."
  },
  {
    keywords: ["help", "what can you do", "ask", "question"],
    response: "You can ask me questions like:\n• 'What is your tech stack?'\n• 'Tell me about your PDF learning project'\n• 'Where are you located?'\n• 'Are you looking for a job?'"
  }
];

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hi there! 👋 I'm Shakir's AI Assistant. How can I help you today? Ask me about my skills, projects, or hireability!",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const parseMessageText = (text) => {
    // Basic formatting for **bold** text and [label](url) links
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    // Parse [label](url) links
    while ((match = linkRegex.exec(text)) !== null) {
      const offset = match.index;
      if (offset > lastIndex) {
        parts.push(text.substring(lastIndex, offset));
      }
      const label = match[1];
      const url = match[2];
      parts.push(
        <a
          key={url + offset}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "var(--accent)",
            textDecoration: "underline",
            fontWeight: "600",
            wordBreak: "break-all"
          }}
        >
          {label}
        </a>
      );
      lastIndex = linkRegex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    // Process bold text on the resulting array/strings
    return parts.length > 0 ? parts : text;
  };

  const getBotResponse = (userText) => {
    const query = userText.toLowerCase().trim();
    
    // Find matching topic
    for (const knowledge of BOT_KNOWLEDGE) {
      if (knowledge.keywords.some(keyword => query.includes(keyword))) {
        return knowledge.response;
      }
    }
    
    // Default fallback response
    return "That's a great question! While I don't have a direct answer for that, Shakir definitely does. You can contact him directly at **shakirullahaup@gmail.com** or send a message using the Contact Form at the bottom of this page!";
  };

  const handleSendMessage = (textToSend) => {
    if (!textToSend.trim()) return;

    // Add user message
    const userMsg = {
      id: Date.now(),
      sender: "user",
      text: textToSend,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    
    // Start typing simulation
    setIsTyping(true);
    
    setTimeout(() => {
      const responseText = getBotResponse(textToSend);
      const botMsg = {
        id: Date.now() + 1,
        sender: "bot",
        text: responseText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setIsTyping(false);
      setMessages(prev => [...prev, botMsg]);
    }, 1000); // 1 second delay for realism
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSendMessage(input);
  };

  return (
    <>
      {/* Floating Chat Icon Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          backgroundColor: "var(--primary)",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 8px 24px var(--primary-glow), var(--card-shadow)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: isOpen ? "rotate(180deg)" : "scale(1)",
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = isOpen ? "rotate(180deg) scale(1.05)" : "scale(1.08)";
          e.target.style.boxShadow = "0 12px 28px var(--primary-glow)";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = isOpen ? "rotate(180deg)" : "scale(1)";
          e.target.style.boxShadow = "0 8px 24px var(--primary-glow)";
        }}
        title="Chat with Shakir's Assistant"
      >
        {isOpen ? (
          <span style={{ fontSize: "24px", color: "var(--bg-primary)" }}>✕</span>
        ) : (
          <span style={{ fontSize: "26px", color: "var(--bg-primary)" }}>💬</span>
        )}
      </button>

      {/* Chat Widget Panel */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "96px",
            right: "24px",
            width: "clamp(320px, 90vw, 400px)",
            height: "min(600px, 80vh)",
            backgroundColor: "var(--bg-card)",
            border: "1px solid var(--bg-card-border)",
            borderRadius: "16px",
            boxShadow: "var(--card-shadow)",
            display: "flex",
            flexDirection: "column",
            zIndex: 1000,
            overflow: "hidden",
            backdropFilter: "blur(16px)",
            animation: "slideUp 0.3s ease-out",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "16px 20px",
              backgroundColor: "var(--bg-secondary)",
              borderBottom: "1px solid var(--bg-card-border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div 
                style={{ 
                  width: "40px", 
                  height: "40px", 
                  borderRadius: "50%", 
                  backgroundColor: "var(--primary-glow)",
                  border: "1.5px solid var(--primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18
                }}
              >
                🤖
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: 14, fontWeight: "600", color: "var(--text-primary)" }}>Shakir's AI Assistant</h4>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 2 }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "var(--accent)", display: "inline-block", boxShadow: "0 0 8px var(--accent)" }}></span>
                  <span style={{ fontSize: 11, color: "var(--text-muted)", fontFamily: "'Fira Code', monospace" }}>online_</span>
                </div>
              </div>
            </div>
            
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: "none",
                border: "none",
                color: "var(--text-muted)",
                fontSize: 20,
                cursor: "pointer",
                padding: 4
              }}
            >
              ✕
            </button>
          </div>

          {/* Messages List Area */}
          <div
            style={{
              flex: 1,
              padding: "20px",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              background: "var(--bg-primary)",
            }}
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                style={{
                  alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                  maxWidth: "85%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 4
                }}
              >
                <div
                  style={{
                    padding: "12px 16px",
                    borderRadius: msg.sender === "user" ? "16px 16px 2px 16px" : "16px 16px 16px 2px",
                    backgroundColor: msg.sender === "user" ? "var(--primary)" : "var(--bg-card)",
                    color: msg.sender === "user" ? "var(--bg-primary)" : "var(--text-primary)",
                    border: msg.sender === "user" ? "none" : "1px solid var(--bg-card-border)",
                    fontSize: "14px",
                    lineHeight: "1.5",
                    whiteSpace: "pre-wrap",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
                  }}
                >
                  {parseMessageText(msg.text)}
                </div>
                <span
                  className="mono"
                  style={{
                    fontSize: "10px",
                    color: "var(--text-muted)",
                    alignSelf: msg.sender === "user" ? "flex-end" : "flex-start"
                  }}
                >
                  {msg.time}
                </span>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div style={{ alignSelf: "flex-start", display: "flex", flexDirection: "column", gap: 4 }}>
                <div
                  style={{
                    padding: "12px 16px",
                    borderRadius: "16px 16px 16px 2px",
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--bg-card-border)",
                    color: "var(--text-muted)",
                    fontSize: "14px",
                    display: "flex",
                    gap: 4
                  }}
                >
                  <span className="typing-dot" style={{ animation: "typingBounce 1.4s infinite 0s" }}>•</span>
                  <span className="typing-dot" style={{ animation: "typingBounce 1.4s infinite 0.2s" }}>•</span>
                  <span className="typing-dot" style={{ animation: "typingBounce 1.4s infinite 0.4s" }}>•</span>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick suggestions chips */}
          <div
            style={{
              padding: "10px 16px 0 16px",
              background: "var(--bg-primary)",
              display: "flex",
              gap: 8,
              overflowX: "auto",
              whiteSpace: "nowrap",
              scrollbarWidth: "none", // Firefox
            }}
          >
            {SUGGESTIONS.map((sug) => (
              <button
                key={sug}
                onClick={() => handleSendMessage(sug)}
                className="mono"
                style={{
                  padding: "6px 12px",
                  fontSize: "11px",
                  borderRadius: "14px",
                  border: "1px solid var(--bg-card-border)",
                  backgroundColor: "var(--bg-card)",
                  color: "var(--primary)",
                  cursor: "pointer",
                  flexShrink: 0,
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = "var(--primary)";
                  e.target.style.backgroundColor = "var(--primary-glow)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = "var(--bg-card-border)";
                  e.target.style.backgroundColor = "var(--bg-card)";
                }}
              >
                {sug}
              </button>
            ))}
          </div>

          {/* Footer Input Area */}
          <form
            onSubmit={handleFormSubmit}
            style={{
              padding: "12px 16px",
              backgroundColor: "var(--bg-secondary)",
              borderTop: "1px solid var(--bg-card-border)",
              display: "flex",
              gap: 10,
              alignItems: "center"
            }}
          >
            <input
              type="text"
              placeholder="Ask me something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isTyping}
              style={{
                flex: 1,
                padding: "10px 14px",
                fontSize: "14px",
                borderRadius: "8px",
                border: "1px solid var(--bg-card-border)",
                backgroundColor: "var(--bg-primary)",
                color: "var(--text-primary)",
                outline: "none"
              }}
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="btn-filled"
              style={{
                width: "38px",
                height: "38px",
                padding: 0,
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: (!input.trim() || isTyping) ? 0.6 : 1,
                cursor: (!input.trim() || isTyping) ? "default" : "pointer"
              }}
            >
              🚀
            </button>
          </form>
        </div>
      )}

      {/* Typing dots CSS styling injection */}
      <style>{`
        @keyframes typingBounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-4px); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}

export default Chatbot;
