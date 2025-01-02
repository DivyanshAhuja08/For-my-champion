document.getElementById('btn1').addEventListener('click', function() {
    document.querySelector('.page1').style.top = '-100%'; // Move the first page up and out of view
    document.querySelector('.page2').style.top = '0'; // Bring the second page into view
});
document.getElementById('btn2').addEventListener('click', function() {
    window.location.href = 'page4.html'; // Replace 'page4.html' with the path to your next page
});