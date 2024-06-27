// const filters = document.querySelectorAll(".A_Filter");
// const cardsContainer = document.getElementsByClassName("C_BlockSeleb", "C_BlockLiterature", "A_Filter", "A_Tag");

// console.log('hello world');

// // Set up click event handlers for each filter option
// filters.forEach((filter) => {
//   filter.addEventListener("click", () => {
//     // Clear out existing active class on all filters
//     filters.forEach((f) => f.classList.remove("active"));

//     // Add active class to current filter
//     filter.classList.add("active");

//     // Determine which filter was clicked and apply it to the cards
//     const filterValue = filter.dataset.filter || "";
//     cardsContainer.children.forEach((card) => {
//       if (!card.classList.contains("hidden")) {
//         // Only consider visible cards
//         if (card.hasAttribute("data-tags") && card.getAttribute("data-tags").split(" ").some((tag) => tag === filterValue)) {
//           // Card contains the desired tag, leave it alone
//           return;
//         } else {
//           // Card doesn't contain the desired tag, hide it
//           card.classList.add("hidden");
//         }
//       }
//     });
//   });
// });

function filterTag(tag) {
  var cards = document.querySelectorAll('.O_CardLiterature, .O_CardStar, .O_CardStarSecType, .O_CardChar');
  var block = document.querySelector('.C_BlockCharacters, .C_BlockLiterature, C_BlockSeleb');
  console.log(cards);
  cards.forEach(function (card) {
    var tags = card.getAttribute('data-tags');
    if (tags && tags.split(',').includes(tag)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}
document.addEventListener('DOMContentLoaded', function () {
  var filterTags = document.querySelectorAll('.A_Filter, .A_Tag');
  filterTags.forEach(function (tag) {
    tag.addEventListener('click', function () {
      var selectedTag = this.innerText.trim();
      if (this.classList.contains('active')) {
        filterTags.forEach(function (tag) {
          return tag.classList.remove('active');
        });
        var cards = document.querySelectorAll('.O_CardLiterature, .O_CardStar, .O_CardStarSecType, .O_CardChar');
        cards.forEach(function (card) {
          card.style.display = '';
        });
      } else {
        filterTag(selectedTag);
        filterTags.forEach(function (tag) {
          return tag.classList.remove('active');
        });
        this.classList.add('active');
      }
    });
  });
});