document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e){

        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const tragetSection = document.getElementById(targetId);
        tragetSection.scrollIntoView({behavior: 'smooth'});

    });
});

document.getElementById('contact-form').addEventListener('submit', (e) => {
e.preventDefault();
alert('Thank you for reaching out! I will get back to you soon.');
e.target.reset();
});