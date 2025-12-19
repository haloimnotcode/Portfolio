// ============================================
// Theme Toggle Functionality (Toggle Switch)
// ============================================

const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const themeIcon = document.querySelector('.theme-icon');
const profileImage = document.getElementById('profileImage');

// Function to update profile image based on theme
function updateProfileImage(theme) {
    if (profileImage) {
        // Add fade out effect
        profileImage.style.opacity = '0';
        
        setTimeout(() => {
            if (theme === 'dark') {
                profileImage.src = 'assets/img/profile-dark.png';
            } else {
                profileImage.src = 'assets/img/profile-light.png';
            }
            // Fade in with new image
            profileImage.style.opacity = '1';
        }, 200);
    }
}

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);

// Set initial toggle state, icon, and profile image
if (currentTheme === 'dark') {
    themeToggle.classList.add('active');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
}
updateProfileImage(currentTheme);

// Theme toggle event listener
themeToggle.addEventListener('click', () => {
    const theme = html.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Toggle active class for slider animation
    themeToggle.classList.toggle('active');
    
    // Update icon based on theme
    if (newTheme === 'dark') {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
    
    // Update profile image
    updateProfileImage(newTheme);
});

// ============================================
// Smooth Animations on Load
// ============================================

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});
