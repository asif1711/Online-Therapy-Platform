# Theramint - UI Documentation

Welcome to the Theramint UI documentation. This document provides comprehensive information about the design system, components, and structure of the Theramint therapy platform.

## Table of Contents

1. [Overview](#overview)
2. [Design System](#design-system)
3. [Pages](#pages)
4. [Components](#components)
5. [Routing](#routing)
6. [Data Structure](#data-structure)

---

## Overview

Theramint is a modern, professional online therapy platform built with:
- **React 18** - For component-based UI
- **TypeScript** - For type safety
- **React Router 7** - For navigation
- **Tailwind CSS** - For styling
- **Radix UI** - For accessible components
- **Lucide React** - For icons

### Design Philosophy

The platform embodies a **calm, professional, and trustworthy** aesthetic with:
- Gentle green color palette promoting serenity
- Ample white space for clarity
- Modern, clean typography
- Accessible, user-friendly interactions

---

## Design System

### Color Palette

The Theramint color palette uses gentle, calming greens:

#### Primary Colors
- **Primary**: `#7a9d8e` (Soft Sage Green)
  - Use for: Primary buttons, links, accents
- **Primary Foreground**: `#ffffff` (White)
  - Use for: Text on primary color backgrounds

#### Secondary Colors
- **Secondary**: `#c8dad3` (Light Mint)
  - Use for: Secondary buttons, subtle highlights
- **Accent**: `#9fc5b5` (Gentle Teal)
  - Use for: Interactive elements, hover states

#### Neutral Colors
- **Background**: `#f8faf9` (Very Light Green-White)
- **Foreground**: `#1a3a2e` (Dark Forest Green)
- **Muted**: `#e8f0ed` (Light Green-Gray)
- **Muted Foreground**: `#5a6f64` (Medium Gray-Green)

#### Utility Colors
- **Card**: `#ffffff` (White)
- **Border**: `rgba(122, 157, 142, 0.2)` (Semi-transparent green)
- **Destructive**: `#d4183d` (Red for errors/delete)

### Typography

The platform uses a system font stack for optimal performance:

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
```

#### Type Scale
- **H1**: 2xl - 3xl (32-48px) - Page titles
- **H2**: xl - 2xl (24-32px) - Section headers
- **H3**: lg - xl (18-24px) - Subsection headers
- **H4**: base (16px) - Card titles, labels
- **Body**: base (16px) - Regular text
- **Small**: sm (14px) - Supporting text, captions

### Spacing

The design uses consistent spacing based on 8px grid:
- **xs**: 0.5rem (8px)
- **sm**: 1rem (16px)
- **md**: 1.5rem (24px)
- **lg**: 2rem (32px)
- **xl**: 3rem (48px)
- **2xl**: 4rem (64px)

### Border Radius

Consistent rounding for a modern, friendly feel:
- **sm**: 0.5rem (8px)
- **md**: 0.625rem (10px)
- **lg**: 0.75rem (12px)
- **xl**: 0.875rem (14px)

---

## Pages

### 1. Home Page (`/`)

**Purpose**: Landing page introducing the platform and its benefits

**Sections**:
- **Hero**: Main headline, value proposition, CTA buttons
- **Features**: 6 key benefits (confidentiality, professionals, scheduling, etc.)
- **Specialties**: Grid of therapy specialties offered
- **CTA**: Call-to-action for booking

**Key Components Used**:
- Button, Card, Badge
- Navigation, Footer

### 2. Therapists Page (`/therapists`)

**Purpose**: Browse all available therapists

**Features**:
- Therapist cards with photos, ratings, specialties
- Experience and bio preview
- Direct booking buttons
- Responsive grid layout

**Key Components Used**:
- Card, Badge, Button, Star ratings
- Therapist data from `/src/app/data/therapists.ts`

### 3. Book Appointment Page (`/book-appointment`)

**Purpose**: Submit appointment booking requests

**Form Fields**:
- Personal Information (name, email, phone)
- Therapist selection (dropdown)
- Appointment type (video/in-person/phone)
- Preferred date and time
- Reason for visit (optional)

**Features**:
- Form validation
- Success confirmation
- Auto-reset after submission

**Key Components Used**:
- Card, Input, Label, Select, Textarea, Button
- Calendar icon

### 4. Admin Page (`/admin`)

**Purpose**: Manage therapist database (admin access only)

**Features**:
- View all therapists
- Add new therapists
- Edit existing therapists
- Delete therapists
- Tabbed interface (Manage/Add)

**Security Note**: 
- Displays warning banner for admin-only access
- In production, would require authentication

**Key Components Used**:
- Tabs, Card, Input, Textarea, Button, Badge

### 5. Contact Page (`/contact`)

**Purpose**: General inquiries and support

**Sections**:
- Contact form
- Contact information (phone, email, address, hours)
- Crisis resources
- FAQ section

**Form Fields**:
- Name, email, phone, subject, message

**Key Components Used**:
- Card, Input, Textarea, Button
- Contact info icons

### 6. Login Page (`/login`)

**Purpose**: User authentication

**Features**:
- Email/password login
- Remember me checkbox
- Forgot password link
- Social login options (Google, GitHub)
- Link to register page

**Key Components Used**:
- Card, Input, Checkbox, Button
- Brand logo and branding

### 7. Register Page (`/register`)

**Purpose**: New user account creation

**Form Fields**:
- First name, last name
- Email, phone
- Password, confirm password
- Terms agreement

**Features**:
- Password confirmation validation
- Terms and conditions checkbox
- Social registration options
- Link to login page

**Key Components Used**:
- Card, Input, Checkbox, Button
- Form validation

### 8. 404 Not Found Page (`/*`)

**Purpose**: Handle unknown routes gracefully

**Features**:
- Large 404 display
- Helpful message
- Navigation options (Home, Go Back)

**Key Components Used**:
- Button, icons

---

## Components

### Layout Components

#### Navigation
**File**: `/src/app/components/Navigation.tsx`

**Features**:
- Sticky header
- Desktop menu (horizontal)
- Mobile menu (hamburger)
- Logo with brand
- Auth buttons (Login/Sign Up)

**Responsive Behavior**:
- Desktop: Full horizontal menu
- Mobile: Collapsed hamburger menu

#### Footer
**File**: `/src/app/components/Footer.tsx`

**Sections**:
- Brand information
- Quick links
- Services list
- Contact information
- Legal links (privacy, terms, cookies)

#### Root Layout
**File**: `/src/app/Root.tsx`

**Structure**:
- Navigation (sticky)
- Main content area (flex-1)
- Footer

### UI Components

All UI components are located in `/src/app/components/ui/` and are based on Radix UI primitives:

- **Button**: Primary, secondary, outline, ghost, destructive variants
- **Card**: Container with header, content, description
- **Input**: Text, email, tel, password, date inputs
- **Textarea**: Multi-line text input
- **Label**: Form field labels
- **Select**: Dropdown selection
- **Checkbox**: Boolean selection
- **Badge**: Small labels for tags/categories
- **Tabs**: Tabbed interface
- **Separator**: Visual dividers

All components use the Theramint color system and are fully accessible.

---

## Routing

### Route Structure

The app uses React Router 7 with data routing pattern.

**Main Routes** (with Navigation/Footer):
- `/` - Home
- `/therapists` - Therapists listing
- `/book-appointment` - Appointment booking
- `/admin` - Admin dashboard
- `/contact` - Contact form
- `*` - 404 Not Found

**Auth Routes** (standalone, no Navigation/Footer):
- `/login` - User login
- `/register` - User registration

### Route Configuration

Routes are defined in `/src/app/routes.ts` using `createBrowserRouter`.

---

## Data Structure

### Therapist Interface

```typescript
interface Therapist {
  id: string;
  name: string;
  title: string;
  specialties: string[];
  bio: string;
  experience: string;
  availability: string[];
  imageUrl: string;
  rating: number;
  reviewCount: number;
}
```

### Mock Data

Sample therapists are stored in `/src/app/data/therapists.ts`:
- 6 pre-populated therapists
- Diverse specialties
- Varied experience levels
- Professional images (from Unsplash)

**Note**: In production, this data would come from a database via API.

---

## Responsive Design

### Breakpoints

Following Tailwind CSS defaults:
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px

### Mobile-First Approach

All layouts are designed mobile-first, then enhanced for larger screens:
- Single column on mobile
- 2 columns on tablets (md)
- 3+ columns on desktop (lg)

### Touch Targets

All interactive elements have minimum 44x44px touch targets for accessibility.

---

## Accessibility

### ARIA Labels

All interactive elements have appropriate ARIA labels and roles.

### Keyboard Navigation

All forms and interactive elements are fully keyboard accessible:
- Tab navigation
- Enter/Space activation
- Escape to close modals/menus

### Color Contrast

All text meets WCAG AA standards:
- Regular text: 4.5:1 minimum
- Large text: 3:1 minimum

### Focus States

Visible focus indicators on all interactive elements using the `--ring` color.

---

## Best Practices

### State Management

Currently uses React useState for local component state. For production:
- Consider React Context for global state
- Use React Query for server state
- Implement proper form libraries (React Hook Form)

### Data Fetching

Mock data is used. For production:
- Implement API layer
- Use React Query or SWR for data fetching
- Add loading and error states
- Implement proper caching strategies

### Authentication

Login/Register pages are UI-only. For production:
- Implement JWT or session-based auth
- Add protected routes
- Implement role-based access control
- Use secure password handling

### Performance

Current optimizations:
- Code splitting via React Router
- Lazy loading of routes
- Optimized images from Unsplash

Future optimizations:
- Image optimization (WebP, responsive images)
- Bundle size analysis
- React.memo for expensive components
- Virtual scrolling for long lists

---

## File Structure

```
src/
├── app/
│   ├── components/
│   │   ├── ui/           # Radix UI components
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── therapists.ts # Mock data
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── TherapistsPage.tsx
│   │   ├── BookAppointmentPage.tsx
│   │   ├── AdminPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── RegisterPage.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx          # Main app component
│   ├── Root.tsx         # Layout wrapper
│   └── routes.ts        # Route definitions
├── styles/
│   ├── theme.css        # Color system & typography
│   ├── tailwind.css
│   └── index.css
└── index.tsx            # Entry point
```

---

## Future Enhancements

### Suggested Features

1. **User Dashboard**
   - View upcoming appointments
   - Access session history
   - Manage profile

2. **Therapist Profiles**
   - Dedicated pages for each therapist
   - Detailed bios and credentials
   - Video introductions
   - Available time slots calendar

3. **Real-time Scheduling**
   - Live availability calendar
   - Instant booking confirmation
   - Automated reminders

4. **Video Integration**
   - Built-in video calling for remote sessions
   - Screen sharing capabilities
   - Session recording (with consent)

5. **Payment Processing**
   - Stripe integration
   - Insurance verification
   - Invoice management

6. **Messaging System**
   - Secure messaging between users and therapists
   - File sharing
   - Notification system

7. **Reviews & Ratings**
   - User reviews for therapists
   - Star ratings
   - Verified sessions only

8. **Search & Filters**
   - Filter therapists by specialty, availability, insurance
   - Search by name or condition
   - Sort by rating, price, distance

---

## Support

For questions or issues with the UI:
- Review this documentation
- Check component source code
- Refer to Radix UI documentation for component APIs
- Consult Tailwind CSS docs for styling questions

---

**Last Updated**: December 2024
**Version**: 1.0.0
