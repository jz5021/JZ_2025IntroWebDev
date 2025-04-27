// js/pages/main.js


// Intro animation
document.addEventListener("DOMContentLoaded", () => {
  // Check if this is the first visit in this session
  const hasSeenAnimationThisSession = sessionStorage.getItem("hasSeenAnimationThisSession");
  
  // Finding elements
  let identitySelector = document.getElementById("identity-selector");
  let mainContent = document.querySelector("#main-content");
  let homepageFooter = document.querySelector("#homepage-footer");
  
  const t1 = gsap.timeline();
  
  if (!hasSeenAnimationThisSession) {
    // Show full animation in the first session
    t1.from("#main-content, #homepage-footer", {
      opacity: 0,
      duration: 3.5,
      delay: 0.2,
      ease: "power1.out"
    })
    .to("#main-content, #homepage-footer", {
      opacity: 0,
      duration: 2,
      delay: 1.5,
      ease: "power1.in"
    })
    .from('#identity-selector-title', {
      opacity: 0,
      duration: 0.75,
      delay: 0.2,
      ease: "power1.out"
    })
    .from('#view1-btn', {
      opacity: 0,
      duration: 0.5,
      delay: 0,
      ease: "power1.out"
    })
    .from('#view2-btn', {
      opacity: 0,
      duration: 0.5,
      delay: 0,
      ease: "power1.out"
    })
    .from('#about-btn', {
      opacity: 0,
      duration: 0.5,
      delay: 0,
      ease: "power1.out",
      onStart: () => {
        identitySelector.style.display = "flex";
      },
      onComplete: () => {
        identitySelector.style.pointerEvents = "auto";
        // Mark that full animation has been shown
        sessionStorage.setItem("hasSeenAnimationThisSession", "true");
      }
    });
  } else {
    // Already seen animation - skip to identity selector part
    // Set initial state - hide main content, prepare identity selector
    if (mainContent) mainContent.style.opacity = "0";
    if (homepageFooter) homepageFooter.style.opacity = "0";
    identitySelector.style.display = "flex";
    
    // Start animation from identity selector title
    t1.from('#identity-selector-title', {
      opacity: 0,
      duration: 0.75,
      delay: 0.2,
      ease: "power1.out"
    })
    .from('#view1-btn', {
      opacity: 0,
      duration: 0.5,
      delay: 0,
      ease: "power1.out"
    })
    .from('#view2-btn', {
      opacity: 0,
      duration: 0.5,
      delay: 0,
      ease: "power1.out"
    })
    .from('#about-btn', {
      opacity: 0,
      duration: 0.5,
      delay: 0,
      ease: "power1.out",
      onComplete: () => {
        identitySelector.style.pointerEvents = "auto";
      }
    });
  }
});