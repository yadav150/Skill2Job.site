document.addEventListener('DOMContentLoaded', () => {
  const postDateEl = document.getElementById('post-date');
  if (postDateEl) {
    // Fixed date for "Updated on"
    postDateEl.textContent = "1 October 2025"; // Yaha tum apni desired date daal sakte ho
  }
});
