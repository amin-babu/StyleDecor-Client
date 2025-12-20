# StyleDecor 🎨
**A Modern Appointment & Decoration Management System**

---

## 📝 Project Purpose
StyleDecor is designed to streamline the operations of local decoration companies. It bridges the gap between traditional walk-in businesses and modern digital needs by providing an automated booking system for in-studio consultations and on-site event decorations. The platform solves common issues like long waiting times, manual scheduling errors, and lack of real-time project tracking for customers.

---

## 🔗 Live URL
[View Live Project](https://b12-a11-styledecor.netlify.app/)

---

## ✨ Key Features

* **Smart Appointment Scheduling:** Users can browse decoration packages and book specific date/time slots easily.
* **Dual Service Modes:** Support for both in-studio consultations and on-site venue decoration services.
* **Real-time Service Workflow:** Track project status through stages: *Assigned ➔ Planning ➔ Materials Prepared ➔ On the Way ➔ Setup ➔ Completed*.
* **Interactive Location Mapping:** Integration of maps to pinpoint venue locations for on-site services.
* **Secure User Authentication:** Robust login and registration system powered by Firebase.
* **Data Synchronization:** Efficient server state management and data fetching for seamless updates.
* **Responsive & Animated UI:** A modern, mobile-friendly interface with smooth transitions and interactive elements.

---

## 🛠 NPM Packages Used

The project leverages the following dependencies to ensure performance and scalability:

| Category | Packages |
| :--- | :--- |
| **Core Framework** | `react` (v19), `react-dom`, `react-router` |
| **Styling & UI** | `tailwindcss`, `@tailwindcss/vite`, `framer-motion`, `react-icons` |
| **Data Fetching** | `@tanstack/react-query`, `axios` |
| **Backend & Auth** | `firebase` |
| **Forms & Logic** | `react-hook-form` |
| **Maps & Location** | `leaflet`, `react-leaflet` |
| **Notifications** | `sweetalert2`, `react-hot-toast` |

---

## ⚙️ Installation & Setup

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/amin-babu/StyleDecor-Client.git](https://github.com/amin-babu/StyleDecor-Client.git)
    ```

2.  **Navigate and Install Dependencies:**
    ```bash
    cd styledecor
    npm install
    ```

3.  **Setup Environment Variables:**
    Create a `.env` file and add your Firebase and API configurations.

4.  **Launch Development Server:**
    ```bash
    npm run dev
    ```
