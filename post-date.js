document.addEventListener('DOMContentLoaded', () => {
  const postDateEl = document.getElementById('post-date');
  if (postDateEl) {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    postDateEl.textContent = new Date().toLocaleDateString('en-IN', options);
  }
});
