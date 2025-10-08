// auto-posts.js - Safe auto-post loader
const postDirectories = [
    "adre-result", "assam-police-result", "appsc-aso", "apsc", 
    "assam-prerona", "canara", "caste-certificate-assam",
    "dhs-recruitment", "employment-exchange", "iac-rec", "ib-results",
    "ibps-admit", "ibps-main", "ibps-result", "nec", "nmms", "nssb-csre",
    "rrb-je", "rrb-ntpc", "rrb-result", "rrb-sc", "ssc-cpo", "ssc-recruitment"
];

const fallbackPosts = [
    {title:"• Assam Police Recruitment 2025: Final Results for SI, Constable, and Grade IV", href:"assam-police-result/"},
    {title:"• Indian Army Civilian Recruitment 2025: Apply for 194 Group C Posts", href:"iac-rec/"},
    {title:"• Intelligence Bureau Security Assistant/Executive 4987 Posts — Answer Key Released", href:"ib-results/"}
];

async function loadLatestPosts() {
    const allPosts = [];
    
    for (const dir of postDirectories) {
        try {
            const response = await fetch(`./${dir}/`);
            if (!response.ok) continue;
            
            const html = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const links = Array.from(doc.querySelectorAll('a[href$=".html"]'));
            
            if (links.length > 0) {
                const latestPost = links[0];
                const postTitle = latestPost.textContent.replace('.html', '').replace(/-/g, ' ');
                const postHref = `${dir}/${latestPost.getAttribute('href')}`;
                
                if (postTitle && postHref) {
                    allPosts.push({ 
                        title: `• ${postTitle}`,
                        href: postHref 
                    });
                }
            }
        } catch (error) {
            console.log(`Skipped ${dir}`);
        }
    }
    
    return allPosts.length > 0 ? allPosts : fallbackPosts;
}

document.addEventListener('DOMContentLoaded', async function() {
    try {
        const dynamicPosts = await loadLatestPosts();
        
        if (window.POSTS && Array.isArray(dynamicPosts)) {
            window.POSTS = dynamicPosts;
            
            if (typeof window.renderPosts === 'function') {
                window.renderPosts();
            }
        }
    } catch (error) {
        console.log('Auto-posts loaded fallback data');
    }
});
