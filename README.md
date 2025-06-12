# 🩺 Medical Appointment Booking Application

A **React-based web application** for scheduling and managing doctor appointments. The platform allows users to browse doctor profiles, book and cancel appointments, visualize booking data, and explore helpful resources through a blog. Built with interactivity, responsive design, and data persistence in mind.

---

## 🚀 Live URL

🔗 

---
## ✨ Features

### 🔝 Navbar
- Visible on **all pages**, including error routes
- Includes:
  - Site Logo & Name (as per Figma)
  - 4 Navigation Menus
  - 1 Button on the right

### 🔚 Footer
- Visible on all pages **except error routes**
- Includes:
  - Centered Logo
  - Navigation Menus
  - 3 Social Icons linked to developer's profiles

### 🏠 Homepage
- **Banner Section**
  - Gradient background with border
  - Center-aligned heading & text
  - Two positioned images (as per Figma)
- **Doctors Section**
  - Heading & text
  - 6 doctor cards in 3x2 grid by default
  - Each card includes:
    - Doctor image, Name, Education, Speciality, Experience, Registration Number
    - “View Details” button
  - **Show All Button**: Loads 12 doctor cards on click
- **Success Section**
  - 4 square cards showing:
    - Icon
    - Number (animated with react-countup)
    - Card Title

### 👨‍⚕️ Doctor Details Page
- “Doctor’s Profile Details” card with slogan
- Left-aligned image with:
  - Name, Education, Specialities, Designation, Workplace, Fee
- Availability section (array of available days)
- Appointment card with:
  - “Book Now” button
  - Availability badge

### 📅 Bookings Page
- Displays booked appointments in 1-column layout
- Each card includes:
  - Doctor Name, Fee, Education, Speciality
  - “Cancel Appointment” button
- If no bookings:
  - Show heading & button to return to homepage
- **Data persistence** via `localStorage`
- Canceling removes the appointment

### 📈 Recharts Integration
- Visualizes appointment fees using `Recharts`
- Chart updates in real-time when appointments are canceled
- Hidden if no appointments exist

### 📝 Blogs Page
Answers the following:
1. What is `useState` and how does it work in React?
2. What is the purpose of `useEffect` in React?
3. What is a custom hook in React and when should you use one?
4. Difference between controlled and uncontrolled components? Which is better?
5. Tell us something about `useFormStatus()`

### ❌ Error Page
- Triggered for invalid routes (e.g. `/contacts`, `/doctors/invalid-id`)
- Includes:
  - Navbar
  - No footer
  - Button to return to homepage
  - Error message for invalid dynamic routes

### ⏳ Routing & Loading States
- Loading animation on every route change
- Fallback loader while fetching data
- App doesn’t crash on page reload

---

## 🛠️ Tech Stack

- **Frontend**: React
- **Routing**: React Router DOM (v7)
- **Styling**: Tailwind CSS, DaisyUI
- **Charts**: Recharts
- **Icons**: React Icons
- **State Persistence**: localStorage
- **Notifications**: React Toastify, SweetAlert2
- **Animations**: React CountUp


---

## 📦 Dependencies

```json
{
  "@tailwindcss/vite": "^4.1.4",
  "motion": "^12.17.0",
  "react": "^19.0.0",
  "react-countup": "^6.5.3",
  "react-dom": "^19.0.0",
  "react-icons": "^5.5.0",
  "react-router": "^7.5.2",
  "react-router-dom": "^7.6.2",
  "react-toastify": "^11.0.5",
  "recharts": "^2.15.3",
  "sweetalert2": "^11.22.0",
  "tailwindcss": "^4.1.4"
}
⚙️ Getting Started
1. Clone the Repository
git clone https://github.com/your-username/medical-appointment-app.git
cd medical-appointment-app
2.Install Dependencies
npm install
3.Run the Application
npm run dev
👤 Developer Info
Md Maidul Islam
📍 Beijing, China
🌐 jonoprio.com (Add your link if different)
📧 maidulislammanik8991@gamil.com
💼 LinkedIn: https://www.linkedin.com/in/md-maidul-islam-3744b21ba/
📘 Facebook: https://www.facebook.com/mdmaidulislam.101