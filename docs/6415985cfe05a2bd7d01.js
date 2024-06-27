var filters = document.querySelectorAll(".A_Filter");
var cardsContainer = document.getElementById("C_BlockSeleb", "C_BlockLiterature");
console.log('hello world');

// Set up click event handlers for each filter option
filters.forEach(function (filter) {
  filter.addEventListener("click", function () {
    // Clear out existing active class on all filters
    filters.forEach(function (f) {
      return f.classList.remove("active");
    });

    // Add active class to current filter
    filter.classList.add("active");

    // Determine which filter was clicked and apply it to the cards
    var filterValue = filter.dataset.filter || "";
    cardsContainer.children.forEach(function (card) {
      if (!card.classList.contains("hidden")) {
        // Only consider visible cards
        if (card.hasAttribute("data-tags") && card.getAttribute("data-tags").split(" ").some(function (tag) {
          return tag === filterValue;
        })) {
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