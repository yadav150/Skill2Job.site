// Update the year dynamically
document.getElementById("yr").textContent = new Date().getFullYear();

// List of posts/articles (merged all titles)
window.POSTS = [
  { title: "Assam Direct Recruitment Exam Syllabus & Pattern", href: "adre-syllabus/" },
  { title: "SSC CGL AAO & ASO Guide 2025 - Exam, Syllabus, Career", href: "ssc-cgl-guide/" },
  { title: "BSF Constable (GD) Recruitment 2025 – Apply for 391 Vacancies", href: "bsf-gd-recr/" },
  { title: "Merit-Based Scholarships for OBC and SC Students", href: "sc-scholarship/" },
  { title: "Assam Police Recruitment 2025: Final Results for SI, Constable, and Grade IV", href: "assam-police-result/" },
  { title: "Indian Army Civilian Recruitment 2025: Apply for 194 Group C Posts", href: "iac-rec/" },
  { title: "Intelligence Bureau Security Assistant/Executive 4987 Posts — Answer Key Released", href: "ib-results/" },
  { title: "How to Make Caste Certificate Online in Assam in 2025", href: "caste-certificate-assam/" },
  { title: "SSC CPO 2025 Notification Out – Apply Online for 3073 SI Posts", href: "ssc-cpo/" },
  { title: "RRB Junior Engineer (JE) Recruitment 2025 – Apply Online for 2,570 Vacancies", href: "rrb-je/" },
  { title: "RRB NTPC Recruitment 2025 – Apply Online for 8850 Graduate & Undergraduate Posts", href: "rrb-ntpc/" },
  { title: "IBPS PO CRP PO/MT XV Mains Admit Card 2025 Released", href: "ibps-main/" },
  { title: "RRB Recruitment 2025 – Submit Online Application for 368 Section Controller Vacancies", href: "rrb-sc/" },
  { title: "How to Register on Employment Exchange Assam Online (Step-by-Step Guide 2025)", href: "employment-exchange/" },
  { title: "APPSC Recruitment 2025 – Apply Now for 25 ASO Vacancies", href: "appsc-aso/" },
  { title: "ADRE Result 2025 – Check ADRE 2.0 Final Selection List Online", href: "adre-result/" },
  { title: "IBPS Result 2025 – Check Prelims Result for PO/MT Posts", href: "ibps-result/" },
  { title: "APSC Recruitment 2025 – Apply Online for 20 Grade IV Posts", href: "apsc/" },
  { title: "Nagaland NSSB CSRE 2025 – 142 Staff Posts", href: "nssb-csre/" },
  { title: "IBPS Admit Card 2025 – Download Clerk Prelims Exam Call Letter", href: "ibps-admit/" },
  { title: "Canara Bank Recruitment 2025 – Submit Online Application for 3500 Graduate Apprentice Vacancies", href: "canara/" },
  { title: "NEC Scholarship 2025 - Submit Online Application", href: "nec/" },
  { title: "Assam Prerona Asoni Scheme 2025: Eligibility, ₹1800 Stipend & How to Apply", href: "assam-prerona/" },
  { title: "NMMS Scholarship Exam 2025 – How to Apply Online & Who Can Apply", href: "nmms/" },
  { title: "IOCL Recruitment 2025 – Submit Online Application for GE & DE Posts", href: "iocl-recruitment/" },
  { title: "SSC Delhi Police 2025 Recruitment – 7,565 Executive Constable Vacancies", href: "ssc-recruitment/" },
  { title: "DME Assam Result 2025 - Check DME Grade III Non Tech Results", href: "dme-assam-result-2025.html" },
  { title: "DHS Assam Recruitment 2025 – Submit Online Application for 191 Grade-III Posts", href: "dhs-recruitment/" },
  { title: "RRB NTPC Result 2025 – Check Your NTPC (Graduate Level) Exam Scorecard", href: "rrb-result/" },
  { title: "SSC CHSL Tier 1 2025 Exam Date Announced – Check Exam Shifts & Timings", href: "ssc-chsl/" }
];

// Configuration
const postsPerPage = 15;
let currentPage = 1;

// Render pagination buttons
function renderPagination(totalPages, current) {
  const pagination = document.getElementById("pagination");
  if (!pagination) return;
  pagination.innerHTML = "";

  // Previous button
  const prevBtn = document.createElement("button");
  prevBtn.textContent = "Prev";
  prevBtn.disabled = current === 1;
  prevBtn.addEventListener("click", () => renderPosts(current - 1));
  pagination.appendChild(prevBtn);

  // Page numbers
  for (let i = 1; i <= totalPages; i++) {
    const pageBtn = document.createElement("button");
    pageBtn.textContent = i;
    if (i === current) pageBtn.className = "active";
    pageBtn.addEventListener("click", () => renderPosts(i));
    pagination.appendChild(pageBtn);
  }

  // Next button
  const nextBtn = document.createElement("button");
  nextBtn.textContent = "Next";
  nextBtn.disabled = current === totalPages;
  nextBtn.addEventListener("click", () => renderPosts(current + 1));
  pagination.appendChild(nextBtn);
}

// Render posts/articles
window.renderPosts = function(page = 1, searchTerm = "") {
  const postsContainer = document.getElementById("postsList");
  if (!postsContainer) return;

  currentPage = page;
  postsContainer.innerHTML = "";

  if (!window.POSTS || !Array.isArray(window.POSTS) || window.POSTS.length === 0) {
    document.getElementById("pagination").innerHTML =
      '<div style="text-align:center; padding:20px; color:#666;">Loading latest updates...</div>';
    return;
  }

  // Filter posts by search term
  const filteredPosts = window.POSTS
  .filter(p => p && p.title && p.href && p.title.toLowerCase().includes(searchTerm.toLowerCase()))
  .slice()   // create a shallow copy
  .reverse(); // reverse order so last added comes first

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / postsPerPage));
  const start = (page - 1) * postsPerPage;
  const end = start + postsPerPage;

  // Render current page posts
  filteredPosts.slice(start, end).forEach(p => {
    const a = document.createElement("a");
    a.className = "post-item";
    a.href = p.href;
    a.setAttribute("title", p.title);
    a.textContent = p.title;
    a.loading = "lazy";
    postsContainer.appendChild(a);
  });

  renderPagination(totalPages, currentPage);
};

// Search button functionality
document.getElementById("searchBtn")?.addEventListener("click", () => {
  const query = document.getElementById("q")?.value.trim() || "";
  window.renderPosts(1, query);
});

// Initial render
window.renderPosts();
