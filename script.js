// ===== GLOBAL VARIABLES =====
let globalScore = 0;

// ===== DOM ELEMENTS =====
const likeButtons = document.querySelectorAll(".likeBtn");
const replyButtons = document.querySelectorAll(".replyBtn");
const globalScoreDisplay = document.getElementById("globalScore");
const modal = document.getElementById("modal");
const subscribeBtn = document.getElementById("subscribeBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const backToTopBtn = document.getElementById("backToTop");
const tagButtons = document.querySelectorAll(".tagBtn");
const searchInput = document.getElementById("searchInput");
const postsContainer = document.getElementById("postsContainer");
const posts = postsContainer.querySelectorAll("article");

// ===== LIKE BUTTONS =====
likeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const span = btn.querySelector("span");
    let count = Number(span.textContent);
    count++;
    span.textContent = count;

    // Update global score
    globalScore++;
    globalScoreDisplay.textContent = globalScore;

    if (globalScore >= 10) {
      globalScoreDisplay.style.color = "gold";
    }
  });
});

// ===== REPLY BUTTONS =====
replyButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const replyDiv = btn.parentElement.nextElementSibling;
    replyDiv.classList.toggle("hidden");
  });
});

// ===== MODAL OPEN/CLOSE =====
subscribeBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("flex");
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
});

// Close modal when clicking outside
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
});

// ===== BACK TO TOP BUTTON =====
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopBtn.classList.remove("hidden");
  } else {
    backToTopBtn.classList.add("hidden");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== TAG FILTERING =====
tagButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const tag = btn.dataset.tag;

    posts.forEach(post => {
      const tags = post.dataset.tags.split(",");
      if (tags.includes(tag)) {
        post.style.display = "block";
      } else {
        post.style.display = "none";
      }
    });
  });
});

// ===== REAL-TIME SEARCH =====
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();

  posts.forEach(post => {
    const text = post.innerText.toLowerCase();
    post.style.display = text.includes(query) ? "block" : "none";
  });
});
