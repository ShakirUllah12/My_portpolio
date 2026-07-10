import React, { useState, useEffect, useRef } from "react";

const SUGGESTIONS = [
  "What is your tech stack?",
  "Tell me about your FYP.",
  "Are you available for hire?",
  "Where are you located?"
];

const BOT_KNOWLEDGE = [
  {
    keywords: ["hello", "hi", "hey", "greetings", "yo", "welcome"],
    response: "Hello there! 👋 Nice to meet you. I'm Shakir's Personal AI Assistant. Ask me anything about his qualifications, programming skills, projects, or job availability!"
  },
  {
    keywords: ["education", "qualification", "degree", "university", "graduate", "college", "study", "studies", "bsc", "bscs"],
    response: "Shakir is a **Computer Science graduate** from Peshawar, Pakistan. He holds a Bachelor of Science in Computer Science (BSCS), which gave him a solid foundation in software engineering principles, databases, data structures, algorithms, and web technologies."
  },
  {
    keywords: ["skills", "tech", "languages", "stack", "react", "node", "mongodb", "express", "javascript", "typescript", "tailwind", "html", "css"],
    response: "Shakir's core technical stack and skills include:\n\n• **Frontend**: React, JavaScript (ES6+), TypeScript, Tailwind CSS, HTML5/CSS3\n• **Backend**: Node.js, Express.js, RESTful APIs\n• **Database**: MongoDB, Mongoose\n• **Tools & Version Control**: Git & GitHub, VS Code, Linux, Figma\n\nHe specializes in building clean, modern, responsive, and high-performance MERN stack applications!"
  },
  {
    keywords: ["fyp", "pdf-based", "pdf", "learning assistant", "ai learning", "final year", "pdf assistant"],
    response: "Shakir's Final Year Project is the **AI Learning Assistant (PDF-Based)**.\n\n• **Description**: It allows users to upload PDF documents and engage in an interactive chat with an AI to learn from the content, ask specific questions, and generate summaries.\n• **Tech Stack**: React, Node.js, Express, MongoDB, Tailwind CSS, OpenAI API.\n• **Live Demo**: [Live Link](https://ai-learning-frontend-navy.vercel.app/login)\n• **Source Code**: [GitHub](https://github.com/ShakirUllah12)"
  },
  {
    keywords: ["e-commerce platform", "ecommerce platform", "online store", "shop", "ecommerce platform project"],
    response: "The **E-Commerce Platform** is a full-stack MERN application:\n\n• **Description**: Features user authentication, product management, shopping cart, admin dashboard, and secure credit card checkout payments.\n• **Tech Stack**: React, Node.js, MongoDB, Express, Stripe payments.\n• **Source Code**: [GitHub](https://github.com/ShakirUllah12)"
  },
  {
    keywords: ["mern e-commerce api", "ecommerce api", "shop api", "ecommerce backend"],
    response: "The **MERN E-Commerce API** is a robust backend database system:\n\n• **Description**: A RESTful API powering commerce functions, featuring secure JWT authentication, password hashing, and database-driven order and catalog systems.\n• **Tech Stack**: Node.js, Express.js, MongoDB, JWT, Bcrypt.\n• **Source Code**: [GitHub](https://github.com/ShakirUllah12/mern-ecommerce)"
  },
  {
    keywords: ["blog api", "blog backend", "blog database"],
    response: "The **Blog API** is a backend service for content managers:\n\n• **Description**: Supports full CRUD (Create, Read, Update, Delete) operations on articles, user registration, categories, and tags.\n• **Tech Stack**: Node.js, Express.js, MongoDB, Mongoose.\n• **Source Code**: [GitHub](https://github.com/ShakirUllah12/blog-api)"
  },
  {
    keywords: ["task management", "kanban", "collaboration tool", "socket"],
    response: "The **Task Management App** is a real-time organizational tool:\n\n• **Description**: Drag-and-drop workspace board enabling team collaboration, instant synchronization, and status updates.\n• **Tech Stack**: React, Express, MongoDB, Socket.io.\n• **Source Code**: [GitHub](https://github.com/ShakirUllah12)"
  },
  {
    keywords: ["social media dashboard", "dashboard project", "analytics dashboard"],
    response: "The **Social Media Dashboard** is a data visualization client:\n\n• **Description**: Modern frontend interface loaded with interactive charts displaying analytics, traffic, and user activity across multiple channels.\n• **Tech Stack**: React, Node.js, MongoDB, Chart.js.\n• **Source Code**: [GitHub](https://github.com/ShakirUllah12)"
  },
  {
    keywords: ["real-time chat app", "chat app project", "video call app", "webrtc project"],
    response: "The **Real-Time Chat App** is a communication client:\n\n• **Description**: Instant message transfer, support for file sharing, group conversations, and WebRTC-based video calls.\n• **Tech Stack**: React, Express, MongoDB, WebRTC.\n• **Source Code**: [GitHub](https://github.com/ShakirUllah12)"
  },
  {
    keywords: ["projects", "things built", "what did you build", "portfolio projects", "built", "list projects"],
    response: "Shakir has built several full-stack and backend projects:\n\n1. **AI Learning Assistant (PDF-Based)** (Final Year Project)\n2. **E-Commerce Platform**\n3. **MERN E-Commerce API** (Backend)\n4. **Blog API** (Backend)\n5. **Task Management App**\n6. **Social Media Dashboard**\n7. **Real-Time Chat App**\n\nAsk me about any specific project (e.g., 'Tell me about the Blog API') or scroll to the **Projects** section of the page to filter and review them!"
  },
  {
    keywords: ["experience", "background", "history", "career", "work experience", "where did you work", "about me", "bio", "profile"],
    response: "Shakir is a **MERN Stack Developer** and Computer Science graduate. He has hands-on experience designing full-stack web applications, coding secure RESTful APIs, integrating MongoDB databases, and formatting custom frontend dashboards.\n\nHe has a strong passion for software engineering and is focused on building products that provide clean, pixel-perfect, and high-performance user experiences."
  },
  {
    keywords: ["contact", "email", "address", "phone", "linkedin", "github", "how to reach", "socials", "location", "where do you live", "peshawar", "pakistan"],
    response: "You can find and contact Shakir through the following channels:\n\n• **Email**: shakirullahaup@gmail.com\n• **Location/Address**: Peshawar, Pakistan\n• **GitHub**: [GitHub Profile](https://github.com/ShakirUllah12)\n• **LinkedIn**: [LinkedIn Profile](https://www.linkedin.com/in/shakir-ullah-203ab4271/)\n\nAlternatively, you can write and submit a message directly using the **Contact Form** at the bottom of this portfolio page!"
  },
  {
    keywords: ["hire", "job", "work", "available", "freelance", "opportunity", "position", "seeking", "recruit", "interview"],
    response: "Yes! Shakir is **actively seeking new opportunities**, including full-time developer positions, remote roles, and freelance projects. He is ready to bring his MERN stack skills and engineering background to your team.\n\nPlease reach out to him at **shakirullahaup@gmail.com** or send a message using the Contact Form on this site!"
  },
  {
    keywords: ["help", "what can you do", "ask", "question", "features"],
    response: "As Shakir's Personal Assistant, I can answer questions about:\n\n• His **education** & credentials\n• His **tech stack** & skills\n• Details of his **projects** (e.g. FYP PDF Assistant, E-Commerce, Blog API)\n• His **contact details** & location\n• His **availability** for jobs/hiring\n\nWhat would you like to know?"
  }
];

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hi there! 👋 I'm Shakir's Personal AI Assistant. I can answer questions about Shakir's background, technical skills, projects, and work availability. How can I help you today?",
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
    
    // 1. Guardrail for general coding/programming instructions, math, essays, etc.
    const isCodingReq = /\b(code|function|class|method|write a|program|algorithm|script|compile|loop|syntax|how to|explain how|recursion|tutorial|math|equation|calculate|translate|solve)\b/i.test(query);
    const isAboutShakir = /\b(shakir|you|he|his|him|dev|portfolio|resume|cv|skills|tech|stack|project|fyp|pdf|ecommerce|api|blog|chat|dashboard|task|education|college|university|location|peshawar|pakistan|contact|email|linkedin|github|hire|job|work|avail)\b/i.test(query);
    
    // Check if user is asking generic technical/programming help and NOT asking about Shakir specifically
    if (isCodingReq && !isAboutShakir) {
      return "I'm sorry, but as Shakir's Personal Assistant, I am designed to answer questions *only* about Shakir Ullah, his qualifications, technical skills, projects, and work availability.\n\nI cannot write code, solve general technical problems, or write content unrelated to Shakir. Please ask me about Shakir's stack or Final Year Project!";
    }

    // 2. Tech stack general explanation redirect
    const matchTechExplanation = query.match(/\b(what is|explain|how does)\s+(react|node|mongodb|express|javascript|typescript|tailwind|git|figma|webrtc|socket|stripe)\b/i);
    if (matchTechExplanation && !query.includes("you") && !query.includes("shakir") && !query.includes("project") && !query.includes("use")) {
      const techName = matchTechExplanation[2];
      return `**${techName}** is one of the core technologies in Shakir's stack! He uses it to build modern, interactive interfaces and scalable backend architectures.\n\nWhile I can't write code or give general tutorials, I can explain how Shakir uses it in his projects. For example, he used React and Tailwind CSS in his **AI Learning Assistant (PDF-Based)**. Would you like to hear about that?`;
    }

    // 3. General knowledge questions check (not about Shakir)
    const isQuestionWord = /^(what|how|why|who|where|when|can you|is it)\b/i.test(query);
    if (isQuestionWord && !isAboutShakir) {
      return "I'm sorry, but as Shakir's Personal Assistant, I can only answer questions related directly to Shakir Ullah, his background, qualifications, skills, and portfolio.\n\nFeel free to ask me questions like: 'What is your tech stack?' or 'Tell me about your PDF learning project'!";
    }

    // 4. Find matching topic from knowledge base
    for (const knowledge of BOT_KNOWLEDGE) {
      if (knowledge.keywords.some(keyword => query.includes(keyword))) {
        return knowledge.response;
      }
    }
    
    // 5. Default fallback response (relevant to Shakir)
    return "That's a great question about Shakir! While I don't have that specific detail in my knowledge base, you can contact Shakir directly at **shakirullahaup@gmail.com** or send a message using the Contact Form at the bottom of this page to ask him.";
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
