// Login Pop-up


// Google Search Box
const searchForm = document.querySelector('form');
const searchInput = document.getElementById('google-search-input');

searchForm.addEventListener('submit', function (e) {
  setTimeout(function(){ // Delay for Chrome
    searchInput.value = ''; // blank the input
  }, 1000);
});
