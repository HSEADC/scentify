const filters = document.querySelectorAll(".A_Filter");
const cardsContainer = document.getElementById("C_BlockSeleb", "C_BlockLiterature");

console.log('hello world');

// Set up click event handlers for each filter option
filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    // Clear out existing active class on all filters
    filters.forEach((f) => f.classList.remove("active"));

    // Add active class to current filter
    filter.classList.add("active");

    // Determine which filter was clicked and apply it to the cards
    const filterValue = filter.dataset.filter || "";
    cardsContainer.children.forEach((card) => {
      if (!card.classList.contains("hidden")) {
        // Only consider visible cards
        if (card.hasAttribute("data-tags") && card.getAttribute("data-tags").split(" ").some((tag) => tag === filterValue)) {
          // Card contains the desired tag, leave it alone
          return;
        } else {
          // Card doesn't contain the desired tag, hide it
          card.classList.add("hidden");
        }
      }
    });
  });
});