             //Typing  script
             document.addEventListener('DOMContentLoaded', function () {
                const texts = [
                    "Software Developer",
                    "Web Developer",
                    "Game Developer",
                    "Cyber Security"
                ];

                const animatedText = document.querySelector('.animated-text');
                const cursor = document.querySelector('.cursor');

                let textIndex = 0;
                let charIndex = 0;
                let isDeleting = false;
                let typingSpeed = 150;
                let isWaiting = false;

                function type() {
                    // If we're in waiting state between words, skip processing
                    if (isWaiting) {
                        setTimeout(type, typingSpeed);
                        return;
                    }

                    const currentText = texts[textIndex];

                    if (!isDeleting && charIndex <= currentText.length) {
                        // Typing forward
                        animatedText.textContent = currentText.substring(0, charIndex);
                        charIndex++;
                        typingSpeed = 150;

                        if (charIndex > currentText.length) {
                            // Finished typing current word
                            isDeleting = true;
                            typingSpeed = 1000; // Pause at full word
                            isWaiting = true;
                        }
                    } else if (isDeleting && charIndex >= 0) {
                        // Deleting backward
                        animatedText.textContent = currentText.substring(0, charIndex);
                        charIndex--;
                        typingSpeed = 50;

                        if (charIndex < 0) {
                            // Finished deleting current word
                            isDeleting = false;
                            textIndex = (textIndex + 1) % texts.length;
                            typingSpeed = 500; // Pause before next word
                            isWaiting = true;
                        }
                    }

                    // Reset waiting state after delay
                    if (isWaiting) {
                        setTimeout(() => {
                            isWaiting = false;
                            type();
                        }, typingSpeed);
                    } else {
                        setTimeout(type, typingSpeed);
                    }
                }

                // Start animation
                type();
            });
         //<!--Education cards script -->
            // Create animated particles
                function createParticles() {
                    const particlesContainer = document.getElementById('particles');
                    const particleCount = 30;

                    for (let i = 0; i < particleCount; i++) {
                        const particle = document.createElement('div');
                        particle.classList.add('particle');

                        // Random properties
                        const size = Math.random() * 5 + 2;
                        const posX = Math.random() * 100;
                        const delay = Math.random() * 15;
                        const duration = Math.random() * 10 + 10;

                        particle.style.width = `${size}px`;
                        particle.style.height = `${size}px`;
                        particle.style.left = `${posX}%`;
                        particle.style.animationDelay = `${delay}s`;
                        particle.style.animationDuration = `${duration}s`;

                        particlesContainer.appendChild(particle);
                    }
                }

                // Animate timeline items on scroll
                const timelineItems = document.querySelectorAll('.timeline-item');

                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                        }
                    });
                }, { threshold: 0.2 });

                timelineItems.forEach((item, index) => {
                    observer.observe(item);
                    item.style.transitionDelay = `${index * 0.2}s`;
                });

                // Initialize particles when page loads
                window.addEventListener('load', createParticles);

                // Block right-click (prevents "Inspect Element")
document.addEventListener("contextmenu", (e) => e.preventDefault());

// Block F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
document.addEventListener("keydown", (e) => {
    if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.shiftKey && e.key === "J") ||
        (e.ctrlKey && e.key === "U")
    ) {
        e.preventDefault();
        alert("Inspection is disabled.");
    }
});

                    //diasble the page 

                    //setInterval(function() {
                        //if (document.documentMode || /webkit/i.test(navigator.userAgent) || /firefox/i.test(navigator.userAgent)) {
                            //if (window.outerHeight - window.innerHeight > 100 || window.outerWidth - window.innerWidth > 100) {
                               // document.body.innerHTML = ''; window.close();
                            //}
                        //}
                        //, 1000);
                        // Override console methods
// Check if DevTools is open (works in Chrome, Edge, Firefox)
setInterval(() => {
    const widthThreshold = window.outerWidth - window.innerWidth > 150;
    const heightThreshold = window.outerHeight - window.innerHeight > 150;
    
    if (widthThreshold || heightThreshold) {
        // DevTools detected - take action
        document.body.innerHTML = `
            <h1>Developer Tools Detected</h1>
            <p>This page does not allow inspection.</p>
            <p>Redirecting in <span id="countdown">5</span> seconds...</p>
        `;
        
        // Auto-reload after 5 seconds
        let count = 5;
        setInterval(() => {
            count--;
            document.getElementById("countdown").textContent = count;
            if (count <= 0) window.location.reload();
        }, 1000);
    }
}, 1000);     

// Break debugger attempts in Sources tab
(function() {
  function debuggerDetector() {
    const startTime = Date.now();
    (function() {
      debugger;
      const endTime = Date.now();
      if (endTime - startTime > 100) {
        // Debugger detected
        document.body.innerHTML = '<h1>Debugging Not Allowed</h1>';
        window.stop();
      }
    })();
  }
  
  setInterval(debuggerDetector, 1000);
})();

module.exports = {
  productionSourceMap: false,
  devtool: 'none'
  // ...
}
// Instead of static script tags, load JavaScript dynamically
(function() {
  function loadProtectedScript(encodedScript) {
    const script = document.createElement('script');
    script.textContent = atob(encodedScript);
    document.head.appendChild(script).remove();
  }
  
  // Your main code would be base64 encoded
  const protectedCode = '/* Your base64 encoded script here */';
  loadProtectedScript(protectedCode);
  
  // Remove original script tags
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('script:not([data-protected])').forEach(script => {
      script.remove();
    });
  });
})();

(async function() {
  const response = await fetch('protected-functions.wasm');
  const bytes = await response.arrayBuffer();
  const module = await WebAssembly.instantiate(bytes);
  
  // Use your protected functions
  window.sensitiveOperation = module.exports.sensitiveOperation;
})();

// Detect DevTools opening
setInterval(() => {
  if (window.outerWidth - window.innerWidth > 200 || 
      window.outerHeight - window.innerHeight > 200) {
    document.body.innerHTML = 'DevTools detected!';
    window.location.reload();
  }
}, 1000);

 // Function to open the modal - make sure this is properly defined
    function openModal(imageSrc, title) {
        console.log("Opening modal with:", imageSrc); // Debugging line
        const modal = document.getElementById('certificateModal');
        const modalImg = document.getElementById('modalImage');
        const captionText = document.getElementById('caption');
        
        if (!modal || !modalImg || !captionText) {
            console.error("Modal elements not found!");
            return;
        }
        
        modal.style.display = "block";
        modalImg.src = imageSrc;
        modalImg.alt = title; // For accessibility
        captionText.innerHTML = title;
        
        document.body.classList.add('modal-open');
    }

    // Function to close the modal
    function closeModal() {
        const modal = document.getElementById('certificateModal');
        if (modal) {
            modal.style.display = "none";
            document.body.classList.remove('modal-open');
        }
    }

    // Event listeners
    document.addEventListener('DOMContentLoaded', function() {
        // Close modal when clicking outside
        const modal = document.getElementById('certificateModal');
        if (modal) {
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    closeModal();
                }
            });
        }
        
        // Close with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });
    });

                        

