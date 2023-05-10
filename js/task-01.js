const listOfCategories = document.querySelector("#categories");
const items = listOfCategories.children;

console.log(`Number of categories: ${items.length}`);

Array.from(items).forEach((item) => {
  const nameOfCategory = item.querySelector("h2").textContent;
  const elementsOfCategory = item.querySelectorAll("li").length;
  console.log(`Category: ${nameOfCategory}`);
  console.log(`Elements: ${elementsOfCategory}`);
});
