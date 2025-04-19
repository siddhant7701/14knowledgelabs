// FAQ Accordion
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      
      question.addEventListener('click', () => {
        // Close all other items
        faqItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active');
          }
        });
        
        // Toggle current item
        item.classList.toggle('active');
      });
    });
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  
  menuToggle.addEventListener('click', () => {
    alert('Mobile menu functionality would be implemented here');
    // In a real implementation, this would toggle a mobile navigation menu
  });
  
  // Newsletter form submission
  const newsletterForm = document.querySelector('.newsletter-form');
  
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('.newsletter-input');
    
    if (emailInput.value.trim() === '') {
      alert('Please enter your email address');
      return;
    }
    
    alert('Thank you for subscribing to our newsletter!');
    emailInput.value = '';
  });
  
  // Callback button
  const callbackButton = document.querySelector('.callback-button');
  
  callbackButton.addEventListener('click', () => {
    alert('A callback request form would appear here');
    // In a real implementation, this would open a modal with a callback request form
  });