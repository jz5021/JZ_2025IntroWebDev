document.addEventListener('DOMContentLoaded', () => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Set initial states for heading
    gsap.set('h2', { 
      opacity: 0,
      y: 20 // Start slightly below final position
    });
    
    // Set initial states for project containers
    gsap.set('#project-group-container > div', { 
      opacity: 0,
      y: 30 // Start below final position for rising effect
    });
    
    // Additional specific setup for text elements
    gsap.set('#project-group-container > div p', {
      opacity: 0,
      y: 15 // Text starts even lower than its container
    });
    
    // Create a master timeline for sequenced animations
    const masterTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: 'main',
        start: 'top 75%',
        toggleActions: 'play none none none'
      }
    });
    
    // Add heading animation to master timeline - rising from bottom
    masterTimeline.to('h2', {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: 'power2.out'
    });
    
    // Add staggered container animations - rising from bottom
    masterTimeline.to('#project-group-container > div', {
      opacity: 1,
      y: 0,
      duration: 1.4,
      stagger: 0.2,
      ease: 'power3.out'
    }, "-=0.7"); // Slight overlap with heading animation
    
    // Add text animation after their containers appear
    masterTimeline.to('#project-group-container > div p', {
      opacity: 1,
      y: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: 'power2.out'
    }, "-=1.2"); // Overlap with container animations
    
    // Create subtle hover effects
    const projectContainers = document.querySelectorAll('#project-group-container > div');
    
    projectContainers.forEach(container => {
      const image = container.querySelector('img');
      const text = container.querySelector('p');
      let hoverTl = gsap.timeline({ paused: true });
      
      // Build hover animation timeline
      hoverTl
        .to(image, {
          filter: 'brightness(1.05)', 
          duration: 0.5,
          ease: 'power1.inOut'
        }, 0)
        .to(text, {
          opacity: 0.85,
          y: -3, // Text slightly rises on hover
          duration: 0.5,
          ease: 'power1.inOut'
        }, 0);
      
    });
    
    // Add subtle page load animation
    window.addEventListener('load', () => {
      // Subtle fade-in for the whole section
      gsap.from('main', {
        opacity: 0.92,
        y: 10,
        duration: 1.5,
        ease: 'power1.out'
      });
    });
  });