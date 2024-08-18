document.addEventListener("DOMContentLoaded", function() {
    var options = {
        strings: ["Web Developer", "Designer"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    };
    var typed = new Typed(".text", options);

    // Animate progress bars
    document.querySelectorAll('.progress').forEach(function(progress) {
        var percentage = progress.getAttribute('data-progress');
        progress.style.width = percentage;
    });
});
