# Ecommerce Platform - Frontend

This is the frontend client for the Ecommerce Platform, designed with high aesthetic standards and real-time interaction capabilities. It is built using **React (Vite)** and styled exclusively with **TailwindCSS**.

## Architecture & Core Technologies
- **React 18 & Vite:** Fast build tool and component-based UI.
- **TailwindCSS:** Used for all styling, custom animations, and responsive utilities.
- **React Router DOM:** Client-side routing.
- **WebSockets (Native API):** Used for real-time live chat with sellers.

## Key Features & Implementations

### 1. Responsive Design Philosophy
The application frequently splits components based on viewport size to provide highly tailored experiences rather than just scaling UI elements:
- Custom hooks (e.g., `isMobile = window.innerWidth < 1024`) dynamically render completely different component files for Desktop vs. Mobile.
- Example: `MobileConversationsPage.jsx` implements a native-feeling slide-up chat overlay, while `DesktopConversationsPage.jsx` uses a split-pane layout.

### 2. Real-Time Chat (Conversations Page)
- Connects to the Django Channels backend via native `WebSocket`.
- Features **Optimistic UI Updates**: When a user sends a message, it is instantly rendered in the UI with a temporary ID. Once the WebSocket Server echoes the database-confirmed message back, it seamlessly replaces the temporary bubble without duplicating.
- Handles loading states, empty states, and auto-scrolling to the latest message.

### 3. Authentication & API Flow
- Uses `credentials: 'include'` on all `fetch()` calls. 
- The application relies on HttpOnly cookies set by the backend for authentication, preventing the need to store sensitive JWT tokens in `localStorage` or `sessionStorage`.
- Protected routes automatically verify authentication via the `/auth-check/` endpoint.

### 4. Dynamic Pages
- **Product Details:** Fetches dynamic data based on UUID route parameters (`/product/:productId`). Handles adding to cart and instant checkout options.
- **Order Tracking (`/track-order/:orderId`):** Visual timeline dynamically updates based on the order's status (`PENDING`, `SHIPPED`, `DELIVERED`, `CANCELLED`). Shows accurate billing details and line items.
- **Shopping Cart & Checkout Flow:** Real-time calculation of subtotal, shipping, and taxes. 

## Setup & Running Locally

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Development Server:**
   ```bash
   npm run dev
   ```

3. **Build for Production:**
   ```bash
   npm run build
   npm run preview
   ```
