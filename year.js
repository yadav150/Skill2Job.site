// Year auto-update
document.getElementById('yr2').textContent = new Date().getFullYear();

// Simple search redirect
document.getElementById('searchBtn').addEventListener('click', () => {
  const q = document.getElementById('q').value.trim();
  location.href = q ? "index.html?q=" + encodeURIComponent(q) : "index.html";
});
