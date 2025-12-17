import { createBrowserRouter } from 'react-router';
import { Root } from './Root';
import { HomePage } from './pages/HomePage';
import { TherapistsPage } from './pages/TherapistsPage';
import { BookAppointmentPage } from './pages/BookAppointmentPage';
import { AdminPage } from './pages/AdminPage';
import { ContactPage } from './pages/ContactPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: 'therapists', Component: TherapistsPage },
      { path: 'book-appointment', Component: BookAppointmentPage },
      { path: 'admin', Component: AdminPage },
      { path: 'contact', Component: ContactPage },
      { path: '*', Component: NotFound }
    ]
  },
  {
    path: '/login',
    Component: LoginPage
  },
  {
    path: '/register',
    Component: RegisterPage
  }
]);
