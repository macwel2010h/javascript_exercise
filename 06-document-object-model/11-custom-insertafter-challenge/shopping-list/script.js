const insertAfter = function (itemAdd, itemAfter) {
  itemAfter.parentElement.insertBefore(itemAdd, itemAfter.nextSibling);
};

const li = document.createElement("li");
li.textContent = "Insert me after";

const firstItem = document.querySelector("li:first-child");

insertAfter(li, firstItem);
