# Impulso Vida - Plataforma de Apoio para PCD

## Overview

Impulso Vida is a comprehensive web platform designed to provide professional and humanized support for people with disabilities (PCD) and low-income populations in Brazil. The platform offers a complete suite of features including user registration, exam scheduling for disability confirmation, subscription-based support plans, a product catalog with special discounts, help request services, and an AI-powered chatbot for answering common questions.

The application serves two primary user types:
- **End Users (PCD)**: Individuals with disabilities who can register, schedule exams, subscribe to support plans, request assistance, and access products with discounts
- **Administrators**: Staff members who manage exam confirmations, assign priority levels to users, oversee subscription plans, and maintain user records

The platform emphasizes accessibility, featuring high contrast modes, ARIA labels, responsive design across all devices, and smooth animations that enhance user experience without compromising usability.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Core Technology Stack**:
- Pure vanilla JavaScript (no frameworks) for maximum performance and minimal dependencies
- Tailwind CSS for responsive utility-first styling
- Custom CSS for animations, themes, and specialized styling
- HTML5 with semantic markup and ARIA labels for accessibility

**State Management**:
- LocalStorage-based persistence for user data, help requests, and theme preferences
- Client-side data management using JavaScript objects and arrays
- No dedicated state management library - state is managed through DOM manipulation and localStorage sync

**Design Patterns**:
- Component-based structure with separate HTML pages for different sections (index.html, about.html, contato.html, chat/ai-ui.html)
- Event-driven architecture using native event listeners
- Dark mode toggle with localStorage persistence (key: "impulsoVidaDarkMode")
- Mobile-first responsive design with breakpoints for tablet and desktop

**Key UI Features**:
- Theme system: Light/Dark mode with smooth transitions (500ms duration)
- Animation library: fade-in, slide-in, scale-in, and pulse animations implemented in CSS
- Loading states: Full-page spinner during initial load
- Form validation: Real-time validation with visual feedback (shake animation on errors)
- CPF and email validation with Brazilian format standards
- Scroll-to-top button with smooth scrolling
- Sticky navigation with mobile hamburger menu

### Backend Architecture

**Server Infrastructure**:
- Python 3.11 HTTP server (SimpleHTTPRequestHandler)
- Static file serving with custom caching headers
- No-cache policy for dynamic content delivery
- Reusable TCP server with address reuse enabled
- Runs on port 5000 by default

**Problem Addressed**: Need for a lightweight, portable development server
**Solution**: Python's built-in HTTP server with custom headers
**Rationale**: Eliminates need for heavy backend frameworks for what is primarily a static site with client-side logic

### Data Architecture

**Storage Solution**: Browser LocalStorage
- Users data stored under key: "impulsoVidaUsers"
- Help requests stored under key: "impulsoVidaHelpRequests"
- Theme preference stored under key: "impulsoVidaDarkMode"

**Data Models**:
- User object includes: registration data, exam status, subscription plan (Bronze/Silver/Gold), priority level (Yellow/Orange/Red)
- Help requests track assistance needs from users
- No backend database - all data persists client-side

**Problem Addressed**: Need for data persistence without server infrastructure
**Solution**: LocalStorage-based persistence
**Pros**: Zero server dependency, instant reads/writes, works offline
**Cons**: Limited to ~5-10MB, data tied to browser, no cross-device sync, vulnerable to clearing browser data

### Authentication & Authorization

**Current Implementation**: Client-side authentication via localStorage
- Login credentials validated against stored user objects
- Session persistence through localStorage
- No token-based authentication or server-side validation

**Security Considerations**: This is a prototype/MVP approach suitable for development but would require server-side authentication, password hashing, and secure session management for production use.

### Accessibility Architecture

**WCAG Compliance Features**:
- Semantic HTML5 elements (nav, header, section, footer)
- ARIA labels and roles throughout the interface
- aria-expanded states for interactive components
- Keyboard navigation support
- High contrast color schemes in both light and dark modes
- Focus indicators on interactive elements
- Smooth scroll behavior for reduced motion

## External Dependencies

### CDN-Delivered Libraries

**Tailwind CSS** (via CDN: cdn.tailwindcss.com)
- Purpose: Utility-first CSS framework for responsive design
- Integration: Loaded via script tag, configured with custom theme extensions
- Usage: Primary styling system for all UI components

**Font Awesome 5.15.3** (via cdnjs.cloudflare.com)
- Purpose: Icon library for UI elements
- Usage: Navigation icons, form indicators, social media icons, action buttons

**Google Fonts - Inter** (fonts.googleapis.com)
- Purpose: Modern, readable typeface for body text
- Weights: 400 (regular), 600 (semi-bold), 700 (bold)
- Usage: Applied as primary font family across entire application

### Static Assets

**Images/Media**:
- Logo stored at: `Imagens/xkf6q3a92ty71.webp`
- External logo image hosted on Google Cloud Storage: `https://storage.googleapis.com/a1aa/image/6284e52c-92f0-487c-42cc-5e2d9efc5a9c.jpg`

### Browser APIs

**LocalStorage API**:
- Purpose: Client-side data persistence
- Usage: Stores user accounts, help requests, theme preferences
- No fallback strategy currently implemented

**Geolocation API** (Likely usage based on platform features):
- Potential usage for location-based services or help requests

### Future Integration Points

The architecture is designed to accommodate future integrations:
- **AI Chatbot Service**: Placeholder for external NLP/AI service integration (files exist: chat/ai-ui.html, js/ai-helper.js)
- **Payment Gateway**: For subscription plan management (Bronze/Silver/Gold tiers)
- **Email Service**: For exam confirmations and notifications
- **Database Migration**: LocalStorage can be migrated to PostgreSQL/MongoDB when scaling

**Note**: The application currently has no server-side database. The modular structure allows for adding database connectivity (potentially Drizzle ORM with PostgreSQL) without major refactoring.