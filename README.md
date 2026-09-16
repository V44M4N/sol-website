# Sol The Brew House - Production Website

A premium, cinematic digital experience for Sol The Brew House, Shimla. This website is designed to communicate the transition from a serene lounge by day to a high-energy club by night.

## 🚀 Tech Stack

- **Frontend**: Next.js 15 (App Router), TypeScript, Tailwind CSS
- **Animations**: Framer Motion
- **Database**: MySQL via Prisma ORM
- **Icons**: Lucide React
- **Deployment**: Optimized for Vercel

## 🎨 Design System

### Color Palette
- **Charcoal Black** (`#0a0a0a`): Primary background, creating a sophisticated, dark-mode aesthetic.
- **Warm Cream** (`#fdfbf7`): Primary foreground/text, providing a softer, more premium feel than pure white.
- **Amber/Bronze** (`#c5a059`): Brand accent color used for CTAs, highlights, and primary branding.
- **Himalayan Slate** (`#4a5568`): Secondary accent for muted elements and borders.

### Typography
- **Headings**: Playfair Display (Elegant Serif)
- **Body**: Montserrat (Clean Modern Sans-Serif)

## 🛠️ Key Features

### Public Experience
- **Cinematic Homepage**: Storytelling flow with scroll-based animations and a Day $\rightarrow$ Night visual transition.
- **Dynamic Menu**: High-end editorial presentation of Food and Craft Brews.
- **Immersive Gallery**: Masonry layout showcasing the venue's atmosphere.
- **Step-by-Step Reservations**: A friction-less booking flow with real-time confirmation.

### Admin CMS
- **Content Manager**: Drag-and-drop reordering of homepage sections.
- **Media Library**: Centralized asset management for all images and videos.
- **Catalog Management**: Full CRUD for Menu items and House Brews.
- **Booking Engine**: Management interface for pending and confirmed reservations.
- **Site Settings**: Centralized control for business hours, contact info, and SEO.

## 📦 Installation & Setup

1. **Clone the repository**
   \`\`\`bash
   git clone <repo-url>
   cd sol-website
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Environment Configuration**
   Copy `.env.example` to `.env` and update your credentials:
   \`\`\`env
   DATABASE_URL="mysql://user:password@localhost:3306/sol_db"
   NEXTAUTH_SECRET="your-secret"
   NEXTAUTH_URL="http://localhost:3000"
   \`\`\`

4. **Database Setup**
   \`\`\`bash
   npx prisma migrate dev --name init
   \`\`\`

5. **Run the Development Server**
   \`\`\`bash
   npm run dev
   \`\`\`

## 📁 Project Structure
- \`/app\`: Next.js App Router (Public & Admin routes).
- \`/components\`: Atomic UI components, Layouts, and Feature blocks.
- \`/lib\`: Shared utilities and Prisma client.
- \`/prisma\`: Database schema and migrations.
- \`/public\`: Static assets and robots.txt.
- \`/styles\`: Global CSS and design tokens.
