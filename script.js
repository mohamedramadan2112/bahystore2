// script.js
$(document).ready(function() {
    $('#contactForm').on('submit', function(event) {
        event.preventDefault();
        alert('شكراً لتواصلك معنا! سنتواصل معك قريباً.');
        this.reset();
    });
});
