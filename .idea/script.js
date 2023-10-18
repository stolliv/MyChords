document.addEventListener("DOMContentLoaded", function() {
  // Load favorites from the server when the page loads
  loadFavorites();

  // Load recent searches from localStorage
  loadRecentSearches();
});

function searchSong() {
  const searchValue = document.getElementById("searchInput").value;
  const targetUrl = "https://www.ultimate-guitar.com/search.php?search_type=title&value=" + encodeURIComponent(searchValue);

  // Save to recent searches
  saveRecentSearch(searchValue);

  window.open(targetUrl, '_blank');
}

function loadRecentSearches() {
  // Implement logic to load recent searches from localStorage
  // and populate the "recentSearches" select element
}

function saveRecentSearch(searchValue) {
  // Implement logic to save the search to localStorage
}

function loadFavorites() {
  fetch('/load_favorites.php')
    .then(response => response.json())
    .then(data => {
      // Populate the "favorites" div
    });
}

function addFavorite(title) {
  fetch('/add_favorite.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title })
  })
  .then(() => {
    loadFavorites();
  });
}
