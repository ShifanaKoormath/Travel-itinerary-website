document.getElementById('search').addEventListener('input', function() {
    let searchValue = this.value.toLowerCase();
    let destinations = document.querySelectorAll('.destination-card');
    destinations.forEach(destination => {
        let title = destination.querySelector('h3').innerText.toLowerCase();
        if (title.includes(searchValue)) {
            destination.style.display = 'block';
        } else {
            destination.style.display = 'none';
        }
    });
});
document.getElementById('bookNowBtn')?.addEventListener('click', function() {
    alert('Booking feature is under development. Thank you for your interest!');
});
document.getElementById('registerBtn')?.addEventListener('click', function() {
    alert('Contact form is under development. Thank you for your message!');
});


