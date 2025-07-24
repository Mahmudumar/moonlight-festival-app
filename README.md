# 🌍 Moonlight Festival App

<img width="440" height="221" alt="image" src="https://github.com/user-attachments/assets/ca947f70-2f37-4bb7-a08c-cb5e931250f8" />
<img width="440" height="223" alt="image" src="https://github.com/user-attachments/assets/bac043a5-895f-4ca2-afe7-cbad2431d0f0" />


A Single Page Application (SPA) built using **React** and **Vite** for showcasing categorized international festivals. This project is part of the Aptech eProject program.

---

## 📁 Project Setup

### 🔧 Requirements

- Node.js (v16 or above recommended)
- npm (comes with Node)
- A modern browser (Chrome, Firefox, Edge, etc)

---

## 🚀 Getting Started

Follow these steps to set up and run the app locally:

### 1. **Clone the Repository**

```bash
git clone https://github.com/Mahmudumar/moonlight-festival-app.git
```

---

### 2. **Navigate into the Project Directory**

```bash
cd moonlight-festival-app
```

---

### 3. **Install Dependencies**

```bash
npm install
```

This installs all the packages listed in `package.json`.

---

### 4. **Start the Development Server**

```bash
npm run dev
```

After a few seconds, you should see a message like:

```
VITE v4.0  ready in 500ms

➜  Local:   http://localhost:5173/
➜  Network: http://192.168.x.x:5173/
```

---

### 5. **Open the App in Your Browser**

Copy the local address (usually `http://localhost:5173/`) and paste it into your browser.

You should now see the Moonlight Festival homepage running live.

---

## 🔎 Project Structure (Key Files)

```
moonlight-festival-app/
├── components/         # Reusable React components
├── pages/              # Main page-level components
├── App.jsx             # App root
├── index.jsx           # Entry point for React DOM
├── index.html          # HTML template
├── constants.js        # Static values and config
├── metadata.json       # Festival metadata
├── package.json        # Project dependencies
├── .gitignore
```

---

## 📝 Notes

- The festival data is sourced from `metadata.json`
- Interactivity is powered by React hooks and context (if used)
- Make sure all images and assets are properly linked in the final submission

---

## 📦 Build for Production

When you're ready to deploy:

```bash
npm run build
```

This will generate a `dist/` folder with optimized files.

---

## 🙋 Support

For any questions, please contact the project team or faculty coordinator. This project was built as part of the Aptech eProject initiative.

