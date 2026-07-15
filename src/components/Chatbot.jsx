import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

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
    keywords: ["education", "qualification", "degree", "university", "graduate", "college", "study", "studies", "bsc", "bscs", "academic", "academics", "where did you study"],
    response: "Shakir is a **Computer Science graduate** from Peshawar, Pakistan. He holds a Bachelor of Science in Computer Science (BSCS), which gave him a solid foundation in software engineering principles, databases, data structures, algorithms, and web technologies."
  },
  {
    keywords: ["skills", "tech", "languages", "stack", "react", "node", "mongodb", "express", "javascript", "typescript", "tailwind", "html", "css", "what do you do", "expertise", "technologies"],
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
    keywords: ["projects", "things built", "what did you build", "portfolio projects", "built", "list projects", "project list", "show projects"],
    response: "Shakir has built several full-stack and backend projects:\n\n1. **AI Learning Assistant (PDF-Based)** (Final Year Project)\n2. **E-Commerce Platform**\n3. **MERN E-Commerce API** (Backend)\n4. **Blog API** (Backend)\n5. **Task Management App**\n6. **Social Media Dashboard**\n7. **Real-Time Chat App**\n\nAsk me about any specific project (e.g., 'Tell me about the Blog API') or scroll to the **Projects** section of the page to filter and review them!"
  },
  {
    keywords: ["experience", "background", "history", "career", "work experience", "where did you work", "about me", "bio", "profile", "tell me about yourself", "tell me about shakir", "about shakir", "who is shakir", "yourself", "about you", "who are you", "introduce yourself"],
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

const SYSTEM_PROMPT = `You are a helpful, friendly, and professional AI Assistant representing Shakir Ullah.
Your purpose is to answer questions about Shakir Ullah, his background, qualifications, skills, projects, and career availability.
You are also fully capable of answering general programming, code development, or technical questions to showcase his expertise.

Shakir Ullah's Profile:
- Name: Shakir Ullah
- Role: Web and Mobile App Developer | MERN Stack Developer
- Location: Peshawar, Pakistan
- Education: Bachelor of Science in Computer Science (BSCS) graduate. Solid foundation in software engineering, databases, algorithms, data structures, and web development.
- Core Technical Skills:
  * Frontend: React, JavaScript (ES6+), TypeScript, Tailwind CSS, HTML5/CSS3
  * Backend: Node.js, Express.js, RESTful APIs
  * Database: MongoDB, Mongoose
  * Tools & Version Control: Git & GitHub, VS Code, Linux, Figma
- Career Availability: Actively seeking new opportunities (full-time developer positions, remote roles, freelance projects).
- Contact details:
  * Email: shakirullahaup@gmail.com
  * GitHub: https://github.com/ShakirUllah12
  * LinkedIn: https://www.linkedin.com/in/shakir-ullah-203ab4271

Shakir Ullah's Projects:
1. AI Learning Assistant (PDF-Based) (Final Year Project)
   - Description: Upload PDF documents and interact with an AI to learn from the content, generate summaries, and ask questions.
   - Tech Stack: React, Node.js, Express, MongoDB, Tailwind CSS, OpenAI API
   - Live Demo: https://ai-learning-frontend-navy.vercel.app/login
   - GitHub: https://github.com/ShakirUllah12
2. E-Commerce Platform
   - Description: Full-stack MERN e-commerce app with Stripe payments, JWT auth, and admin dashboard.
   - Tech Stack: React, Node.js, MongoDB, Express, Stripe payments
   - GitHub: https://github.com/ShakirUllah12
3. MERN E-Commerce API
   - Description: A robust backend RESTful API containing secure JWT user authentication, product management, and order checkout flows.
   - Tech Stack: Node.js, Express.js, MongoDB, JWT
   - GitHub: https://github.com/ShakirUllah12/mern-ecommerce
4. Blog API
   - Description: RESTful API built with Express supporting complete CRUD operations, category filters, and user registration for dynamic blogs.
   - Tech Stack: Node.js, Express.js, MongoDB, Mongoose
   - GitHub: https://github.com/ShakirUllah12/blog-api
5. Task Management App
   - Description: Collaborative project management tool with drag-and-drop and real-time updates.
   - Tech Stack: React, Express, MongoDB, Socket.io
   - GitHub: https://github.com/ShakirUllah12
6. Social Media Dashboard
   - Description: Analytics dashboard with data visualization and multi-platform integration.
   - Tech Stack: React, Node.js, MongoDB, Chart.js
   - GitHub: https://github.com/ShakirUllah12
7. Real-Time Chat App
   - Description: Messaging app with file sharing, group chats, and WebRTC-based video calling.
   - Tech Stack: React, Express, MongoDB, WebRTC
   - GitHub: https://github.com/ShakirUllah12

Guidelines:
1. If a user asks about Shakir, represent him accurately using the profile info above.
2. If a user asks a programming-related question (e.g., how to code something, programming conceptual explanations), answer it clearly, accurately, and politely to show technical proficiency.
3. Be friendly, clean, and professional. Format lists or code blocks nicely using markdown.
4. Keep replies relatively concise so they fit well in a chat widget.
`;

const getOfflineResponse = (userText) => {
  const query = userText.toLowerCase().trim();
  
  // 1. Try to find a matching topic from our knowledge base first
  for (const knowledge of BOT_KNOWLEDGE) {
    if (knowledge.keywords.some(keyword => query.includes(keyword))) {
      return knowledge.response;
    }
  }
  
  // 2. If no direct topic matches, check if the question is related to Shakir at all
  const isAboutShakir = /\b(shakir|shakirullah|you|your|he|his|him|dev|developer|portfolio|resume|cv|skills|tech|stack|project|projects|fyp|pdf|ecommerce|api|blog|chat|dashboard|task|education|college|university|location|peshawar|pakistan|contact|email|linkedin|github|hire|job|work|avail|available|background|experience|bio|about|profile|history|career|study|studies|degree|qualification|qualifications)\b/i.test(query);

  if (isAboutShakir) {
    // Fallback for queries about Shakir that we don't have direct info for
    return "That's a great question about Shakir! While I don't have that specific detail in my offline knowledge base, you can contact Shakir directly at **shakirullahaup@gmail.com** or send a message using the Contact Form at the bottom of this page to ask him.";
  } else {
    // Politely decline general programming or general knowledge queries when offline
    return "I'm currently running in offline fallback mode and can only answer basic questions about Shakir Ullah, his qualifications, technical skills, projects, and work availability.\n\nFor programming questions or dynamic assistance, please ensure the API key environment variables (VITE_GEMINI_API_KEY or VITE_OPENAI_API_KEY) are configured.";
  }
};

const callLLM = async (userText, chatHistory) => {
  const geminiApiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const openaiApiKey = import.meta.env.VITE_OPENAI_API_KEY;

  if (geminiApiKey) {
    try {
      const contents = [
        ...chatHistory.map(msg => ({
          role: msg.sender === "user" ? "user" : "model",
          parts: [{ text: msg.text }]
        })),
        {
          role: "user",
          parts: [{ text: userText }]
        }
      ];

      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`,
        {
          contents,
          systemInstruction: {
            parts: [{ text: SYSTEM_PROMPT }]
          }
        }
      );

      if (response.data?.candidates?.[0]?.content?.parts?.[0]?.text) {
        return response.data.candidates[0].content.parts[0].text;
      }
    } catch (error) {
      console.error("Gemini API call failed, trying fallback:", error);
    }
  }

  if (openaiApiKey) {
    try {
      const messages = [
        { role: "system", content: SYSTEM_PROMPT },
        ...chatHistory.map(msg => ({
          role: msg.sender === "user" ? "user" : "assistant",
          content: msg.text
        })),
        { role: "user", content: userText }
      ];

      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4o-mini",
          messages
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${openaiApiKey}`
          }
        }
      );

      if (response.data?.choices?.[0]?.message?.content) {
        return response.data.choices[0].message.content;
      }
    } catch (error) {
      console.error("OpenAI API call failed, trying fallback:", error);
    }
  }

  // Fallback to offline rule-based responder if no keys or API failure
  return getOfflineResponse(userText);
};

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
    if (typeof text !== "string") return text;

    const lines = text.split("\n");
    return lines.map((line, lineIdx) => {
      if (line.trim().startsWith("```")) {
        return <hr key={lineIdx} style={{ borderColor: "var(--bg-card-border)", margin: "8px 0" }} />;
      }

      if (line.trim() === "") {
        return <div key={lineIdx} style={{ height: 8 }} />;
      }

      const isListItem = line.trim().startsWith("•") || line.trim().startsWith("-") || line.trim().startsWith("*");
      let content = isListItem ? line.trim().substring(1).trim() : line;

      const parts = [];
      const regex = /(\*\*.*?\*\*|\[.*?\]\(.*?\))/g;
      const tokens = content.split(regex);

      tokens.forEach((token, idx) => {
        if (token.startsWith("**") && token.endsWith("**")) {
          parts.push(<strong key={idx} style={{ color: "var(--text-primary)" }}>{token.slice(2, -2)}</strong>);
        } else if (token.startsWith("[") && token.includes("](")) {
          const linkMatch = token.match(/\[(.*?)\]\((.*?)\)/);
          if (linkMatch) {
            parts.push(
              <a
                key={idx}
                href={linkMatch[2]}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--accent)",
                  textDecoration: "underline",
                  fontWeight: "600",
                  wordBreak: "break-all"
                }}
              >
                {linkMatch[1]}
              </a>
            );
          } else {
            parts.push(token);
          }
        } else {
          parts.push(token);
        }
      });

      return (
        <div key={lineIdx} style={{ display: "flex", gap: 6, marginBottom: 2, alignItems: "flex-start" }}>
          {isListItem && <span style={{ color: "var(--primary)", userSelect: "none" }}>•</span>}
          <span>{parts}</span>
        </div>
      );
    });
  };

  const handleSendMessage = async (textToSend) => {
    if (!textToSend.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: "user",
      text: textToSend,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setIsTyping(true);

    try {
      const apiHistory = messages
        .filter(msg => msg.id !== 1) // omit welcome message from conversational history
        .map(msg => ({
          sender: msg.sender,
          text: msg.text
        }));

      const responseText = await callLLM(textToSend, apiHistory);
      
      const botMsg = {
        id: Date.now() + 1,
        sender: "bot",
        text: responseText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error("Chat message processing error:", error);
      const botMsg = {
        id: Date.now() + 1,
        sender: "bot",
        text: "I'm sorry, I encountered an error while processing your response. Please try again or contact Shakir directly.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMsg]);
    } finally {
      setIsTyping(false);
    }
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
