# Center AI Vision

Enterprise-grade Bitcoin Mining & AI GPU Platform built with Next.js 14, React, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **UI:** React 18, Tailwind CSS
- **Charts:** Recharts
- **Typography:** Urbanist (Google Fonts)
- **Animations:** Custom ReactBits-style animation components

## Brand Colors

- Midnight Slate (Background): `#1B232D`
- Core Blue (Depth): `#003296`
- Electric Azure (Accent): `#2C93FF`
- Cloud Mist (Text): `#F5F7FA`

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── about/             # About page
│   ├── calculators/       # Investment calculators
│   ├── compute/
│   │   ├── mining/        # Bitcoin mining page
│   │   └── gpu/           # AI GPU compute page
│   ├── hardware/
│   │   ├── miners/        # ASIC miners page
│   │   ├── hashrate/      # Hashrate plans page
│   │   └── gpus/          # GPU hardware investment page
│   └── investors/
│       ├── dashboard/     # Investor dashboard (auth required)
│       └── stock/         # Stock information page
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── animations.tsx # ReactBits-style animations
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── input.tsx
│   │   ├── modal.tsx
│   │   └── tabs.tsx
│   ├── layout/            # Layout components
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   ├── toast.tsx
│   │   └── page-header.tsx
│   ├── auth/              # Authentication modals
│   │   ├── sign-in-modal.tsx
│   │   └── sign-up-modal.tsx
│   ├── sections/          # Page section components
│   │   ├── kpi-strip.tsx
│   │   ├── mining-card.tsx
│   │   ├── gpu-card.tsx
│   │   ├── asic-card.tsx
│   │   ├── hashrate-card.tsx
│   │   ├── feature-card.tsx
│   │   └── stock-chart.tsx
│   └── client-layout.tsx  # Client-side layout wrapper
├── data/                   # Static data files
│   ├── navigation.ts
│   ├── mining-plans.ts
│   ├── gpu-products.ts
│   ├── hashrate-plans.ts
│   └── stock-data.ts
└── lib/                    # Utilities and context
    ├── utils.ts
    └── auth-context.tsx
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Features

### Pages

- **Home** - Hero section, KPI strip, mining plans preview, GPU compute preview
- **Bitcoin Cloud Mining** - Mining plans, how it works, features
- **AI GPU Compute** - GPU configurations, pricing, use cases
- **Buy ASIC Miners** - Hardware catalog with filtering
- **Buy Hashrate** - Hashrate allocation plans
- **Buy AI GPUs** - GPU hardware investment with comparison table
- **Investment Calculators** - ROI calculator (functional), placeholders for others
- **Investor Dashboard** - Auth-gated portfolio view (empty state)
- **Stock Information** - Stock price, chart, company info, events
- **About** - Company mission, values, timeline, infrastructure

### Components

- **Animations** - FadeIn, Reveal, CounterUp, CardLift, HoverGlow, SlideIn
- **Auth** - Sign In/Sign Up modals with localStorage persistence
- **Navigation** - Responsive navbar with dropdowns, footer
- **Cards** - Mining, GPU compute, GPU hardware, ASIC, Hashrate, Feature
- **Charts** - Stock price area chart

### Design System

- No icons or emojis (text-only design)
- Urbanist typography
- Dark theme with gradient backgrounds
- Subtle hover animations
- Consistent spacing and borders

## Authentication

Mock authentication using localStorage:
- Sign up with email, password, and name
- Sign in with email and password
- Session persists across page reloads
- Investor Dashboard requires authentication

## Notes

- This is a frontend-only preview
- All data is static/mocked
- No backend integration
- Charts use Recharts library
