// post-date.js
document.addEventListener('DOMContentLoaded', () => {
  const postDateEl = document.getElementById('post-date');
  if (postDateEl) {
    // Current date automatically dikhaye
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    postDateEl.textContent = new Date().toLocaleDateString('en-IN', options);
    
    // Agar fixed date chahiye, jaise admit card release date:
    // postDateEl.textContent = "1 October 2025";
  }
});
