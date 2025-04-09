document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;

    // Display confirmation message
    const confirmationMessage = `
        Account created successfully!<br>
        Name: ${name}<br>
        Email: ${email}<br>
        Address: ${address}<br>
        Phone: ${phone}
    `;
    document.getElementById('confirmation-message').innerHTML = confirmationMessage;
    document.getElementById('confirmation-message').style.display = 'block';

    // Optionally, clear the form
    document.getElementById('signup-form').reset();
});

document.getElementById('login-facebook').addEventListener('click', function() {
    alert('Logging in with Facebook...');
});

document.getElementById('login-google').addEventListener('click', function() {
    alert('Logging in with Google...');
});

document.getElementById('login-link').addEventListener('click', function(event) {
    event.preventDefault();
    // Hide signup form and show login form
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
});

document.getElementById('signup-link').addEventListener('click', function(event) {
    event.preventDefault();
    // Hide login form and show signup form
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('form-container').style.display = 'block';
});