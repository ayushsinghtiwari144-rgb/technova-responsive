/**
 * TechNova — Digital Solutions
 * Interactive Mobile Navigation & Form Validation Script
 * Author: Ayush Singh Tiwari
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM Element Selectors
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');
  const header = document.getElementById('header');

  /* ==========================================================================
     1. MOBILE NAVIGATION TOGGLE (HAMBURGER MENU)
     ========================================================================== */
  if (navToggle && navMenu) {
    // Toggle Mobile Menu Open/Close
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      navToggle.setAttribute('aria-expanded', !isExpanded);

      // Prevent background body scrolling when mobile menu is active
      document.body.style.overflow = !isExpanded ? 'hidden' : '';
    });

    // Close mobile menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
          navToggle.classList.remove('active');
          navMenu.classList.remove('active');
          navToggle.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        }
      });
    });

    // Close mobile menu when clicking outside the menu container
    document.addEventListener('click', (event) => {
      if (navMenu.classList.contains('active') && 
          !navMenu.contains(event.target) && 
          !navToggle.contains(event.target)) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });

    // Close mobile menu on Escape key press (Accessibility)
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navMenu.classList.contains('active')) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        navToggle.focus();
      }
    });
  }

  /* ==========================================================================
     2. NAVBAR SCROLL EFFECT & SCROLLSPY ACTIVE LINK HIGHLIGHT
     ========================================================================== */
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNavLink() {
    const scrollY = window.pageYOffset;

    // Header shadow on scroll
    if (window.scrollY > 40) {
      header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
    } else {
      header.style.boxShadow = 'none';
    }

    // ScrollSpy active link detection
    sections.forEach(currentSection => {
      const sectionHeight = currentSection.offsetHeight;
      const sectionTop = currentSection.offsetTop - 100;
      const sectionId = currentSection.getAttribute('id');
      
      const link = document.querySelector(`.nav-list a[href*="${sectionId}"]`);
      if (link) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink);
  updateActiveNavLink(); // Initial call

  /* ==========================================================================
     3. CONTACT FORM SUBMISSION & VALIDATION
     ========================================================================== */
  if (contactForm && formFeedback) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Retrieve form values
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();

      // Simple HTML5 validation fallback check
      if (!name || !email || !subject || !message) {
        formFeedback.className = 'form-feedback error';
        formFeedback.textContent = 'Please fill out all required fields before submitting.';
        return;
      }

      // Simulate API submit request
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Sending Message...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;

        // Show Success Feedback
        formFeedback.className = 'form-feedback success';
        formFeedback.innerHTML = `<strong>Thank you, ${name}!</strong> Your message regarding "${subject}" has been received. Our team will contact you at <em>${email}</em> shortly.`;

        // Reset Form Fields
        contactForm.reset();

        // Clear feedback message after 8 seconds
        setTimeout(() => {
          formFeedback.className = 'form-feedback';
          formFeedback.textContent = '';
        }, 8000);
      }, 1200);
    });
  }
});
