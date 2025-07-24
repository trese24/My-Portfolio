document.addEventListener('DOMContentLoaded', () => {
    const codeDisplay = document.getElementById('code-display');
    const replayBtn = document.getElementById('replay-btn');
    let currentIndex = 0;
    let typingSpeed = 10; // Lower is faster
    let typingTimeout;

    function typeCharacter() {
        if (currentIndex < cssCode.length) {
            // Add the next character
            codeDisplay.textContent = cssCode.substring(0, currentIndex + 1);
            currentIndex++;
            
            // Add cursor
            const cursor = document.createElement('span');
            cursor.className = 'cursor';
            codeDisplay.appendChild(cursor);
            
            // Scroll to bottom
            const codeContainer = document.getElementById('code-container');
            codeContainer.scrollTop = codeContainer.scrollHeight;
            
            // Schedule next character
            typingTimeout = setTimeout(typeCharacter, typingSpeed + (Math.random() * 20));
        } else {
            // Remove cursor when done
            const cursors = document.getElementsByClassName('cursor');
            if (cursors.length > 0) {
                cursors[0].remove();
            }
        }
    }

    function startTyping() {
        // Clear any ongoing typing
        clearTimeout(typingTimeout);
        
        // Reset
        currentIndex = 0;
        codeDisplay.textContent = '';
        
        // Start typing
        typeCharacter();
    }

    // Event listener for replay button
    replayBtn.addEventListener('click', startTyping);

    // Start typing when page loads
    startTyping();
});

window.addEventListener("scroll", function(){
    scrollBtn.classList.toggle("active", window.scrollY > 500);
});

//javascript for scroll back to top on click scroll-to-top button

// document.querySelector(".scrollToTop-btn").addEventListener("click", () => {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// });

        const menuBtn = document.querySelector(".menu-btn");
        const navigation = document.querySelector(".navigation");
        const navigationItems = document.querySelector(".navigation a");

        menuBtn.addEventListener("click", () => {
            menuBtn.classList.toggle("active");
            navigation.classList.toggle("active");
        })

        // Navigation Effects
        window.addEventListener("scroll", function(){
            const header = document.querySelector("header");
            header.classList.toggle("sticky", window.scrollY > 0);
        })

        navigationItems.forEach((navigationItem) => {
            navigationItem.addEventListener("click", () => {
                menuBtn.classList.remove("active");
                navigation.classList.remove("active")
            })
        })

        // Toggle mobile menu
            const menuBtn = document.querySelector(".menu-btn");
            const navigation = document.querySelector(".navigation");

            menuBtn.addEventListener("click", () => {
                menuBtn.classList.toggle("open");
                navigation.classList.toggle("active");
            });

            // Sticky header on scroll
            window.addEventListener("scroll", () => {
                const header = document.querySelector("header");
                header.classList.toggle("sticky", window.scrollY > 0);
            });

            // Close mobile menu when clicking a link
            document.querySelectorAll(".navigation a").forEach((link) => {
                link.addEventListener("click", () => {
                    if (navigation.classList.contains("active")) {
                        menuBtn.classList.remove("open");
                        navigation.classList.remove("active");
                    }
                });
            });

            