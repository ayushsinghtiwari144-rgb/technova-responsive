# TechNova Responsive Website

A modern and fully responsive single-page website created for **Web Development Internship — Task 4: Make a Website Mobile-Friendly Using CSS Media Queries**.

---

## 📌 Project Overview

TechNova is a professional digital solutions website designed to demonstrate responsive web development.

The project starts with a desktop-style layout and uses **CSS Media Queries** and responsive design techniques to make the website work properly across desktop, tablet, and mobile devices.

The main focus of this project is understanding how web layouts can automatically adapt to different screen sizes.

---

## 🎯 Objective

The objective of this task is to convert a desktop-oriented webpage into a **mobile-friendly responsive website** using CSS media queries.

The project focuses on:

* Responsive Web Design
* CSS Media Queries
* Mobile-friendly layouts
* Flexible layouts
* Responsive navigation
* Responsive images
* CSS Flexbox
* CSS Grid
* Responsive CSS units
* Preventing horizontal overflow
* Testing different screen sizes

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript
* CSS Flexbox
* CSS Grid
* CSS Media Queries
* Chrome DevTools

No external framework or paid tool is required.

---

## ✨ Features

### Responsive Navigation

The website includes a responsive navigation bar.

On desktop:

* Logo appears on the left
* Navigation links appear horizontally

On mobile:

* Navigation links are hidden
* A hamburger menu is displayed
* Users can open and close the navigation menu

---

### Hero Section

The hero section contains:

* Main heading
* Website description
* Call-to-action buttons
* Technology-themed visual element

The layout changes according to the available screen width.

---

### About Section

The About section introduces TechNova and displays company statistics such as:

* 50+ Projects
* 30+ Clients
* 5+ Years Experience

The statistics adapt to smaller screens.

---

### Services Section

The website contains four services:

1. Web Development
2. Mobile App Development
3. UI/UX Design
4. Cloud Solutions

The service cards use **CSS Grid**.

Desktop:

```text
[ Web ] [ Mobile ] [ UI/UX ] [ Cloud ]
```

Tablet:

```text
[ Web ] [ Mobile ]
[ UI/UX ] [ Cloud ]
```

Mobile:

```text
[ Web ]
[ Mobile ]
[ UI/UX ]
[ Cloud ]
```

---

### Projects Section

The project section contains three project cards.

Each project includes:

* Project visual
* Project name
* Description
* Technology tags
* View Project button

The cards automatically adjust according to the screen size.

---

### Why Choose Us

The section contains four features:

* Responsive Solutions
* Modern Technology
* Secure Development
* Dedicated Support

---

### Contact Section

A responsive contact form is included with:

* Name
* Email
* Subject
* Message
* Submit button

The form adjusts to smaller screen sizes so that fields remain easy to use.

---

### Footer

The footer contains:

* TechNova information
* Quick links
* Services
* Contact information
* Copyright information

---

## 📱 Responsive Design

Responsive design is the main focus of this project.

The website has been designed to work across:

* Mobile
* Tablet
* Desktop

### Desktop

The desktop layout provides:

* Full navigation
* Multi-column sections
* Larger typography
* More spacing
* Wider content areas

### Tablet

The tablet layout:

* Adjusts column counts
* Reduces spacing
* Resizes typography
* Keeps content within the viewport

### Mobile

The mobile layout:

* Stacks sections vertically
* Uses a hamburger navigation
* Reduces heading sizes
* Makes buttons easier to tap
* Converts grids into single-column layouts
* Makes the contact form responsive
* Prevents unwanted horizontal scrolling
* Scales images to fit the screen

---

## 📐 CSS Media Queries

The project uses CSS media queries to change the layout according to screen width.

Example:

```css
@media (max-width: 768px) {
    /* Mobile responsive styles */
}
```

Media queries allow different CSS rules to be applied depending on the device or viewport size.

---

## 📏 Responsive CSS Units

The project uses responsive and flexible units where appropriate, including:

* `%`
* `rem`
* `em`
* `vw`
* `vh`
* `px`

These units help create layouts that adapt to different screen sizes.

---

## 📦 Flexbox

Flexbox is used for flexible one-dimensional layouts.

It is used for elements such as:

* Navigation
* Hero section
* Buttons
* Footer content
* Other responsive layouts

---

## 🔲 CSS Grid

CSS Grid is used for multi-column layouts.

It is especially used for:

* Services
* Projects
* Feature cards

The number of columns changes according to the viewport width.

---

## 🖼️ Responsive Images

Images are prevented from becoming larger than their containers.

Example:

```css
img {
    max-width: 100%;
    height: auto;
}
```

This helps images scale correctly on smaller devices.

---

## 🚫 Horizontal Overflow Prevention

The website is designed to prevent unwanted horizontal scrolling.

The project uses:

```css
html,
body {
    overflow-x: hidden;
}
```

However, the layout is also structured properly so that elements do not unnecessarily exceed the viewport width.

---

## 📱 Viewport Meta Tag

The HTML document includes:

```html
<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>
```

This allows the webpage to display correctly according to the device's viewport width.

---

## 📂 Project Structure

```text
technova-responsive/
│
├── index.html
├── README.md
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── assets/
    └── images/
```

---

## ▶️ How to Run

### Method 1 — VS Code Live Server

1. Open the project in VS Code.
2. Install the **Live Server** extension if it is not already installed.
3. Right-click `index.html`.
4. Select **Open with Live Server**.
5. The website will open in your browser.

### Method 2 — Direct Browser

You can also open:

```text
index.html
```

directly in a browser.

---

## 🧪 Responsive Testing

The website should be tested using **Chrome DevTools Device Toolbar**.

Recommended viewport sizes:

```text
320px
375px
425px
768px
1024px
1440px
```

### Testing Checklist

* [ ] No horizontal scrolling
* [ ] Navbar works correctly
* [ ] Hamburger menu works
* [ ] Hero section fits the screen
* [ ] Services cards respond correctly
* [ ] Project cards respond correctly
* [ ] Images scale correctly
* [ ] Text does not overflow
* [ ] Buttons remain usable
* [ ] Contact form fits the screen
* [ ] Footer remains responsive
* [ ] Desktop layout works
* [ ] Tablet layout works
* [ ] Mobile layout works

---

## 💡 Key Concepts Learned

This project demonstrates the following concepts:

* Media Queries
* Responsive Web Design
* Mobile-first design
* Desktop-first design
* CSS Flexbox
* CSS Grid
* Responsive images
* CSS units
* Viewport
* Responsive navigation
* Breakpoints
* Mobile layouts
* Tablet layouts
* Overflow management

---

## 📚 Internship Task

**Task 4 — Make a Website Mobile-Friendly Using CSS Media Queries**

The project demonstrates the conversion of a desktop-style webpage into a mobile-friendly responsive website using CSS media queries.

---

## 👨‍💻 Author

**Ayush Singh Tiwari**

BCA Student
Web Development Learner

---

## 📄 Task Requirements

The project follows the internship task requirements by focusing on:

* Media queries
* Mobile-friendly layouts
* Responsive design
* Flexible layouts
* Responsive images
* Navigation responsiveness
* Chrome DevTools testing

---

## 🚀 Future Improvements

Possible future improvements include:

* Adding a backend contact form
* Adding real project links
* Adding animations
* Adding dark/light mode
* Connecting the website to a database
* Deploying the website online

---

## 📌 Internship Submission

Before submission, verify that:

1. The complete project is uploaded to GitHub.
2. `README.md` is included.
3. All project files are included.
4. The website works correctly.
5. Mobile responsiveness has been tested.
6. No major console errors remain.
7. The GitHub repository link is ready for submission.
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
