# 🚀 JWT Authentication API

## 📌 Overview
This project is a backend REST API built using Node.js, Express.js, and MongoDB.  
It implements 🔐 JWT Authentication, 👥 Role-Based Authorization, and CRUD operations using 🏗️ MVC Architecture.

---

## ✨ Features
✅ User Registration & Login  
✅ JWT Authentication  
✅ Role-Based Access Control  
✅ CRUD Operations  
✅ Express Routing  
✅ MongoDB Database  
✅ MVC Folder Structure  
✅ Error Handling  

---

## 👤 User Roles
🔹 **Admin** → Can create, edit, and delete any post  
🔹 **User** → Can create and edit their own posts  
🔹 **Seller** → Custom role support  

---

## 🛠️ Tech Stack
- ⚡ Node.js
- 🚂 Express.js
- 🍃 MongoDB
- 🧩 Mongoose
- 🔐 JWT
- 🔒 bcryptjs
- 🌱 dotenv

---

## 📂 Folder Structure

```bash
src/
│── 📁 controllers/
│── 📁 models/
│── 📁 routes/
│── 📁 middleware/
│── 📁 config/
│── 📄 index.js
```

---

## ⚙️ Installation

### 1️⃣ Clone the repository
```bash
git clone <your-repo-link>
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Create a `.env` file
```env
PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
```

### 4️⃣ Start the server
```bash
npm run dev
```

---

## 📡 API Endpoints

### 🔐 Authentication
- `POST /api/auth/register`
- `POST /api/auth/login`

### 📝 Posts
- `GET /api/posts`
- `POST /api/posts`
- `PUT /api/posts/:id`
- `DELETE /api/posts/:id`

---

## 🎯 Learning Outcomes
📚 Understanding MVC Architecture  
🔐 Implementing JWT Authentication  
🛡️ Managing Role-Based Authorization  
🌐 Building REST APIs using Express.js  

---

## 👩‍💻 Author
**Riya Dutta** ✨
