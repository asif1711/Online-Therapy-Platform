📌 Online Therapy Platform – Minor Project (MCA)

A full-stack web application that allows users to book therapy appointments online, therapists to manage sessions, and an admin to oversee the system.
This project demonstrates real-world implementation of React (frontend), Node.js/Express (backend), and MySQL (database).

🚀 Project Overview

The Online Therapy Platform is designed to make mental health support accessible, structured, and easy to book.
Users can browse therapists, book appointments, and manage sessions.
Therapists can view assigned appointments, while the admin controls system data such as users, therapists, and appointments.

This project is built as an MCA Minor Project, with a roadmap to expand into a Major Project next semester.

🧩 Features Implemented (Minor Project Scope)
👤 User Features

Register & Login (JWT Authentication)

Browse therapists

Book therapy appointments

View booked sessions

Profile & session management

🧑‍⚕️ Therapist Features

Therapist accounts (admin-approved or seeded)

View assigned appointments

Manage availability (future expansion)

🛠 Admin Features

Admin login

Manage users

Manage therapists

View all appointments

🔐 System Features

Secure authentication using JWT

REST API backend

MySQL structured database

Responsive UI with React

🏗 Technology Stack
Frontend

React + TypeScript

React Router

Axios

TailwindCSS / CSS

Backend

Node.js

Express.js

JWT Authentication

Bcrypt for password hashing

Database

MySQL

Relational schema with foreign keys

📁 Project Structure
/backend
   /controllers
   /routes
   /models
   /middleware
   server.js

/frontend
   /src
      /components
      /pages
      /services
      /context
      App.tsx

/database
   schema.sql

/docs
   DFD Level 0.png
   DFD Level 1.png
   ER Diagram.png
   Wireframes/

🗂 Database Schema (Summary)
Tables:

users (User login data + role)

therapists (Professional details)

appointments (User–therapist session bookings)

📊 Diagrams Included

✔ Level 0 Data Flow Diagram

✔ Level 1 Data Flow Diagram

✔ ER Diagram

✔ Use Case Diagram

✔ Activity Diagram

✔ Sequence Diagram

All diagrams are available inside the docs/ folder.

🛣 Roadmap (Minor → Major Project)
Minor Project (Completed)

Authentication

Basic UI

Therapist listing

Appointment booking

Admin dashboard

Major Project (Next Semester Expansion)

Video consultation (WebRTC/Jitsi/Zoom API)

Real-time chat

AI-based mood/sentiment analysis

Reminder notifications (SMS/Email)

Payment gateway integration (Razorpay)

Therapist onboarding workflow

Advanced analytics dashboard

👥 Team Members

Nurul Islam

Debosmita Mukherjee

Dona Das

Aryan Kashyap

Joyatri Nath

Soumyadip Ghosh

📬 How to Run the Project
Backend
cd backend
npm install
npm start

Frontend
cd frontend
npm install
npm run dev

Database

Import schema.sql into MySQL.

📄 License

This project is created solely for MCA academic purposes and is not intended for commercial use.