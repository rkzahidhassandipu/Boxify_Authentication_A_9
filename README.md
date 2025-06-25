# 📦 Boxify – Subscription Box Service Platform


---

## 🔗 Live Preview

👉 [Click to View Boxify Live](https://subscriptionbox-34c8e.web.app/)




Boxify is a modern and responsive subscription box service platform built with React. It offers a smooth user experience with Firebase authentication, dynamic routing, protected content, and elegant UI components. Perfect for learning modern web development best practices.

---

## ✨ Key Features

- 🔐 **Authentication**: Register/Login with email-password & Google; Forget password functionality.
- 🛡 **Protected Routes**: Auth-based route access; auto-redirects based on login state.
- 🧾 **Profile Page**: View and edit user profile (name and photo).
- 💌 **Contact Page**: Accessible only to authenticated users.
- 🧭 **Navigation**: Dynamic navbar based on user state; profile dropdown with logout.
- 🖼 **Swiper Slider**: Beautiful hero slider on the home page.
- 📦 **Subscription Cards**: Service boxes with “View More” button leading to detail pages.
- 📱 **Responsive Design**: Mobile-friendly and accessible layout.

---

## 🧪 Pages Overview

### 🔐 Register Page
- Inputs: Name, Email, Profile Photo URL, Password.
- Password visibility toggle.
- Google Signup.
- Redirect to login if account exists.

### 🔐 Login Page
- Inputs: Email, Password.
- Forget Password feature.
- Google Login.
- Redirects on successful login.

### 🏠 Home Page
- Swiper Hero Slider.
- Subscription Box Cards.
- "View More" leads to details page (auth protected).

### 🧑‍💼 Profile Page
- Shows user info: name, email, photo, join date.
- Allows name/photo updates.

### ✉️ Contact Page
- Auth protected.
- Redirects to login if not logged in.

---

## 🚀 Technologies & NPM Packages Used

- **React**
- **React DOM**
- **React Router**
- **Firebase**
- **React Toastify**
- **Tailwind CSS**
- **@tailwindcss/vite**
- **Framer Motion**
- **Lucide React**
- **React Icons**
- **React Helmet**
- **Swiper**


## 💻 How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/rkzahidhassandipu/Boxify_Authentication_A_9.git
cd gardening-hub
```

# 2. Frontend Setup

```bash
cd client
npm install
npm run dev
```

4. Environment Variables
Frontend (client/.env)
```bash
VITE_API_URL=http://localhost:5000
VITE_FIREBASE_API_KEY=your_firebase_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
```

## 📣 Author

Created with ❤️ by Raihan Uddin passionate MERN Stack Developer.
