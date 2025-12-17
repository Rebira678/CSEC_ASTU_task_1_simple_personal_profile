// Optional JS animations or interactions
// Example: Smooth scroll on anchor links (if needed)
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e){
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target){
                target.scrollIntoView({behavior:'smooth'});
            }
        });
    });

    // Add hover animation log (optional)
    console.log('Profile page loaded. Animations ready.');
});