// Format: Month Day, Year
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const postDate = document.getElementById('post-date');
if(postDate){
    postDate.textContent = new Date().toLocaleDateString('en-US', options);
}
