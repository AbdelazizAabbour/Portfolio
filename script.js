window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 50;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 8 + 's';
                particle.style.animationDuration = (Math.random() * 3 + 5) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.skill-item').forEach(item => {
            observer.observe(item);
        });

        document.querySelectorAll('.skill-item').forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        function typeWriter(element, text, speed = 100) {
            let i = 0;
            element.innerHTML = '';
            
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            
            type();
        }

        window.addEventListener('load', function() {
            createParticles();
            
            const animatedElements = document.querySelectorAll('.hero-text > *');
            animatedElements.forEach((element, index) => {
                element.style.animationDelay = (index * 0.2) + 's';
            });
        });

        document.addEventListener('mousemove', function(e) {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            const profileImage = document.querySelector('.profile-image');
            const profileGlow = document.querySelector('.profile-glow');
            
            if (profileImage && profileGlow) {
                profileImage.style.transform = `translate(${mouseX * 10}px, ${mouseY * 10}px)`;
                profileGlow.style.transform = `translate(${mouseX * 5}px, ${mouseY * 5}px)`;
            }
        });

        
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    // Toggle menu function
    function toggleMenu(show) {
        navLinks.classList.toggle('nav-active', show);
        burger.classList.toggle('toggle', show);
        
        links.forEach((link, index) => {
            if (show) {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            } else {
                link.style.animation = '';
            }
        });
    }

    // Burger click handler
    burger.addEventListener('click', () => {
        const isOpen = navLinks.classList.contains('nav-active');
        toggleMenu(!isOpen);
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        const isClickInside = event.target.closest('.nav-container');
        if (!isClickInside && navLinks.classList.contains('nav-active')) {
            toggleMenu(false);
        }
    });



    // Add smooth scrolling behavior
  document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.style.scrollBehavior = 'smooth';
  });



  const text = "I'm a Full Stack Developer ..";
  let index = 0;
  let isDeleting = false;
  let typingDelay = 100;
  let erasingDelay = 50;
  let newTextDelay = 1000;
  
  function typeEffect() {
      const currentText = text.substring(0, index);
      document.getElementById('typing-text').textContent = currentText;
  
      if (!isDeleting && index < text.length) {
          // Typing
          index++;
          setTimeout(typeEffect, typingDelay);
      } else if (isDeleting && index > 0) {
          // Erasing
          index--;
          setTimeout(typeEffect, erasingDelay);
      } else {
          // Change direction
          isDeleting = !isDeleting;
          setTimeout(typeEffect, isDeleting ? newTextDelay : typingDelay);
      }
  }
  
  
  window.onload = typeEffect;

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.service-card, .testimonial-card, .process-step');
    animateElements.forEach(el => observer.observe(el));
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    }
    
    updateCounter();
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            const target = parseInt(statNumber.textContent);
            animateCounter(statNumber, target);
            statsObserver.unobserve(entry.target);
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach(item => statsObserver.observe(item));
});

// Enhanced form validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            const name = form.querySelector('input[name="name"]').value;
            const email = form.querySelector('input[name="email"]').value;
            const message = form.querySelector('input[name="message"]').value;
            
            if (!name || !email || !message) {
                e.preventDefault();
                alert('Please fill in all required fields.');
                return false;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                e.preventDefault();
                alert('Please enter a valid email address.');
                return false;
            }
        });
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});
    
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    
    burger.addEventListener('click', function() {
        
        navLinks.classList.toggle('active');
        burger.classList.toggle('active');
        
       
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });
    

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            burger.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
});



        document.getElementById('year').textContent = new Date().getFullYear();

        document.addEventListener('DOMContentLoaded', function() {
            const footerLinks = document.querySelectorAll('.footer-links a');
            
            footerLinks.forEach(link => {
                link.addEventListener('mouseenter', function() {
                    this.style.color = '#D4AF37';
                });
                
                link.addEventListener('mouseleave', function() {
                    this.style.color = '#fff';
                });
            });
        });











/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* ||||||||||||||||||||||||switch to white mode|||||||||||||||||||||||  */
/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
document.getElementById('input').addEventListener('change', function() {
  if (this.checked) {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('white-mode');
  } else {
    document.body.classList.add('white-mode');
    document.body.classList.remove('dark-mode');
  }
});




