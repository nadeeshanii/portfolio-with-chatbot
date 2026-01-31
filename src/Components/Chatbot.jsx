// src/components/Chatbot.jsx
import { useState, useEffect, useRef } from "react";
import { FaComments, FaTimes } from "react-icons/fa";

const predefinedAnswers = {
  welcome:
    "Hi 👋 I’m Nadeesha’s assistant. Ask me about projects, skills, university, or contact details.",

  project: `Here are my projects:
1️⃣ PetHome.lk – Full-Stack Pet Adoption Platform
2️⃣ Online Parking System – Landowner Module
3️⃣ Eco Coin – Mobile Reward Application
4️⃣ Travel Sri Lanka – Tourism Website

For more details, check the Projects section!`,

  skills: `Here are my skills:

🖥️ Frontend:
• HTML, CSS, JavaScript
• React.js
• Tailwind CSS

⚙️ Backend:
• Node.js
• Express.js

🗄️ Databases:
• MongoDB
• MySQL
• Firebase

🎨 Design & Tools:
• Figma
• Adobe Illustrator
• Git & GitHub`,

  university: `I am currently studying at:
🎓 University of Moratuwa  
📘 National Diploma in Technology (IT)`,

  contact: `You can contact me at:
📧 Email: shaniwijebandaraw@gmail.com
📞 Phone: 0719141319
🔗 LinkedIn: https://www.linkedin.com/in/nadeeshani-wijebandara/`,
};

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "bot", text: predefinedAnswers.welcome }
  ]);
  const welcomeSentRef = useRef(false);

  // Auto greeting when chat opens
  useEffect(() => {
    if (open && !welcomeSentRef.current) {
      welcomeSentRef.current = true;
    }
  }, [open]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    const text = input.toLowerCase();
    let botMessage = {
      sender: "bot",
      text: "Sorry, I didn’t understand that. You can ask about projects, skills, university, or contact details 😊",
    };

    if (text.includes("project")) {
      botMessage = {
        sender: "bot",
        text: predefinedAnswers.project.replace(/\n/g, "<br/>"),
      };
    } else if (
      text.includes("skill") ||
      text.includes("tools") ||
      text.includes("technology")
    ) {
      botMessage = {
        sender: "bot",
        text: predefinedAnswers.skills.replace(/\n/g, "<br/>"),
      };
    } else if (
      text.includes("university") ||
      text.includes("study") ||
      text.includes("degree") ||
      text.includes("field")
    ) {
      botMessage = {
        sender: "bot",
        text: predefinedAnswers.university.replace(/\n/g, "<br/>"),
      };
    } else if (
      text.includes("contact") ||
      text.includes("email") ||
      text.includes("phone")
    ) {
      botMessage = {
        sender: "bot",
        text: predefinedAnswers.contact.replace(/\n/g, "<br/>"),
      };
    } else if (text.includes("hi") || text.includes("hello")) {
      botMessage = {
        sender: "bot",
        text: "Hello! 👋 How can I help you today?",
      };
    }

    setMessages((prev) => [...prev, botMessage]);
    setInput("");
  };

  return (
    <>
      {/* Floating Chat Icon */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 bg-blue-900 text-white p-4 rounded-full shadow-lg hover:bg-blue-800 transition z-50"
        >
          <FaComments size={22} />
        </button>
      )}

      {/* Chat Box */}
      {open && (
        <div className="fixed bottom-6 right-6 w-80 sm:w-96 bg-white shadow-xl rounded-xl border flex flex-col z-50 animate-slide-up">
          {/* Header */}
          <div className="flex justify-between items-center bg-blue-900 text-white px-4 py-3 rounded-t-xl">
            <span className="font-semibold">Chat with me</span>
            <button
              onClick={() => {
                welcomeSentRef.current = false;
                setOpen(false);
              }}
            >
              <FaTimes />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-sm">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg max-w-[85%] ${
                  msg.sender === "user"
                    ? "bg-blue-100 ml-auto text-right"
                    : "bg-gray-100"
                }`}
                dangerouslySetInnerHTML={{ __html: msg.text }}
              />
            ))}
          </div>

          {/* Input */}
          <div className="flex border-t">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
              className="flex-1 px-3 py-2 text-sm outline-none"
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-blue-900 text-white px-4 text-sm font-medium"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Slide animation */}
      <style>
        {`
          @keyframes slide-up {
            0% { transform: translateY(200%); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          .animate-slide-up {
            animation: slide-up 0.3s ease-out;
          }
        `}
      </style>
    </>
  );
}

export default Chatbot;
