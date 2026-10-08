# TechNova Responsive Website

[![Task 4 - Responsive Web Design](https://img.shields.io/badge/Task%204-Mobile--Friendly%20Website-blue.svg)](#)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](#)
[![CSS3 Media Queries](https://img.shields.io/badge/CSS3-Media%20Queries-1572B6?style=flat&logo=css3&logoColor=white)](#)
[![Vanilla JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](#)

---

## Project Overview

**TechNova — Digital Solutions** is a modern, professional agency landing page designed from scratch and engineered to be fully responsive across mobile, tablet, laptop, and desktop displays using **CSS3 Media Queries**, **CSS Grid**, and **Flexbox**.

This repository demonstrates how to take a multi-column desktop layout and adapt it into a seamless mobile-friendly user interface without horizontal scrolling, broken components, or unreadable typography.

---

## Objective

This project was built to satisfy the requirements for **Task 4: Make a Website Mobile-Friendly Using CSS Media Queries** of the Web Development Internship.

The main objective is to demonstrate proficiency in:
- Writing custom CSS media queries (`@media`).
- Responsive Web Design (RWD) principles and viewport configuration.
- Flexible layouts using CSS Flexbox and CSS Grid.
- Using responsive units (`rem`, `em`, `%`, `vw`, `vh`, `clamp()`).
- Crafting a responsive mobile navigation drawer (hamburger menu).
- Scaling responsive typography and images fluidly.
- Preventing horizontal scrolling and overflow on mobile devices.

---

## Technologies Used

- **HTML5:** Semantic structural elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **CSS3:** Custom properties (CSS variables), Flexbox, CSS Grid, animations, and Media Queries (`@media`).
- **Vanilla JavaScript (ES6+):** Lightweight script for mobile menu toggle state management and contact form validation.
- **SVG Vector Assets:** Scalable, resolution-independent graphics ensuring crisp rendering on high-DPI (Retina) screens.

---

## Key Concepts Implemented

1. **CSS Media Queries (`@media`):** Custom breakpoints used to restructure component placement, hide/show navigation menus, and adjust grid columns based on device viewport width.
2. **Responsive Web Design & Viewport Meta Tag:** Configured `<meta name="viewport" content="width=device-width, initial-scale=1.0">` to ensure accurate device scaling.
3. **Mobile-First Layout Rearrangement:** Elements transition smoothly from multi-column grid layouts on desktop to stacked single-column cards on mobile screens.
4. **CSS Grid Responsiveness:** Dynamic grid configurations:
   - **Desktop (≥ 1024px):** 4 columns (Services), 3 columns (Projects / Stats).
   - **Tablet (768px – 1023px):** 2 columns (Services / Projects).
   - **Mobile (< 768px):** 1 column stacked layout.
5. **Flexbox Alignment:** Used for navbar layout, hero section alignment, feature badges, and form control layouts.
6. **Responsive Images:** Universal image rule `img { max-width: 100%; height: auto; }` preventing image clipping or overflow.
7. **Relative CSS Units:** `rem` for margins/paddings, `%` for container bounds, and `clamp()` for fluid responsive headings.
8. **Horizontal Overflow Prevention:** Applied `overflow-x: hidden;` and `box-sizing: border-box` across root elements to avoid accidental horizontal scrollbars on mobile.

---

## Responsive Breakpoints

| Breakpoint | Target Device Category | Key Layout Adaptations |
| :--- | :--- | :--- |
| **> 1024px** | Desktop / Large Monitors | Multi-column grids (4-col services, 3-col projects), horizontal navigation bar, spacious padding (`5rem`). |
| **768px – 1024px** | Tablets / iPad / Small Laptops | 2-column grids for services/projects, adjusted section margins, proportional typography scaling. |
| **< 768px** | Mobile Devices / Small Tablets | Navigation collapses into a vertical slide-in **Hamburger Menu**, 1-column stacked grids, reduced headings, stacked CTA buttons. |
| **< 480px** | Small Smartphones (320px – 480px) | Full-width buttons, reduced container padding (`1rem`), optimized touch targets, compact form fields. |

---

## Website Features & Structure

The single responsive landing page includes 8 distinct sections:

1. **Navbar:** Brand logo, horizontal links on desktop, animated hamburger toggle with overlay drawer on mobile.
2. **Hero Section:** Engaging headline, gradient typography, description, primary & secondary CTA buttons, floating hero SVG visual.
3. **About Section:** Company overview, bulleted feature checks, interactive statistics cards (50+ Projects, 30+ Clients, 5+ Years Experience).
4. **Services Section:** 4 service cards (*Web Development*, *Mobile Apps*, *UI/UX Design*, *Cloud Solutions*) with CSS Grid responsive columns (4 -> 2 -> 1).
5. **Projects Section:** 3 featured project cards with custom SVG visual previews, descriptions, technology badges, and action buttons.
6. **Why Choose Us Section:** 4 feature highlight cards with icons and hover effects.
7. **Contact Section:** Accessible contact form (*Full Name*, *Email*, *Subject*, *Message*) with instant visual success notification banner upon submission.
8. **Footer:** Company branding, quick links, service links, contact info, and copyright attribution.

---

## Folder Structure

```text
technova-responsive/
│
├── index.html                # Main semantic HTML5 document
├── README.md                 # Project documentation and guidelines
│
├── css/
│   └── style.css             # Main stylesheet with CSS Media Queries
│
├── js/
│   └── script.js            # Vanilla JavaScript for Mobile Menu & Form
│
└── assets/
    └── images/               # Scalable SVG vector visuals
        ├── hero-illustration.svg
        ├── about-illustration.svg
        ├── project-novacloud.svg
        ├── project-apexbank.svg
        └── project-quantum.svg
```

---

## How to Run the Project Locally

### Method 1: Direct File Open
1. Download or clone this repository.
2. Navigate to the `technova-responsive/` directory.
3. Double-click `index.html` to open it in any modern browser (Chrome, Firefox, Edge, Safari).

### Method 2: VS Code Live Server (Recommended)
1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension (by Extension ID: `ritwickdey.LiveServer`).
3. Right-click `index.html` and select **"Open with Live Server"**.
4. The site will launch automatically at `http://127.0.0.1:5500`.

---

## Testing Responsiveness

Responsiveness was rigorously tested using **Chrome DevTools Device Toolbar** across standard screen viewports:

- **320px** (Mobile Small - iPhone SE / Galaxy Fold)
- **375px** (Mobile Medium - iPhone 12/13/14)
- **425px** (Mobile Large - Pixel / Galaxy Ultra)
- **768px** (Tablet - iPad Portrait)
- **1024px** (Tablet Landscape / iPad Pro)
- **1440px** (Desktop / HD Monitor)

### Verification Checklist:
- [x] Zero horizontal scrollbars at all screen widths (320px to 1440px+).
- [x] Hamburger menu opens, locks scroll, and closes cleanly when links or backdrop are clicked.
- [x] Service cards transform dynamically (4 cols on desktop -> 2 cols on tablet -> 1 col on mobile).
- [x] Images scale smoothly within parent containers using `max-width: 100%`.
- [x] Contact form inputs remain fully touch-friendly and readable on mobile.

---

## Internship Task Reference

- **Task Name:** Task 4 — Make a Website Mobile-Friendly Using CSS Media Queries
- **Domain:** Web Development / Responsive Web Design

---

## Author

**Ayush Singh Tiwari**  
Web Development Intern  

---
*Built with passion and clean CSS3 Media Queries for TechNova Digital Solutions.*
