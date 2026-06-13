# Deviathan Website - Project Structure

This Next.js project is structured to be modular, scalable, and easy to maintain. Below is an explanation of the core directories and files to help you navigate and modify the codebase.

## Directory Layout

### `/public`
Contains static assets that are served directly without processing by Webpack.
- `/public/logos/`: Contains the SVG files for the Deviathan logo in various colors. These are used within `next/image` components.

### `/src`
The main source directory where all application code resides.

#### `/src/app`
Uses the Next.js App Router.
- `layout.tsx`: The root layout of the application. It configures the HTML structure, injects Google Fonts (Kanit and Open Sans), and sets up the global `<body>` classes including dark mode.
- `page.tsx`: The main landing page. It imports and stacks all the different sections (Hero, Services, About, Contact) sequentially.
- `globals.css`: Contains global styles and the Tailwind CSS setup. It defines the core color variables (primary, secondary, background, foreground) based on the Deviathan color palette.

#### `/src/components`
Contains all reusable React components.
- `Navbar.tsx`: The top navigation bar. Handles scrolling effects and the mobile hamburger menu.
- `Footer.tsx`: The page footer containing quick links, social media icons, and a brief description.
- `WhatsAppIcon.tsx`: The floating WhatsApp button fixed to the bottom right corner of the screen.

#### `/src/components/sections`
Contains the large, modular page sections that make up the landing page (`page.tsx`).
- `Hero.tsx`: The first section users see. Contains the main headline, abstract visual code animations, and call-to-action buttons.
- `Services.tsx`: Displays a grid of services offered by Deviathan, using Lucide React icons.
- `About.tsx`: Explains how Deviathan helps businesses, featuring a list of benefits and an abstract visual element.
- `Contact.tsx`: The contact form allowing users to select a service of interest and send a message.

#### `/src/lib`
Contains utility functions and helpers.
- `utils.ts`: Contains the `cn()` utility function (using `clsx` and `tailwind-merge`) to conditionally merge tailwind classes smoothly.

## Technologies Used
- **Next.js 15+ (App Router)**: The core React framework.
- **Tailwind CSS v4**: For fast, utility-first styling. Colors are defined in `globals.css` using the new `@theme` directive.
- **Framer Motion**: Used across sections (like Hero and Services) for scroll animations and interactive hover effects.
- **Lucide React**: Provides the clean, minimalist SVG icons used in the Services and Contact sections.
- **TypeScript**: Ensures type safety across the project.
