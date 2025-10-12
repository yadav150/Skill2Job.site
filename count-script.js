// visitor-counter.js
document.addEventListener("DOMContentLoaded", function() {
  const countKey = 'skill2job-site'; // unique key for your site
  const namespace = 'skill2job';     // unique namespace

  fetch(`https://api.countapi.xyz/hit/${namespace}/${countKey}`)
    .then(res => res.json())
    .then(data => {
      const counterElement = document.getElementById('visitor-count');
      if(counterElement) {
        counterElement.textContent = data.value;
      }
    })
    .catch(err => console.error("Visitor counter error:", err));
});
