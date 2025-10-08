// auto-posts.js - Load from JSON
fetch('./posts-data.json')
  .then(response => response.json())
  .then(data => {
    if (window.POSTS && data.posts) {
      window.POSTS = data.posts;
      if (typeof window.renderPosts === 'function') {
        window.renderPosts();
      }
    }
  })
  .catch(error => {
    console.log('Using default posts data');
  });
