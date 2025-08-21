// Floating WhatsApp/Telegram button
const chatBtn = document.createElement("div");
chatBtn.innerHTML = `<a href="https://wa.me/1234567890" class="chat-btn">💬 Chat Now</a>`;
chatBtn.style.position = "fixed";
chatBtn.style.bottom = "20px";
chatBtn.style.right = "20px";
chatBtn.style.background = "#25D366";
chatBtn.style.color = "#fff";
chatBtn.style.padding = "10px 15px";
chatBtn.style.borderRadius = "50px";
chatBtn.style.textDecoration = "none";
document.body.appendChild(chatBtn);
