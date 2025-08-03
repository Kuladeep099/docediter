# 📝 Real-Time Collaborative Document Editor

## Company: CodTech IT Solutions  
**Name:** Malyam Kuladeep Aaradhya  
**Intern ID:** CT06DG3165  
**Domain:** Full Stack Web Development  
**Duration:** 6 Weeks  
**Mentor:** Neela Santhosh Kumar

---

## 📌 Project Description

This project is a **real-time collaborative document editor** built using **Node.js**, **Socket.IO**, and **HTML/CSS/JavaScript**. It allows multiple users to simultaneously view and edit the same document with real-time updates across all connected clients.

The application uses **WebSockets** (via Socket.IO) to maintain a persistent connection between clients and the server, allowing changes made by one user to be instantly broadcasted and synchronized with all others.

---

## 🚀 Features

- Real-time collaborative editing
- Shared document state between users
- WebSocket-based live synchronization
- Clean and minimal text editor interface
- Lightweight and responsive frontend
- Broadcast updates only when document changes

---

## 🛠️ Technologies & Tools Used

### 🔧 Frontend
- HTML
- CSS
- JavaScript

### ⚙️ Backend
- Node.js
- Express.js
- Socket.IO

### 🧰 Development Tools
- Visual Studio Code
- Git & GitHub

---

## 🔄 How It Works

1. When a user opens the editor, a **WebSocket connection** is established with the backend server.
2. The server maintains the current state of the shared document.
3. Any text change made by one user is sent to the server via Socket.IO.
4. The server then broadcasts the update to all other users connected to the document.
5. This ensures that all users always see the same content in real time.

---

## Output

<img width="1352" height="912" alt="Image" src="https://github.com/user-attachments/assets/df95f936-03e2-4fe2-bd38-ee4db4d1d9ac" />

