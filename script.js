
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Simple validation here for demonstration purposes
    if(name && email && message) {
        // Here you would typically make an AJAX request to your server
        // For now, we will just simulate an email action
        console.log('Sending message:', message);
        window.location.href = `mailto:pranav.gunhal@gmail.com?subject=Message from ${name}&body=${message}`;
    } else {
        alert('Please fill all fields.');
    }
});
