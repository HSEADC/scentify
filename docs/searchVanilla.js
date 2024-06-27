/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function initSearch() {
  var O_Search = document.querySelector('.O_Search');
  var A_Button = document.querySelector('.A_Button');
  var A_SearchInput = document.querySelector('.A_SearchInput');
  var requestText = getSearchRequest();
  if (requestText != undefined) {
    A_SearchInput.value = requestText;

    //будет работать, когда подключим данные
    if (content) {
      SearchContent(requestText);
    }
  } else {
    A_SearchInput.value = '';
  }
  A_SearchInput.addEventListener('input', function (e) {
    requestText = e.target.value;
    if (requestText.length >= 3) {
      A_Button.classList.remove('disabled');
    } else {
      A_Button.classList.add('disabled');
    }
  });
  A_Button.addEventListener('click', function (e) {
    if (!e.target.classList.contains('disabled')) {
      requestText = A_SearchInput;
      setSearchRequest();
      SearchContent(requestText);
    }
  });
  A_SearchInput.addEventListener('keydown', function (e) {
    requestText = e.target.value;
    if (e.key === 'Enter') {
      setSearchRequest();
    }
  });
}
function getSearchRequest() {
  var url = new URL(window.location.href);
  var searchParams = new URLSearchParams(url.search);
  if (searchParams.has('request')) {
    return searchParams.get('request');
  }
}
function setSearchRequest() {
  var url = window.location.href.split('?')[0];
  window.location.href = url + 'request=' + requestText;
}
function createContentCard(contentItemData) {
  var contentItem = document.createElement('div');
  contentItem.classList.add('O_ContentItem');
  var contentItemCover = document.createElement('img');
  contentItemCover.classList.add('A_ContentItemCover');
  contentItemCover.src = contentItemData.image;
  var contentItemTitle = document.createElement('h2');
  contentItemTitle.classList.add('A_ContentItemTitle');
  contentItemTitle.innerText = contentItemData.title;
  var contentItemDescription = document.createElement('p');
  contentItemDescription.classList.add('A_ContentItemDescription');
  contentItemDescription.innerText = contentItemData.description;
  var contentItemTags = document.createElement('div');
  contentItemTags.classList.add('C_ContentItemTags');
  contentItemData.tags.forEach(function (tag) {
    var contentItemTag = document.createElement('div');
    contentItemTag.classList.add('A_ContentItemTag');
    contentItemTag.innerText = tag;
    contentItemTags.appendChild(contentItemTag);
  });
  contentItem.appendChild(contentItemCover);
  contentItem.appendChild(contentItemTitle);
  contentItem.appendChild(contentItemDescription);
  contentItem.appendChild(contentItemTags);
  return contentItem;
}
function SearchContent(requestText) {
  var contentItemContainer = document.querySelector('.S_Content');
  contentItemContainer.innerHTML = '';
  var contentItemIds = [];
  content.forEach(function (contentItem) {
    var nbspRegex = /[\u202F\u00A0]/gm;
    var punctuationRegex = /[.,\/#!$%\^&\*;:{}=\-_`~()]/gm;
    var title = contentItem.title,
      description = contentItem.description;
    title = title.replaceAll(nbspRegex, ' ');
    title = title.replaceAll(punctuationRegex, '');
    description = description.replaceAll(nbspRegex, ' ');
    description = description.replaceAll(punctuationRegex, '');
    if (requestText.length >= 3) {
      if (title.includes(requestText) || description.includes(requestText)) {
        contentItemIds.push(contentItem.id);
      }
    } else {
      contentItemIds.push(contentItem.id);
    }
  });
  if (contentItemIds.length > 0) {
    renderCardsByIds(contentItemContainer, contentItemIds);
  } else {
    renderNothingFound(contentItemContainer);
  }
}
function renderNothingFound(container) {
  container.innerHTML = 'Ничего не найдено';
}
function renderCardsByIds(container, ids) {
  ids = _toConsumableArray(new Set(ids));
  ids.forEach(function (id) {
    content.forEach(function (item) {
      if (item.id == id) {
        container.appendChild(createContentCard(item));
      }
    });
  });
}
document.addEventListener('DOMContentLoaded', function () {
  initSearch();
  getSearchRequest();
});
/******/ })()
;