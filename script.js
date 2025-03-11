document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Handle multiple users with different redirections
    if (username === 'Zuriel' && password === '11951720') {
        // Redirecting Zuriel to the bank dashboard page
        window.location.href = 'dashboard.html';
    } else if (username === 'Sienna' && password === '11951720') {
        // Redirecting Alex to their own dashboard page
        window.location.href = 'dashboard_2.html';
    } else {
        // Display error message
        errorMessage.textContent = 'Invalid username or password!';
    }
});