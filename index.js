const viewMoreButtons = document.querySelectorAll('button[class^="btn"]');
viewMoreButtons.forEach(button => {
    button.addEventListener('click', function() {
        const projectTitle = this.previousElementSibling.previousElementSibling.textContent;
        alert('Project: ' + projectTitle);
    });
});


const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    // Prevent form submission for validation
    event.preventDefault();


    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;


    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return; 
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return; 
    }

    form.reset();

    setTimeout(() => {
        const header = document.querySelector('header');
        header.scrollIntoView({ behavior: 'smooth' });
    }, 100); 
});

