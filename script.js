//change fonts
document.body.style.fontFamily = "Open Sans";

const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

headings.forEach(heading => {
    heading.style.fontFamily = "Oswald";
});

// search
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

// Sample blog posts for search
const posts = [
  "TITLE HEADING - May 2, 2016",
  "TITLE HEADING - April 23, 2016",
  "TITLE HEADING - April 7, 2016",
  "More Hats!",
  "Hats for Summer",
  "Denim Jackets Ideas",
  "Streetwear Inspiration",
  "New York Runway Highlights",
  "Top 10 Accessories",
  "Winter Sweaters Collection"
];

// Toggle search input visibility
searchBtn.addEventListener('click', () => {
  searchInput.classList.toggle('hidden');
  searchResults.classList.add('hidden'); // Hide results initially
  searchInput.focus();
});

// Search logic
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase().trim();
  searchResults.innerHTML = '';

  if (!query) {
    searchResults.classList.add('hidden');
    return;
  }

  const matched = posts.filter(post => post.toLowerCase().includes(query));

  if (matched.length === 0) {
    searchResults.innerHTML = '<p class="p-2 text-gray-600">No results found</p>';
  } else {
    matched.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('p-2', 'hover:bg-gray-200', 'cursor-pointer');
      div.textContent = item;

      // Click to fill search input
      div.addEventListener('click', () => {
        searchInput.value = item;
        searchResults.classList.add('hidden');
      });

      searchResults.appendChild(div);
    });
  }

  searchResults.classList.remove('hidden');
});

// LIKE BUTTON FUNCTIONALITY
function likeFunction(button) {
  const span = button.querySelector('span');
  let likes = parseInt(span.textContent) || 0;
  likes++;
  span.textContent = likes;
}

// Add event listeners to all like buttons
document.querySelectorAll('.likeBtn').forEach(btn => {
  btn.addEventListener('click', () => likeFunction(btn));
});

// reply
function toggleReplies(id) {
  const replies = document.getElementById(id);
  replies.classList.toggle('hidden');
}

// Add event listeners to all reply buttons
document.querySelectorAll('.replyBtn').forEach(btn => {
  btn.addEventListener('click', () => {
    toggleReplies(btn.dataset.reply);
  });
});

  // backToTop btn
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTop.classList.remove("hidden");
    } else {
      backToTop.classList.add("hidden");
    }
  });

  backToTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });