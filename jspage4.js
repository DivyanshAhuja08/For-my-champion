document.getElementById('yes').addEventListener('click', function() {
    window.location.href = 'page5.html';
});
document.getElementById('no').addEventListener('click', function() {
    // Change the GIF to a different one
    document.getElementById('image').src = 'sad.gif'; // Replace with the path to your "No" GIF
});