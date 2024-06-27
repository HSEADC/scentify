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
  const cards = document.querySelectorAll(
    '.O_CardLiterature, .O_CardStar, .O_CardStarSecType, .O_CardChar'
  )
  const block = document.querySelector('.C_BlockCharacters, .C_BlockLiterature, C_BlockSeleb')

  console.log(cards)
  cards.forEach((card) => {
    const tags = card.getAttribute('data-tags')

    if (tags && tags.split(',').includes(tag)) {
      card.style.display = ''
    } else {
      card.style.display = 'none'
    }
  })
}

document.addEventListener('DOMContentLoaded', function () {
  const filterTags = document.querySelectorAll('.A_Filter, .A_Tag')

  filterTags.forEach((tag) => {
    tag.addEventListener('click', function () {
      const selectedTag = this.innerText.trim()
      if (this.classList.contains('active')) {
        filterTags.forEach((tag) => tag.classList.remove('active'))
        const cards = document.querySelectorAll(
          '.O_CardLiterature, .O_CardStar, .O_CardStarSecType, .O_CardChar'
        )
        cards.forEach((card) => {
          card.style.display = ''
        })
      } else {
        filterTag(selectedTag)

        filterTags.forEach((tag) => tag.classList.remove('active'))
        this.classList.add('active')
      }
    })
  })
})