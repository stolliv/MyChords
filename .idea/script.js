async function searchSong() {
  const searchValue = document.getElementById("searchInput").value;
  const targetUrl = "https://www.ultimate-guitar.com/search.php?search_type=title&value=" + encodeURIComponent(searchValue);
  window.open(targetUrl, '_blank');

  // Save recent search
  await fetch('save_search.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({searchValue})
  });
  loadRecentSearches();
}

async function loadFavorites() {
  const res = await fetch('load_favorites.php');
  const data = await res.json();
  const favoritesList = document.getElementById('favoritesList');
  favoritesList.innerHTML = data.map(title => `<div onclick="searchSpecificSong('${title}')">${title}</div>`).join('');
}

async function loadRecentSearches() {
  const res = await fetch('load_searches.php');
  const data = await res.json();
  const recentSearches = document.getElementById('recentSearches');
  recentSearches.innerHTML = data.map(title => `<option>${title}</option>`).join('');
}

function searchSpecificSong(title) {
  const targetUrl = "https://www.ultimate-guitar.com/search.php?search_type=title&value=" + encodeURIComponent(title);
  window.open(targetUrl, '_blank');
}
