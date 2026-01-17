# Hash Web Landing Page

A high-fidelity, monochrome landing page for Hash Web - a secure, encrypted, and self-destructing file sharing platform.

## Design System

- **Style**: Brutalist, High-Contrast Terminal, Minimalist CLI
- **Colors**: Strictly Monochrome (Black & White)
  - Background: Pure Black (#000000)
  - Primary Text: Pure White (#FFFFFF)
  - Secondary Text: Light Gray (#A3A3A3)
  - Borders: 1px White borders
- **Typography**: JetBrains Mono (monospace)
- **Interactive States**: Hover effects invert colors or add underlines

## Tech Stack

- **Framework**: Next.js 14 (React)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript

## Features

- Responsive design (mobile, tablet, desktop)
- Dotted grid background pattern
- Hover invert effects on feature cards
- Terminal-style security audit section
- Mock code editor window
- CTA with drag-and-drop upload zone

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles and Tailwind imports
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main landing page component
├── tailwind.config.js    # Tailwind configuration
├── next.config.js        # Next.js configuration
└── package.json          # Dependencies
```

## Customization

All colors and styling are managed through Tailwind CSS. The monochrome theme is enforced through:
- Custom color palette in `tailwind.config.js`
- Utility classes in `globals.css`
- Hover effects using `hover-invert` class

## License

Open Source
