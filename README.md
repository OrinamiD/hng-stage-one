# 🐱 HNG Stage 0 – Profile API with Cat Facts

This is a simple **Node.js + Express + TypeScript** RESTful API built for the **HNG Internship Stage 0 task**.  
The API returns basic profile information along with a random **cat fact** fetched from an external API (`https://catfact.ninja/fact`).

---

## 🚀 Features
- Built with **Express.js** and **TypeScript**
- Fetches dynamic cat facts from an external API
- Includes essential middleware: **Helmet**, **CORS**, and **Rate Limiting**
- Follows best RESTful API practices
- Easy to deploy on platforms like **Railway**, **Pxxl**, or **Render**

---

## 📂 Project Structure

```
hng-stage-one/
│
├── src/
│   ├── controllers/
│   │   └── user.controller.ts     # Handles fetching user + cat fact
│   ├── routes/
│   │   └── user.route.ts          # Defines the /me endpoint
│   ├── index.ts                   # App entry point
│
├── tsconfig.json                  # TypeScript configuration
├── package.json                   # Dependencies and scripts
├── .gitignore
└── README.md
```

---

## 🧠 Endpoint Description

### **GET /user-cat/me**
Returns your profile information and a random cat fact.

#### ✅ Example Response:
```json
{
  "status": "success",
  "user": {
    "name": "Dongo Cornelius",
    "email": "dongoorinami@gmail.com",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-19T10:00:00.000Z",
  "fact": "Cats sleep for 70% of their lives."
}
```

---

## 🛠️ Setup Instructions

Follow these steps to set up and run the project locally.

### **1. Clone the Repository**
```bash
git clone https://github.com/OrinamiD/hng-stage-one.git
cd hng-stage-one
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Create a `.env` File (optional)**
If you want to include environment variables:
```bash

PORT=7656


MONGODB_URL=mongodb+srv://RinaMyBabyForLife:RinaMyBabyForLife@cluster0.7yfvbbn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0



```

### **4. Run the Project in Development Mode**
```bash
npm run dev
```
This runs TypeScript in watch mode and restarts automatically using `nodemon`.

### **5. Build and Run in Production**
```bash
npm run build
npm start
```

---

## 🌐 Deployment Guide

### To Deploy on **Pxxl** or **Railway**
1. Push your project to GitHub  
2. Connect the repository to **Pxxl.dev** or **Railway.app**
3. Set **Start Command** to:
   ```bash
   npm start
   ```
4. Wait for the build and deployment to complete.
5. Test your live API endpoint:
   ```
   https://your-app-domain/user-cat/me
   ```

---

## ⚙️ Scripts Summary

| Command | Description |
|----------|-------------|
| `npm run dev` | Runs the app in development mode (TypeScript + Nodemon) |
| `npm run build` | Compiles TypeScript into JavaScript (`dist/` folder) |
| `npm start` | Builds and runs the app in production |
| `npm test` | Default test placeholder |

---

## 🧩 Dependencies

- **express** – Web server framework  
- **axios** – For external API requests  
- **cors** – Handles cross-origin requests  
- **helmet** – Secures HTTP headers  
- **dotenv** – Loads environment variables  
- **mongoose** – (optional future use for database)  
- **express-rate-limit** – Prevents API abuse  
- **nodemon** & **concurrently** – Development utilities  

---

## 🧑‍💻 Author

**Dongo Cornelius**  
📧 [dongoorinami@gmail.com](mailto:dongoorinami@gmail.com)  
💻 [GitHub Profile](https://github.com/OrinamiD)

---

## 🐾 Acknowledgment

Thanks to **HNG Internship** for providing this challenge.  
Also, thanks to [CatFact Ninja API](https://catfact.ninja/) for the fun cat facts 🐈.
