const chatBox = document.getElementById("chatBox");

const userInput = document.getElementById("userInput");

let totalMessages = 0;
let userMessages = 0;
let botMessages = 0;

function updateStats() {
    document.getElementById("total").textContent =
        totalMessages;

    document.getElementById("userCount").textContent =
        userMessages;

    document.getElementById("botCount").textContent =
        botMessages;
}

function addMessage(message, type) {

    const div = document.createElement("div");

    div.classList.add(
        type === "user"
            ? "user-message"
            : "bot-message"
    );

    div.textContent = message;

    chatBox.appendChild(div);

    chatBox.scrollTop =
        chatBox.scrollHeight;
}

function botReply(input) {

    input = input.toLowerCase();

    if (
        input.includes("hello") ||
        input.includes("hi") ||
        input.includes("hey")
    ) {
        return "Hello 👋 How can I help you?";
    }

    else if (input.includes("how are you")) {
        return "I am doing great! 😊";
    }

    else if (input.includes("about")) {
        return "I am a Rule-Based AI Chatbot created using HTML, CSS and JavaScript.";
    }

    else if (input.includes("project")) {
        return "This project demonstrates AI decision-making using if-else logic.";
    }

    else if (input.includes("features")) {
        return "My features include greetings, FAQs, project information, command handling and continuous conversation.";
    }

    else if (input.includes("ai")) {
        return "AI stands for Artificial Intelligence. This chatbot uses rule-based logic.";
    }

    else if (input.includes("chatbot")) {
        return "A chatbot is a software application that interacts with users through messages.";
    }

    else if (input.includes("internship")) {
        return "This project is suitable for internship learning and demonstrates basic AI concepts.";
    }

    else if (
        input.includes("what can you do") ||
        input.includes("capabilities")
    ) {
        return "I can answer predefined questions about AI, chatbots, projects, features and internships.";
    }

    else if (input.includes("help")) {
        return "Available commands: hello, about, project, features, AI, chatbot, internship, help and bye.";
    }

    else if (
        input.includes("bye") ||
        input.includes("exit")
    ) {
        return "Goodbye 👋 Have a great day!";
    }

    else if (input.includes("thank")) {
        return "You're welcome 😊";
    }

    else {
        return "Sorry, I don't understand that command.";
    }
}
function sendMessage() {

    const text =
        userInput.value.trim();

    if (text === "") return;

    addMessage(text, "user");

    totalMessages++;
    userMessages++;

    const response =
        botReply(text);

    setTimeout(() => {

        addMessage(response, "bot");

        totalMessages++;
        botMessages++;

        updateStats();

    }, 500);

    updateStats();

    userInput.value = "";
}

userInput.addEventListener(
    "keypress",
    function (event) {

        if (event.key === "Enter") {
            sendMessage();
        }
    }
);

document
.getElementById("clearBtn")
.addEventListener("click", () => {

    chatBox.innerHTML = `
        <div class="bot-message">
        Chat Cleared Successfully ✅
        </div>
    `;

    totalMessages = 0;
    userMessages = 0;
    botMessages = 0;

    updateStats();
});
