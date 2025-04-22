// // js/pages/main.js

// const t1 = gsap.timeline();

// window.addEventListener("DOMContentLoaded", () => {
//     // Fade in for main-content then identity-selector
//     // main-content total time: 7.2s
//     // identity-selector total time: 3.7s
//     t1.from("#main-content, #homepage-footer", {
//       opacity: 0,
//       duration: 3.5,
//       delay: 0.2,
//       ease: "power1.out"
//     })
//     .to("#main-content, #homepage-footer", {
//         opacity: 0,
//         duration: 2,
//         delay: 1.5,
//         ease: "power1.in"
//       }).from('#identity-selector', {
//         opacity: 0,
//         duration: 3.5,
//         delay: 0.2,
//         ease: "power1.out"
//       });
//   });