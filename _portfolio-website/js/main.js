//Mobile menu 
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  if (hamburger && navMenu) {
      hamburger.addEventListener('click', () => {
          hamburger.classList.toggle('active');
          navMenu.classList.toggle('active');
          
          // Prevent scrolling when menu is open
          document.body.style.overflow = hamburger.classList.contains('active') ? 'hidden' : '';
      });
      
      // Close menu when clicking on a link
      document.querySelectorAll('.nav-menu a').forEach(link => {
          link.addEventListener('click', () => {
              hamburger.classList.remove('active');
              navMenu.classList.remove('active');
              document.body.style.overflow = '';
          });
      });
  }
});

// Reusable footer snippet 
(function() {
  const footerHTML = `
  <footer class="site-footer">
      <p id="last-updated">Last modified <span id="current-date">April 22, 2025</span></p>
      <div class="social-links">
      <a
          href="https://instagram.com/zhaojicun_"
          target="_blank"
          aria-label="Instagram"
      >
          <img src="assets/icons/instagram-logo.svg" alt="Instagram" />
      </a>
      <a
          href="https://www.linkedin.com/in/jerry-zhao-56a08319a/"
          target="_blank"
          aria-label="LinkedIn"
      >
          <img src="assets/icons/linkedin-logo.svg" alt="LinkedIn" />
      </a>
      <a href="mailto:jerry.zhaojicun@gmail.com" aria-label="Email">
          <img src="assets/icons/envelope.svg" alt="Email" />
      </a>
      </div>
      <p>&copy; <span id="copyright-year">2025</span> Jerry Zhao</p>
  </footer>
  `;
  
  // Create and insert footer when DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
      // Insert the footer at the end of the body
      document.body.insertAdjacentHTML('beforeend', footerHTML);
      
      // Update the date and year
      updateCurrentDate();
      updateCopyrightYear();
  });
  
  // Function to display the last modified date of the current page
  function updateCurrentDate() {
      // Get the last modified date of the current document
      const lastModified = new Date(document.lastModified);
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const formattedDate = lastModified.toLocaleDateString('en-US', options);
      
      const dateElement = document.getElementById('current-date');
      if (dateElement) {
          dateElement.textContent = formattedDate;
      }
  }
  
  // Function to update the copyright year
  function updateCopyrightYear() {
      const currentYear = new Date().getFullYear();
      
      const copyrightElement = document.getElementById('copyright-year');
      if (copyrightElement) {
          copyrightElement.textContent = currentYear;
      }
  }
})();